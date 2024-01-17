import { TInputType } from "../app/types/input";

export const inputs: Array<{
    id: number;
    type: TInputType
}> = [
  { id: 1, type: 'text' },
  { id: 2, type: 'number' },
  { id: 3, type: 'date' },
  { id: 4, type: 'checkbox' },
  { id: 5, type: 'color' },
  { id: 6, type: 'datetime-local' },
  { id: 7, type: 'email' },
  { id: 8, type: 'file' },
  { id: 9, type: 'hidden' },
  { id: 10, type: 'image' },
  { id: 11, type: 'month' },
  { id: 12, type: 'password' },
  { id: 13, type: 'radio' },
  { id: 14, type: 'range' },
  { id: 15, type: 'reset' },
  { id: 16, type: 'search' },
  { id: 17, type: 'submit' },
  { id: 18, type: 'button' },
  { id: 19, type: 'tel' },
  { id: 20, type: 'time' },
  { id: 21, type: 'url' },
  { id: 22, type: 'week' },
];
