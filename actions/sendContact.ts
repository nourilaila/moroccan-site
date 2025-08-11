"use server";

interface ContactFormState {
  success?: boolean;
  error?: string;
}

/**
 * Server action for handling the contact form submission.  A simple honeypot
 * field named `_honeypot` is used to detect bots: if filled, the submission
 * fails silently.  In a real deployment you might send the data to a
 * third‑party service (e.g. email provider) here.
 */
export async function sendContact(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot check
  if (formData.get('_honeypot')) {
    return { success: false, error: 'Spam detected' };
  }
  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();
  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' };
  }
  // Basic email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { success: false, error: 'Invalid email address.' };
  }
  // TODO: integrate with an email API (e.g. Resend or SendGrid)
  console.log('New contact submission', { name, email, message });
  return { success: true };
}