export interface ICardProps {
  id: string;
  type: 'Confirmed' | 'Pending' | 'Cancelled' | 'Completed';
  title: string;
  description: string;
}