interface Props { total: number; done: number; }

export default function StatsPanel({ total, done }: Props) {
  const percent = total ? Math.round((done / total) * 100) : 0;
  return (
    <div className="stats">
      <div className="card"><h4>Total</h4><b>{total}</b></div>
      <div className="card"><h4>Concluídas</h4><b>{done}</b></div>
      <div className="card"><h4>Progresso</h4><b>{percent}%</b></div>
    </div>
  );
}
