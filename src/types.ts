export interface Task {
  id: number;
  title: string;
  subject: string;
  done: boolean;
}
export type Filter = "todas" | "pendentes" | "concluidas";
