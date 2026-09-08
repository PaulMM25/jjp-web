"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./page.module.css";

export default function CopyEmail({ email }) {
  const [status, setStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email copied");
      timer.current = setTimeout(() => setStatus(""), 1800);
    } catch {
      setStatus("Could not copy email. Please try again.");
    }
  }

  return (
    <>
      <button type="button" className={styles.copyEmail} aria-label="Copy email" title="Copy email" onClick={copyEmail}>
        {status === "Email copied" ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
      </button>
      <span className={styles.copyStatus} role="status" aria-live="polite">{status}</span>
    </>
  );
}
