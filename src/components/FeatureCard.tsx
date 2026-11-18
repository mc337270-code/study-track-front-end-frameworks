interface Props { icon: string; title: string; text: string; }

export default function FeatureCard({ icon, title, text }: Props) {
  return (
    <div className="card">
      <div style={{ fontSize: 32 }}>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
