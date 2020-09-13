export type Color =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'olive'
  | 'green'
  | 'teal'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'pink'
  | 'brown'
  | 'grey'
  | 'black'
  | undefined;

export interface Todo {
  id: string;
  createdAt: Date;
  done: boolean;
  title: string;
  content: string;
  deadLine: Date;
  labelText: string;
  labelColor: Color;
}
