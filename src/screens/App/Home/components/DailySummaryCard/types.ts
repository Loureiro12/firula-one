interface ICardProps {
  title: string;
  value: string;
  info: string;
}

export interface IDailySummaryCardProps {
  cards: ICardProps[];
}
