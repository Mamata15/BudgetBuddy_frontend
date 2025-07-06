import '../CSS/Sidebar.css';

const Sidebar = () => {
  const menu = [
    { label: 'Account', icon: '👤' },
    { label: 'Income', icon: '💰' },
    { label: 'Expenses', icon: '📊' },
    { label: 'Budget', icon: '🎯' },
    { label: 'History', icon: '🔄' },
    { label: 'Logout', icon: '🚪' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-title">Budget Buddy</div>
      <ul className="menu-list">
        {menu.map((item) => (
          <li key={item.label} className="menu-item">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
