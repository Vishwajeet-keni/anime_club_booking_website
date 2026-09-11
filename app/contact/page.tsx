"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

type FormState = {
  name: string;
  email: string;
  regNo: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  regNo: "",
  subject: "general",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name: form.name.trim(),
        email: form.email.trim(),
        registration_number: form.regNo.trim() || null,
        subject: form.subject,
        message: form.message.trim(),
      });

    if (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      return;
    }

    setForm(initialForm);
    setStatus("success");
  };

  return (
    <>
      <Navbar />

      <main className="px-6 pb-20 pt-10 sm:pt-14">
        <div className="mx-auto max-w-5xl">

          {/* HEADER */}
          <section className="mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-emerald-400">
              Contact
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-7xl">
              Let&apos;s talk.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Have a question about an event, want to collaborate, or simply
              want to reach the club? Send us a message and we&apos;ll take a
              look.
            </p>
          </section>

          {/* CONTENT */}
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* CONTACT INFO */}
            <section>
              <div className="rounded-lg border border-white/10 bg-black/20 p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  Find us
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Anime Club
                </h2>

                <div className="mt-7 space-y-6 text-sm">

                  <div>
                    <p className="text-zinc-500">
                      University
                    </p>

                    <p className="mt-1 text-zinc-200">
                      VIT Bhopal University
                    </p>
                  </div>

                  <div>
                    <p className="text-zinc-500">
                      Email
                    </p>

                    <a
                      href="mailto:animeclub@vitbhopal.ac.in"
                      className="mt-1 block text-emerald-400 hover:underline"
                    >
                      animeclub@vitbhopal.ac.in
                    </a>
                  </div>

                  <div>
                    <p className="text-zinc-500">
                      Location
                    </p>

                    <p className="mt-1 leading-6 text-zinc-200">
                      Bhopal-Indore Highway,
                      <br />
                      Kothrikalan, Sehore,
                      <br />
                      Madhya Pradesh – 466114
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* FORM */}
            <section>
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-white/10 bg-black/20 p-7 md:p-8"
              >

                <div className="grid gap-6 md:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-md border border-white/10 bg-white px-4 py-3 text-black outline-none transition focus:border-emerald-400"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-white/10 bg-white px-4 py-3 text-black outline-none transition focus:border-emerald-400"
                    />
                  </div>

                  {/* REGISTRATION NUMBER */}
                  <div>
                    <label
                      htmlFor="regNo"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Registration Number

                      <span className="ml-2 text-xs text-zinc-500">
                        Optional
                      </span>
                    </label>

                    <input
                      id="regNo"
                      name="regNo"
                      type="text"
                      maxLength={30}
                      value={form.regNo}
                      onChange={handleChange}
                      placeholder="Your VIT registration number"
                      className="w-full rounded-md border border-white/10 bg-white px-4 py-3 text-black outline-none transition focus:border-emerald-400"
                    />
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-white/10 bg-white px-4 py-3 text-black outline-none transition focus:border-emerald-400"
                    >
                      <option value="general">
                        General Question
                      </option>

                      <option value="booking">
                        Event / Booking
                      </option>

                      <option value="recruitment">
                        Recruitment
                      </option>

                      <option value="collaboration">
                        Collaboration
                      </option>
                    </select>
                  </div>

                </div>

                {/* MESSAGE */}
                <div className="mt-6">

                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-300"
                    >
                      Message
                    </label>

                    <span className="text-xs text-zinc-500">
                      {form.message.length}/2000
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full resize-y rounded-md border border-white/10 bg-white px-4 py-3 text-black outline-none transition focus:border-emerald-400"
                  />

                </div>

                {/* STATUS */}
                {status === "success" && (
                  <div className="mt-5 rounded-md border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-300">
                    Your message has been sent successfully.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-5 rounded-md border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
                    Something went wrong. Please check your details and try
                    again.
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-7 rounded-md bg-emerald-400 px-7 py-3 font-semibold text-black transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "submitting"
                    ? "Sending..."
                    : "Send message"}
                </button>

              </form>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}