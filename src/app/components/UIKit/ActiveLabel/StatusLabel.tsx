import { ReactNode } from "react";

import clsx from "clsx";

export interface IStatusLabelProps {
  children: ReactNode;
  status: string;
  disabled?: boolean;
}

export enum Status {
  Active = "active",
  NotActive = "notActive",
  Pending = "pending",
  Suspended = "suspended",
}

function StatusLabel({ children, status, disabled }: IStatusLabelProps) {
  return (
    <div
      className={clsx(
        `inline-flex items-center px-3.5 py-1 rounded-3xl text-sm font-medium`,
        status === Status.Active && "text-green-700 bg-green-100",
        status === Status.NotActive && "text-red-700 bg-red-100",
        status === Status.Pending && "text-orange-700 bg-orange-100",
        status === Status.Suspended && "text-blue-700 bg-blue-100",
        {
          ["opacity-75 cursor-not-allowed"]: disabled,
        }
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
}
export default StatusLabel;
