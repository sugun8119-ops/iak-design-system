// Sidebar.jsx — fixed left nav, 280px wide
const SidebarItem = ({icon, label, active, sub, badge}) => (
  <div className={"side-item" + (active ? " active" : "") + (sub ? " sub" : "")}>
    {icon && <iconify-icon icon={icon} width={sub ? 18 : 22}></iconify-icon>}
    <span className="side-label">{label}</span>
    {badge && <span className="side-badge">{badge}</span>}
  </div>
);

const SidebarSection = ({title, children}) => (
  <div className="side-section">
    <div className="rais-overline side-section-title">{title}</div>
    {children}
  </div>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="brand">
      <img src="../../assets/iak-mark.png" alt="" className="brand-mark" />
      <div className="brand-word">
        <div className="brand-name">IAK STUDIO</div>
        <div className="brand-tier">RAIS · Pro</div>
      </div>
    </div>
    <div className="org">
      <div className="org-avatar">RA</div>
      <div className="org-meta">
        <div className="org-name">Rais Workspace</div>
        <div className="org-role">Free</div>
      </div>
      <iconify-icon icon="eva:arrow-ios-downward-fill" width="18" style={{color:"var(--fg-secondary)"}}></iconify-icon>
    </div>

    <SidebarSection title="OVERVIEW">
      <SidebarItem icon="solar:widget-bold" label="App" />
      <SidebarItem icon="solar:chart-2-bold" label="Analytics" active />
      <SidebarItem icon="solar:bag-2-bold" label="E-commerce" />
      <SidebarItem icon="solar:bank-bold" label="Banking" />
      <SidebarItem icon="solar:book-2-bold" label="Booking" />
    </SidebarSection>

    <SidebarSection title="MANAGEMENT">
      <SidebarItem icon="solar:users-group-rounded-bold" label="User" />
      <SidebarItem icon="solar:chat-round-line-bold" label="Mailing" badge="2" />
      <SidebarItem icon="solar:bell-bold" label="Push alarm" />
      <SidebarItem icon="solar:settings-bold" label="Settings" />
    </SidebarSection>

    <div className="upsell">
      <div className="upsell-title">Pro plan</div>
      <div className="upsell-body">Unlock advanced reporting and Slack integration.</div>
      <button className="btn btn-contained btn-sm">Upgrade</button>
    </div>
  </aside>
);
window.Sidebar = Sidebar;
