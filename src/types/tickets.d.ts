export type TicketType = {
  id: number;
  title: string;
  price: number;
  discount?: number;
  validUntil?: string;
};
export type CategoryType = {
  title: string;
  content: Ticket[];
  description?: string;
};
