export default function Button({ label, onClick, color, disabled }) {
  return (
    <>
      <button
        disabled={disabled}
        className={`btn btn-${color} px-3 m-2`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}
