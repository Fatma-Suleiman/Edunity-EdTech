import "./Buttons.css";

export function Button({
  text,
  variant = "primary",
  width,
  height,
  onClick,
  suffix,
  iconSize = "58px",
  className = ""
}) {
  return (
    <button
      className={`btn btn-${variant}  ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      <span>{text}</span>

      {suffix && (
        <span
          className="btn-icon-wrapper"
          style={{ width: iconSize, height: iconSize }}
        >
          {suffix}
        </span>
      )}
    </button>
  );
}

