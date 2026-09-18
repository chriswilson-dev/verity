"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/parse", { method: "POST", body: formData });
    const data = await res.json();
    setText(data.text);
  }

  return (
    <main>
      <h1>Verity</h1>
      <input type="file" accept="application/pdf" onChange={handleUpload} />
      <pre>{text}</pre>
    </main>
  );
}