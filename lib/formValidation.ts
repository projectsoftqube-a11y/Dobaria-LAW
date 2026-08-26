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
  /**
   * Honeypot. Hidden from real users, so anything in here came from a bot.
   * Never validated and never shown — the server silently discards the
   * submission when it is filled.
   */
  company: string;
}

/** The shape every enquiry form starts in. */
export const EMPTY_ENQUIRY: EnquiryForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  practice: "",
  message: "",
  company: "",
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

/** Visible fields, in the order they appear in every form. */
export const FIELD_ORDER = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "practice",
  "message",
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

/**
 * Move focus to the first field that failed, so a validation error is never
 * announced somewhere off-screen. Each form passes its own id prefix because
 * the contact section can share a page with other content using the same
 * field names.
 */
export function focusFirstError(errors: Record<string, string>, idPrefix: string): void {
  const first = FIELD_ORDER.find((field) => errors[field]);
  if (!first) return;

  const el = document.getElementById(`${idPrefix}-${first}`);
  if (!el) return;

  el.focus({ preventScroll: true });
  el.scrollIntoView({ block: "center", behavior: "smooth" });
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
    company: form.company,
    source,
  };
}
