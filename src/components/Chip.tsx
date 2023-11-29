export default function Chip({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => {};
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`h-fit w-fit text-xs rounded-xl px-4 py-1 bg-link-400/20 text-link-500 dark:text-link-400 ${
        onClick && "hover:bg-link-300/20 transition-all cursor-pointer"
      } ${className}`}
    >
      {children}
    </div>
  );
}
