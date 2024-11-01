"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "./Ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Ui/form";
import { Input } from "./Ui/input";
import { useToast } from "./Ui/use-toast";
import { Textarea } from "./Ui/textarea";

const ukPostcodeRegex =
  /^(GIR\s?0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2})|(?:[A-PR-UWYZ][A-HK-Y][0-9]{1,2})|(?:[A-PR-UWYZ][0-9][A-HJKPSTUW])|(?:[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]))\s?\d[ABD-HJLNP-UW-Z]{2})$/i;

// Zod schema for form validation
export const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters long.",
  }),
  secondName: z.string().min(2, {
    message: "Second name must be at least 2 characters long.",
  }),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must be 10 digits." }),
  email: z
    .string()
    .min(2, { message: "Email must be at least 2 characters." })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Email does not match the required pattern.",
    }),
  typeOfLocation: z.enum([
    "Home Owner",
    "Private House",
    "Commercial Property",
  ]),
  postcode: z.string().regex(ukPostcodeRegex, {
    message: "Invalid Uk postcode.",
  }),
  message: z
    .string()
    .min(10, { message: "Message should be at least 10 characters." }),
  services: z
    .array(
      z.enum([
        "PLASTERING",
        "LIQUID SCREED",
        "K RENDERING",
        "RENDERING",
        "COLOURED SCREED",
        "ONSITE CONSULTATION",
      ]),
    )
    .min(1, { message: "Select at least one service." }),
});

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      secondName: "",
      phoneNumber: "",
      email: "",
      typeOfLocation: "Home Owner", // Default value
      postcode: "",
      message: "",
      services: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          },
        )
        .then(
          () => {
            console.info("SUCCESS");
            toast({
              title: "Email sent.",
              description: `Thanks ${data.firstName}, We'll be in touch.`,
            });
            form.reset();
          },
          (error) => {
            toast({
              variant: "destructive",
              title: "Email failed to send.",
              description: `Please contact support if this continues.`,
            });
            console.warn("FAILED...", JSON.stringify(error));
          },
        );
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef} // Required by EmailJS
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">First Name</FormLabel>
              <FormControl>
                <Input
                  className="border-primary bg-white"
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
              <FormLabel className="text-lg">Second Name</FormLabel>
              <FormControl>
                <Input
                  className="border-primary bg-white"
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
              <FormLabel className="text-lg">Phone Number</FormLabel>
              <FormControl>
                <Input
                  className="border-primary bg-white"
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
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  className="border-primary bg-white"
                  placeholder="Your Email Address"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeOfLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Type of Location</FormLabel>
              <FormControl>
                <select {...field} className="border-primary bg-white">
                  <option value="Home Owner">Home Owner</option>
                  <option value="Private House">Private House</option>
                  <option value="Commercial Property">
                    Commercial Property
                  </option>
                </select>
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
              <FormLabel className="text-lg">Postcode</FormLabel>
              <FormControl>
                <Input
                  className="border-primary bg-white"
                  placeholder="Your Postcode"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <FormLabel className="text-lg">Services</FormLabel>
              <FormControl>
                <div className="flex flex-col">
                  {[
                    "PLASTERING",
                    "LIQUID SCREED",
                    "K RENDERING",
                    "RENDERING",
                    "COLOURED SCREED",
                    "ONSITE CONSULTATION",
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={service}
                        {...form.register("services")}
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
              <FormLabel className="text-lg">Message</FormLabel>
              <FormControl>
                <Textarea
                  className="border-primary bg-white"
                  placeholder="Type your message here."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="text-md text-white bg-lightblue hover:bg-darkblue"
        >
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
