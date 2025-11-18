const Button = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "primary" | "secondary";
}) => {
  return (
    <div>
      {type === "primary" ? (
        <button className="bg-primary text-white font-medium text-sm  px-6 rounded flex items-center h-10 rounded-lg shadow-sm">
          {children}
        </button>
      ) : (
        <button className="bg-secondary text-text-muted font-medium text-sm  px-6 rounded flex items-center h-10 rounded-lg shadow-sm">
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
