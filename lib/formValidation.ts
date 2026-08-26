// lib/formValidation.ts
// Shared validation for every enquiry form on the site, so the contact page,
// the home/about contact section and the consultation page all apply the same
// rules and produce the same error copy.

import { isValidUSPhone } from "@/lib/phone";

export interface EnquiryForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practice: string;
  message: string;
}

/** The shape every enquiry form starts in. */
export const EMPTY_ENQUIRY: EnquiryForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  practice: "",
  message: "",
};

/** Practice areas offered in the "matter type" selector. */
export const PRACTICE_OPTIONS = [
  "Immigration Law",
  "Green Cards & Visas",
  "Citizenship & Naturalization",
  "Deportation Defense",
  "Family Law",
  "International Divorce",
  "Business Law",
  "Real Estate Law",
  "Other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate an enquiry form.
 *
 * Every field except phone is required; phone is optional but must be a
 * complete US number when supplied, so a half-typed number cannot be sent.
 */
export function validateEnquiry(form: EnquiryForm): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!form.firstName.trim()) errors.firstName = "First name is required";
  if (!form.lastName.trim()) errors.lastName = "Last name is required";

  if (!form.email.trim()) errors.email = "Email is required";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = "Please enter a valid email";

  if (form.phone.trim() && !isValidUSPhone(form.phone)) {
    errors.phone = "Please enter a complete 10-digit phone number";
  }

  if (!form.practice.trim()) errors.practice = "Please select a matter type";

  if (!form.message.trim()) errors.message = "Please describe your matter";
  else if (form.message.trim().length < 10) {
    errors.message = "Please add a little more detail";
  }

  return errors;
}

/** Build the request body the /api/contact route expects. */
export function toContactPayload(form: EnquiryForm, source: string) {
  return {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    practice: form.practice.trim(),
    message: form.message.trim(),
    source,
  };
}
