export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 rounded-xl shadow-sm 
      hover:shadow-md transition-shadow dark:shadow-blue-200  duration-300 w-80 h-50 md:w-96"
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border-b border-gray-100 dark:text-white">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{children}</h3>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-500 mt-1 dark:text-white">{children}</p>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4 dark:text-white">{children}</div>;
}
