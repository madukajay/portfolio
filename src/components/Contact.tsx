import { Download, Mail, MapPin, Phone } from "lucide-react"
import { type FormEvent, useState } from "react"
import { site } from "../data/site"
import { GitHubIcon, LinkedInIcon } from "./BrandIcons"
import { OptionalAnchor } from "./OptionalAnchor"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const emptyForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [opened, setOpened] = useState(false)

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setOpened(false)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: Partial<FormState> = {}
    if (!form.name.trim()) nextErrors.name = "Please enter your name."
    if (!emailPattern.test(form.email.trim())) nextErrors.email = "Please enter a valid email address."
    if (form.message.trim().length < 10) nextErrors.message = "Please write a short message."

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = form.subject.trim() || "Portfolio enquiry"
    const body = `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <section id="contact" className="bg-zinc-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="If you have a system to build, a network problem to untangle, or a role to discuss, send a note. I read every message."
          />
          <dl className="space-y-5">
            <Detail label="Email">
              <a
                href={`mailto:${site.email}`}
                className="font-medium break-all text-zinc-800 transition-colors hover:text-emerald-600"
              >
                {site.email}
              </a>
            </Detail>
            <Detail label="Phone">
              <a
                href={site.phoneHref}
                className="font-medium text-zinc-800 transition-colors hover:text-emerald-600"
              >
                {site.phone}
              </a>
            </Detail>
            <Detail label="Location">
              <span className="font-medium text-zinc-800">{site.location}</span>
            </Detail>
            <Detail label="Availability">
              <span className="font-medium text-zinc-800">{site.availability}</span>
            </Detail>
          </dl>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <li>
              <OptionalAnchor
                href={site.linkedinUrl}
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 transition-colors hover:text-emerald-600"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </OptionalAnchor>
            </li>
            <li>
              <OptionalAnchor
                href={site.githubUrl}
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 transition-colors hover:text-emerald-600"
                pendingClassName="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </OptionalAnchor>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 transition-colors hover:text-emerald-600"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
            </li>
          </ul>

          {site.resumeUrl ? (
            <a
              href={site.resumeUrl}
              className="mt-8 inline-flex items-center gap-2 rounded-[5px] bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
          ) : null}
        </Reveal>

        <Reveal delayMs={80}>
          <h3 className="mb-6 text-xl font-bold text-zinc-800">Drop me a message</h3>
          <form className="space-y-5" onSubmit={onSubmit} noValidate>
            <Field label="Name" error={errors.name} htmlFor="contact-name">
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={inputClass(Boolean(errors.name))}
              />
            </Field>
            <Field label="Email" error={errors.email} htmlFor="contact-email">
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={inputClass(Boolean(errors.email))}
              />
            </Field>
            <Field label="Subject" htmlFor="contact-subject">
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={(event) => update("subject", event.target.value)}
                placeholder="What is this about?"
                className={inputClass(false)}
              />
            </Field>
            <Field label="Message" error={errors.message} htmlFor="contact-message">
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="Tell me about the system, role, or idea."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={inputClass(Boolean(errors.message))}
              />
            </Field>
            <button
              type="submit"
              className="w-full rounded-[5px] bg-emerald-600 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Send message
            </button>
            <p className="text-sm text-zinc-500" role="status">
              {opened
                ? `Your email app should open with this message addressed to ${site.email}.`
                : "This opens your email app. Nothing is stored on a server."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  const Icon = label === "Email" ? Mail : label === "Phone" ? Phone : label === "Location" ? MapPin : null
  return (
    <div className="flex gap-3">
      {Icon ? <Icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" /> : <span className="mt-1 h-4 w-4 shrink-0" />}
      <div>
        <dt className="text-xs text-zinc-500 sm:text-sm">{label}</dt>
        <dd className="mt-0.5 text-sm sm:text-base">{children}</dd>
      </div>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-zinc-700">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function inputClass(invalid: boolean) {
  return `w-full rounded-lg border bg-white px-4 py-3 text-zinc-800 transition-colors focus:ring-1 focus:outline-none ${
    invalid
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-zinc-300 focus:border-emerald-600 focus:ring-emerald-600"
  }`
}
