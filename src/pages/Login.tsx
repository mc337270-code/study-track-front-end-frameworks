import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    login(name.trim());
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="col">
      <h1>Login</h1>
      <input placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
      <Button type="submit">Entrar</Button>
    </form>
  );
}
