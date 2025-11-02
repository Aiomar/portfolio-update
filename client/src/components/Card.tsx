export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-50 w-80 flex-col rounded-xl border border-gray-200
    bg-white shadow-sm transition-shadow duration-300 hover:shadow-md md:w-96
    dark:bg-neutral-900 dark:shadow-blue-200">
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-100 p-4 dark:text-white">
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
      {children}
    </h3>
  );
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1 text-sm text-gray-500 dark:text-white">{children}</p>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4 dark:text-white">{children}</div>;
}
