import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// export const RegistrationSchema = z.object({
//   firstName: z.string().nonempty("First name is required"),
//   lastName: z.string().nonempty("Last name is required"),
//   email: z.string().email("Invalid email address"),
//   address1: z.string().nonempty("Address is required"),
//   address2: z.string().nonempty("Address is required"),
//   state: z.array(z.string()).nonempty("State is required"),
//   phoneNumber: z.string().nonempty("Phone number is required"),
//   password: z.string().nonempty("Password is required"),
//   confirmPassword: z.string().nonempty("Confirm password is required"),
//   termsAndConditions: z.boolean().nonempty('Please agree'),
// });

export type IRegistrationFields = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  state?: string[];
  phoneNumber?: string;
  confirmPassword?: string;
  termsAndConditions?: boolean;
};
