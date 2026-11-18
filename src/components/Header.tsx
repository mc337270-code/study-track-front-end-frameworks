import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="header">
      <strong>📚 StudyTrack</strong>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        {user ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <Button variant="ghost" onClick={() => { logout(); navigate("/"); }}>
              Sair ({user})
            </Button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
}
