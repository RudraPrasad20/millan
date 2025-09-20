export type Payment = {
  id: string;
  amount: number;
  key: string;
  email: string;
  date: Date;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    key: "pending",
    email: "m@example.com",
    date: new Date("2023-10-01"),
  },
  {
    id: "489e1d42",
    amount: 125,
    key: "processing",
    email: "example@gmail.com",
    date: new Date("2023-10-02"),
  },
  // ...
];
