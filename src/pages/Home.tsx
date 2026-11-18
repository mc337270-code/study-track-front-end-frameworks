import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  return (
    <>
      <h1>Organize seus estudos com o StudyTrack</h1>
      <p>Cadastre tarefas, acompanhe seu progresso e nunca perca um prazo.</p>
      <div className="stats">
        <FeatureCard icon="✅" title="Tarefas" text="Crie, conclua e exclua tarefas por matéria." />
        <FeatureCard icon="📊" title="Progresso" text="Veja estatísticas do que já foi concluído." />
        <FeatureCard icon="💾" title="Salvo no navegador" text="Seus dados ficam guardados automaticamente." />
      </div>
      <p><Link to="/login">Comece agora →</Link></p>
    </>
  );
}
