const TextError = ({ children }: any) => {
  return (
    <div className="error" style={{ fontSize: "14px", color: "red" }}>
      {children}
    </div>
  );
};

export default TextError;
