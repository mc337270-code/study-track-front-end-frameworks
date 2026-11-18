import { useState, useRef, FormEvent } from "react";
import Button from "./Button";

interface Props { onAdd: (title: string, subject: string) => void; }

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // useRef

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), subject.trim() || "Geral");
    setTitle("");
    setSubject("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <input ref={inputRef} placeholder="Nova tarefa" value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Matéria" value={subject}
        onChange={(e) => setSubject(e.target.value)} />
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
