function CheckButton({ type, children }) {
  return (
    <button
      className={`text-5xl px-5 py-2 font-bold text-white mx-2 rounded-md ${type}`}
    >
      {children}
    </button>
  );
}

export default CheckButton;
