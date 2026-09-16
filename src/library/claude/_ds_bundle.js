/* @ds-bundle: {"format":3,"namespace":"RAISDesignSystem_019e07","components":[],"sourceHashes":{"ui_kits/rais-dashboard/Components.jsx":"fc2ced315ee7","ui_kits/rais-dashboard/Sidebar.jsx":"98e51da1e403","ui_kits/rais-dashboard/TopBar.jsx":"da2db3676a27"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RAISDesignSystem_019e07 = window.RAISDesignSystem_019e07 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/rais-dashboard/Components.jsx
try { (() => {
// MetricCard, Stepper, Toast, Button, Field, Chip
const MetricCard = ({
  label,
  value,
  delta,
  deltaDir,
  sub,
  icon,
  glow
}) => /*#__PURE__*/React.createElement("div", {
  className: "metric-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "metric-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "metric-icon " + (glow || "")
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: icon,
  width: "22"
})), /*#__PURE__*/React.createElement("button", {
  className: "icon-btn sm"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "eva:more-horizontal-fill",
  width: "18"
}))), /*#__PURE__*/React.createElement("div", {
  className: "metric-label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "metric-value"
}, value), /*#__PURE__*/React.createElement("div", {
  className: "metric-foot"
}, /*#__PURE__*/React.createElement("span", {
  className: "delta " + deltaDir
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: deltaDir === "up" ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill",
  width: "14"
}), delta), /*#__PURE__*/React.createElement("span", {
  className: "metric-sub"
}, sub)));
const Stepper = ({
  steps,
  active
}) => /*#__PURE__*/React.createElement("div", {
  className: "stepper"
}, steps.map((s, i) => {
  const state = i < active ? "done" : i === active ? "active" : "idle";
  return /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "step " + state
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-num"
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    className: "step-label"
  }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "step-sep"
  }));
}));
const Toast = ({
  severity,
  message,
  onClose
}) => {
  const icons = {
    info: "solar:info-circle-bold",
    success: "eva:checkmark-fill",
    warning: "solar:danger-triangle-bold",
    error: "solar:close-circle-bold",
    default: "solar:info-circle-bold"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "toast t-" + (severity || "default")
  }, /*#__PURE__*/React.createElement("span", {
    className: "toast-icon"
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icons[severity || "default"],
    width: "16"
  })), /*#__PURE__*/React.createElement("span", {
    className: "toast-msg"
  }, message), /*#__PURE__*/React.createElement("button", {
    className: "toast-close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "solar:close-circle-bold",
    width: "20"
  })));
};
const Button = ({
  variant = "contained",
  color = "primary",
  size = "md",
  children,
  onClick,
  disabled,
  glow
}) => /*#__PURE__*/React.createElement("button", {
  className: `btn btn-${variant} btn-${color} btn-${size}` + (glow ? " btn-glow" : ""),
  onClick: onClick,
  disabled: disabled
}, children);
const Field = ({
  label,
  placeholder,
  value,
  state
}) => /*#__PURE__*/React.createElement("div", {
  className: "field " + (state || "")
}, label && /*#__PURE__*/React.createElement("span", {
  className: "field-label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "field-ctrl"
}, /*#__PURE__*/React.createElement("span", null, value || /*#__PURE__*/React.createElement("span", {
  className: "field-placeholder"
}, placeholder))));
const Chip = ({
  tone = "default",
  children,
  removable
}) => /*#__PURE__*/React.createElement("span", {
  className: "chip chip-" + tone
}, children, removable && /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "solar:close-circle-bold",
  width: "14"
}));
Object.assign(window, {
  MetricCard,
  Stepper,
  Toast,
  Button,
  Field,
  Chip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rais-dashboard/Components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rais-dashboard/Sidebar.jsx
try { (() => {
// Sidebar.jsx — fixed left nav, 280px wide
const SidebarItem = ({
  icon,
  label,
  active,
  sub,
  badge
}) => /*#__PURE__*/React.createElement("div", {
  className: "side-item" + (active ? " active" : "") + (sub ? " sub" : "")
}, icon && /*#__PURE__*/React.createElement("iconify-icon", {
  icon: icon,
  width: sub ? 18 : 22
}), /*#__PURE__*/React.createElement("span", {
  className: "side-label"
}, label), badge && /*#__PURE__*/React.createElement("span", {
  className: "side-badge"
}, badge));
const SidebarSection = ({
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "side-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "rais-overline side-section-title"
}, title), children);
const Sidebar = () => /*#__PURE__*/React.createElement("aside", {
  className: "sidebar"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/iak-mark.png",
  alt: "",
  className: "brand-mark"
}), /*#__PURE__*/React.createElement("div", {
  className: "brand-word"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-name"
}, "IAK STUDIO"), /*#__PURE__*/React.createElement("div", {
  className: "brand-tier"
}, "RAIS \xB7 Pro"))), /*#__PURE__*/React.createElement("div", {
  className: "org"
}, /*#__PURE__*/React.createElement("div", {
  className: "org-avatar"
}, "RA"), /*#__PURE__*/React.createElement("div", {
  className: "org-meta"
}, /*#__PURE__*/React.createElement("div", {
  className: "org-name"
}, "Rais Workspace"), /*#__PURE__*/React.createElement("div", {
  className: "org-role"
}, "Free")), /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "eva:arrow-ios-downward-fill",
  width: "18",
  style: {
    color: "var(--fg-secondary)"
  }
})), /*#__PURE__*/React.createElement(SidebarSection, {
  title: "OVERVIEW"
}, /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:widget-bold",
  label: "App"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:chart-2-bold",
  label: "Analytics",
  active: true
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:bag-2-bold",
  label: "E-commerce"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:bank-bold",
  label: "Banking"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:book-2-bold",
  label: "Booking"
})), /*#__PURE__*/React.createElement(SidebarSection, {
  title: "MANAGEMENT"
}, /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:users-group-rounded-bold",
  label: "User"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:chat-round-line-bold",
  label: "Mailing",
  badge: "2"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:bell-bold",
  label: "Push alarm"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:settings-bold",
  label: "Settings"
})), /*#__PURE__*/React.createElement("div", {
  className: "upsell"
}, /*#__PURE__*/React.createElement("div", {
  className: "upsell-title"
}, "Pro plan"), /*#__PURE__*/React.createElement("div", {
  className: "upsell-body"
}, "Unlock advanced reporting and Slack integration."), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-contained btn-sm"
}, "Upgrade")));
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rais-dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rais-dashboard/TopBar.jsx
try { (() => {
// TopBar.jsx
const TopBar = ({
  onToast
}) => /*#__PURE__*/React.createElement("header", {
  className: "topbar"
}, /*#__PURE__*/React.createElement("div", {
  className: "search"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "eva:search-fill",
  width: "20",
  style: {
    color: "var(--fg-muted)"
  }
}), /*#__PURE__*/React.createElement("input", {
  placeholder: "Search\u2026"
}), /*#__PURE__*/React.createElement("kbd", null, "\u2318K")), /*#__PURE__*/React.createElement("div", {
  className: "topbar-right"
}, /*#__PURE__*/React.createElement("button", {
  className: "icon-btn",
  title: "Languages"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "circle-flags:us",
  width: "22"
})), /*#__PURE__*/React.createElement("button", {
  className: "icon-btn",
  title: "Theme"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "solar:moon-bold",
  width: "20"
})), /*#__PURE__*/React.createElement("button", {
  className: "icon-btn dot",
  title: "Notifications",
  onClick: onToast
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "solar:bell-bold",
  width: "20"
}), /*#__PURE__*/React.createElement("span", {
  className: "bell-dot"
})), /*#__PURE__*/React.createElement("div", {
  className: "avatar-wrap"
}, /*#__PURE__*/React.createElement("img", {
  className: "avatar",
  src: "../../assets/avatar-sample.jpg",
  alt: ""
}), /*#__PURE__*/React.createElement("span", {
  className: "avatar-status"
}))));
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rais-dashboard/TopBar.jsx", error: String((e && e.message) || e) }); }

})();
