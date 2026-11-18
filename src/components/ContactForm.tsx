import { useState, FormEvent } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="col">
      <input name="name" placeholder="Nome" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Mensagem" value={form.message} onChange={handleChange} required />
      <Button type="submit">Enviar</Button>
      {sent && <p>✅ Mensagem enviada com sucesso!</p>}
    </form>
  );
}
