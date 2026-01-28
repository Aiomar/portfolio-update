import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "flex h-full w-80 flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md md:w-96 dark:bg-neutral-900 dark:shadow-lg dark:shadow-blue-500/50",
          className,
        ),
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx("border-b border-gray-100 p-4 dark:text-white", className),
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: CardProps) {
  return (
    <h3
      className={twMerge(
        clsx("text-lg font-semibold text-gray-800 dark:text-white", className),
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: CardProps) {
  return (
    <p
      className={twMerge(
        clsx("mt-1 text-sm text-gray-500 dark:text-white", className),
      )}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={twMerge(clsx("p-4 dark:text-white", className))}>
      {children}
    </div>
  );
}
