"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "../../components/Ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/Ui/form";
import { Input } from "../../components/Ui/input";
import { useToast } from "../../components/Ui/use-toast"; //optional
import { Textarea } from "../../components/Ui/textarea";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First ame must be at least 2 characters long.",
  }),
  secondName: z.string().min(2, {
    message: "Second name must be at least 2 characters long.",
  }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits." }),
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
  postcode: z.string().regex(/^[A-Z0-9]{2,4} \d[A-Z]{2}$/, {
    message: "Invalid postcode format.",
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

export default FormSchema;
