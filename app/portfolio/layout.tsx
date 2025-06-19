export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center  px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 transition-colors duration-500">
      <div className="w-full max-w-7xl flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
