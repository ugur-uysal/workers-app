const Button = (props) => {
  const { className, type, onClick, children } = props;
  return (
    <button
      className={`max-w-[40rem] p-2 text-lg bg-teal-700 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-600 text-white ${
        className || ""
      }`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
