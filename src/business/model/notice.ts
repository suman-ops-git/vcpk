export interface Notice {
  id: number;
  title: string;
  message: string;
  date: Date;
  type?: 'info' | 'warning' | 'success' | 'error'; // optional for styling
}
