"use client";

import { useState } from "react";

const TO = "surajkmr4218@gmail.com";

export function ContactForm() {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function buildMailto() {
    const signedBody = from ? `${body}\n\n— ${from}` : body;
    return `mailto:${TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(signedBody)}`;
  }

  const fieldClass =
    "w-full bg-transparent border border-hairline rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted/70 focus:outline-none focus:border-accent transition-colors";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = buildMailto();
      }}
      className="w-full max-w-md space-y-3"
    >
      <input
        type="email"
        required
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="Your email"
        className={fieldClass}
      />
      <input
        type="text"
        required
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className={fieldClass}
      />
      <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Message"
        rows={4}
        className={`${fieldClass} resize-none`}
      />
      <button
        type="submit"
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent border border-accent/40 rounded-md px-4 py-2 hover:bg-accent/10 transition-colors"
      >
        Send ↗
      </button>
    </form>
  );
}
