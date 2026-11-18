import { Filter } from "../types";
import Button from "./Button";

interface Props { current: Filter; onChange: (f: Filter) => void; }

const options: Filter[] = ["todas", "pendentes", "concluidas"];

export default function FilterBar({ current, onChange }: Props) {
  return (
    <div className="row">
      {options.map((f) => (
        <Button key={f} variant={current === f ? "primary" : "ghost"} onClick={() => onChange(f)}>
          {f}
        </Button>
      ))}
    </div>
  );
}
