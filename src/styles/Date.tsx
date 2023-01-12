import { FC } from "react";

export type ExpenseDateProps = {
  date: Date;
};
// const ExpenseDate: FC<ExpenseDateProps> = ({ date }: any) => {
//   //Retrieve Day Month and Year from Date object
//   const month = date.toLocaleString("en-US", { month: "long" });
//   const day = date.toLocaleString("en-US", { day: "2-digit" });
//   const year = date.getFullYear();

//   //Return Dates to Date UI Component
//   return (
//     <div className="expense-date">
//       <div className="expense-date__month">{month}</div>
//       <div className="expense-date__day">{day}</div>
//       <div className="expense-date__year">{year}</div>
//     </div>
//   );
// };
// export default ExpenseDate;

// interface DateConstructor {
//   new (): Date;
// //   new (value: number | string): Date;
// //   new (
// //     year: number,
// //     month: number,
// //     date?: number,
// //     hours?: number,
// //     minutes?: number,
// //     seconds?: number,
// //     ms?: number
// //   ): Date;
// }

export const ShowDate: FC<ExpenseDateProps> = ({ date }: any) => {
  //   const date = new Date();
  let mes = String(date.getMonth() + 1).padStart(2, "0");
  let ano = date.getFullYear();
  // let dataAtual = `${mes} de ${ano}`;

  return (
    <div>
      `${mes} de ${ano}`
    </div>
  );
};

export const ShowNewDate: FC<ExpenseDateProps> = ({ date }: any) => {
  //   const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return (
    <div>
      <p>
        `${hours}:${minutes}:${seconds} - ${month}/${day}/${year}`
      </p>
      ;
    </div>
  );
};
