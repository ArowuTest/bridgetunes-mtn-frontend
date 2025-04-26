export interface Draw {
  id: string;
  name: string;
  date: string;
  type: 'daily' | 'weekly';
  eligibleDigits: number[];
  amount: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  scheduledDate: string;
  executedDate?: string;
}