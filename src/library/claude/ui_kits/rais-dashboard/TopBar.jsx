// TopBar.jsx
const TopBar = ({onToast}) => (
  <header className="topbar">
    <div className="search">
      <iconify-icon icon="eva:search-fill" width="20" style={{color:"var(--fg-muted)"}}></iconify-icon>
      <input placeholder="Search…" />
      <kbd>⌘K</kbd>
    </div>
    <div className="topbar-right">
      <button className="icon-btn" title="Languages"><iconify-icon icon="circle-flags:us" width="22"></iconify-icon></button>
      <button className="icon-btn" title="Theme"><iconify-icon icon="solar:moon-bold" width="20"></iconify-icon></button>
      <button className="icon-btn dot" title="Notifications" onClick={onToast}>
        <iconify-icon icon="solar:bell-bold" width="20"></iconify-icon>
        <span className="bell-dot"></span>
      </button>
      <div className="avatar-wrap">
        <img className="avatar" src="../../assets/avatar-sample.jpg" alt="" />
        <span className="avatar-status"></span>
      </div>
    </div>
  </header>
);
window.TopBar = TopBar;
