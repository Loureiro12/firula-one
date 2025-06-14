export interface ICardProps {
  id: string;
  type: 'Confirmed' | 'Pending';
  title: string;
  description: string;
}