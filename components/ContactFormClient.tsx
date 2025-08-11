"use client";
import { useFormState } from "react-dom";
import { sendContact } from "../actions/sendContact";
type State = { success?: boolean; error?: string };
export default function ContactFormClient({ locale }: { locale: string }) {
  const [state, formAction] = useFormState<State, FormData>(sendContact as any, {});
  return (
    <form action={formAction} className="grid gap-4 max-w-lg">
      <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="flex flex-col gap-1">
        <span>{locale === 'ar' ? 'الاسم' : locale === 'fr' ? 'Nom' : 'Name'}</span>
        <input name="name" required className="rounded border border-sand-50 bg-white px-3 py-2" type="text"/>
      </label>
      <label className="flex flex-col gap-1">
        <span>{locale === 'ar' ? 'البريد الإلكتروني' : locale === 'fr' ? 'Email' : 'Email'}</span>
        <input name="email" required type="email" className="rounded border border-sand-50 bg-white px-3 py-2"/>
      </label>
      <label className="flex flex-col gap-1">
        <span>{locale === 'ar' ? 'الرسالة' : locale === 'fr' ? 'Message' : 'Message'}</span>
        <textarea name="message" required rows={4} className="rounded border border-sand-50 bg-white px-3 py-2"/>
      </label>
      {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}
      {state?.success && <p className="text-green-600 text-sm">{locale === 'ar' ? 'تم إرسال رسالتك بنجاح.' : locale === 'fr' ? 'Votre message a été envoyé avec succès.' : 'Your message has been sent successfully.'}</p>}
      <button type="submit" className="rounded bg-terracotta-600 px-4 py-2 text-bone-100 hover:bg-terracotta-900">
        {locale === 'ar' ? 'إرسال' : locale === 'fr' ? 'Envoyer' : 'Send'}
      </button>
    </form>
  );
}
