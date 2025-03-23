'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useRef, useEffect } from 'react';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from './Ui/button';
import './custom-checkbox.css';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './Ui/form';
import { Input } from './Ui/input';
import { useToast } from './Ui/use-toast';
import { Textarea } from './Ui/textarea';
import { useRouter } from 'next/navigation';
import { useSelection } from '@/utils/SelectionContext';

const ukPostcodeRegex =
  /^(GIR\s?0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2})|(?:[A-PR-UWYZ][A-HK-Y][0-9]{1,2})|(?:[A-PR-UWYZ][0-9][A-HJKPSTUW])|(?:[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]))\s?\d[ABD-HJLNP-UW-Z]{2})$/i;

// Zod schema for form validation
export const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters long.',
  }),

  secondName: z.string().min(2, {
    message: 'Second name must be at least 2 characters long.',
  }),

  phoneNumber: z.string().regex(/^\d{11}$/, { message: 'Phone number must be 10 digits.' }),
  email: z
    .string()
    .min(2, { message: 'Email must be at least 2 characters.' })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: 'Email does not match the required pattern.',
    }),

  typeOfLocation: z
    .enum(['HOME OWNER', 'PRIVATE HOUSE', 'COMMERCIAL PROPERTY'])
    .refine((value) => !!value, { message: 'Select one type of location.' }),

  postcode: z.string().regex(ukPostcodeRegex, {
    message: 'Invalid Uk postcode.',
  }),

  message: z.string().min(10, { message: 'Message should be at least 10 characters.' }),
  services: z
    .array(
      z.enum([
        'PLASTERING',
        'LIQUID SCREED',
        'K RENDERING',
        'RENDERING',
        'COLOURED SCREED',
        'ONSITE CONSULTATION',
        'REPAIRS',
        'RESTORATION',
        'FIREPROOFING',
        'ACOUSTIC PLASTERING',
        'MONOCOUCHE RENDERING',
        'SAND AND CEMENT RENDERING',
        'TRADITIONAL LIME RENDERING',
        'PEBBLE DASHING',
        'EXTERNAL WALL INSULATION',
        'PLASTERBOARDING/STUD WALLS',
      ])
    )
    .min(1, { message: 'Select at least one service.' }),
});

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  const { selected } = useSelection();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      secondName: '',
      phoneNumber: '',
      email: '',
      typeOfLocation: 'HOME OWNER', // Default value
      postcode: '',
      message: '',
      services: [],
    },
  });

  const { reset } = form;
  useEffect(() => {
    const validTypes: Array<'HOME OWNER' | 'PRIVATE HOUSE' | 'COMMERCIAL PROPERTY'> = [
      'HOME OWNER',
      'PRIVATE HOUSE',
      'COMMERCIAL PROPERTY',
    ];
    if (validTypes.includes(selected as 'HOME OWNER' | 'PRIVATE HOUSE' | 'COMMERCIAL PROPERTY')) {
      reset({
        ...form.getValues(),
        typeOfLocation: selected as 'HOME OWNER' | 'PRIVATE HOUSE' | 'COMMERCIAL PROPERTY',
      });
    }
  }, [selected, reset]);

  const onSubmit = async () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          }
        )
        .then(
          () => {
            console.info('SUCCESS');
            form.reset();
            if (router) {
              router.push('/success');
            }
          },
          (error) => {
            toast({
              variant: 'destructive',
              title: 'Email failed to send.',
              description: `Please contact us direct if this continues.`,
            });
            console.warn('FAILED...', JSON.stringify(error));
          }
        );
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef} // Required by EmailJS
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-[90%] space-y-6 w-full"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-orange">First Name</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-400 border-2 bg-white"
                  placeholder="Your First Name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="secondName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-orange">Second Name</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-400 border-2 bg-white"
                  placeholder="Your Second Name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-orange">Phone Number</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-400 border-2 bg-white"
                  placeholder="Your Phone Number"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-orange">Email</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-400 bg-white border-2"
                  placeholder="Your Email Address"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          <FormField
            control={form.control}
            name="typeOfLocation"
            render={() => (
              <FormItem>
                <FormLabel className="text-lg font-bold text-orange">Type of Property</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-2 text-darkblue">
                    {['HOME OWNER', 'PRIVATE HOUSE', 'COMMERCIAL PROPERTY'].map((service) => (
                      <label key={service} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          className="custom-radio mr-2"
                          value={service}
                          {...form.register('typeOfLocation')}
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold text-orange">Postcode</FormLabel>
                <FormControl>
                  <Input
                    className="border-slate-400 bg-white border-2"
                    placeholder="Your Postcode"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-orange">
                <span id="AllServices">Services</span>
              </FormLabel>
              <FormControl>
                <div className="grid grid-cols-1 md:grid-cols-2 text-darkblue">
                  {[
                    'PLASTERING',
                    'LIQUID SCREED',
                    'K RENDERING',
                    'RENDERING',
                    'COLOURED SCREED',
                    'ONSITE CONSULTATION',
                    'REPAIRS',
                    'RESTORATION',
                    'FIREPROOFING',
                    'ACOUSTIC PLASTERING',
                    'MONOCOUCHE RENDERING',
                    'SAND AND CEMENT RENDERING',
                    'TRADITIONAL LIME RENDERING',
                    'PEBBLE DASHING',
                    'EXTERNAL WALL INSULATION',
                    'PLASTERBOARDING/STUD WALLS',
                  ].map((service) => (
                    <label key={service} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="custom-checkbox mr-2"
                        value={service}
                        {...form.register('services')}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-orange">Message</FormLabel>
              <FormControl>
                <Textarea
                  className="border-slate-400 border-2 bg-white h-32"
                  placeholder="Give us more details here."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="text-md text-white bg-orange hover:bg-orange hover:bg-opacity-40 w-full lg:h-20 md:h-14 h-18 font-bold text-2xl p-2"
        >
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
