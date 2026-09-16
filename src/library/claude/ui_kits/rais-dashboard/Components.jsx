// MetricCard, Stepper, Toast, Button, Field, Chip
const MetricCard = ({label, value, delta, deltaDir, sub, icon, glow}) => (
  <div className="metric-card">
    <div className="metric-head">
      <div className={"metric-icon " + (glow || "")}><iconify-icon icon={icon} width="22"></iconify-icon></div>
      <button className="icon-btn sm"><iconify-icon icon="eva:more-horizontal-fill" width="18"></iconify-icon></button>
    </div>
    <div className="metric-label">{label}</div>
    <div className="metric-value">{value}</div>
    <div className="metric-foot">
      <span className={"delta " + deltaDir}>
        <iconify-icon icon={deltaDir === "up" ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill"} width="14"></iconify-icon>
        {delta}
      </span>
      <span className="metric-sub">{sub}</span>
    </div>
  </div>
);

const Stepper = ({steps, active}) => (
  <div className="stepper">
    {steps.map((s, i) => {
      const state = i < active ? "done" : i === active ? "active" : "idle";
      return (
        <React.Fragment key={i}>
          <div className={"step " + state}>
            <span className="step-num">{i + 1}</span>
            <span className="step-label">{s}</span>
          </div>
          {i < steps.length - 1 && <span className="step-sep"></span>}
        </React.Fragment>
      );
    })}
  </div>
);

const Toast = ({severity, message, onClose}) => {
  const icons = {
    info: "solar:info-circle-bold",
    success: "eva:checkmark-fill",
    warning: "solar:danger-triangle-bold",
    error: "solar:close-circle-bold",
    default: "solar:info-circle-bold"
  };
  return (
    <div className={"toast t-" + (severity || "default")}>
      <span className="toast-icon"><iconify-icon icon={icons[severity || "default"]} width="16"></iconify-icon></span>
      <span className="toast-msg">{message}</span>
      <button className="toast-close" onClick={onClose}><iconify-icon icon="solar:close-circle-bold" width="20"></iconify-icon></button>
    </div>
  );
};

const Button = ({variant = "contained", color = "primary", size = "md", children, onClick, disabled, glow}) => (
  <button className={`btn btn-${variant} btn-${color} btn-${size}` + (glow ? " btn-glow" : "")} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

const Field = ({label, placeholder, value, state}) => (
  <div className={"field " + (state || "")}>
    {label && <span className="field-label">{label}</span>}
    <div className="field-ctrl">
      <span>{value || <span className="field-placeholder">{placeholder}</span>}</span>
    </div>
  </div>
);

const Chip = ({tone = "default", children, removable}) => (
  <span className={"chip chip-" + tone}>
    {children}
    {removable && <iconify-icon icon="solar:close-circle-bold" width="14"></iconify-icon>}
  </span>
);

Object.assign(window, { MetricCard, Stepper, Toast, Button, Field, Chip });
