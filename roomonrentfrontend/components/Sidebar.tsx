// components/Sidebar.js
const Sidebar = () => {
  const menuItems = [
    { name: "Bookings", icon: "🏠" },
    { name: "Messages", icon: "💬" },
    { name: "Payments", icon: "💳" },
    { name: "Profile", icon: "👤" },
    { name: "Logout", icon: "🚪" },
  ];

  return (
    <div className="w-64 bg-indigo-700 h-screen p-6 text-white flex flex-col rounded-r-3xl">
      <div className="flex items-center gap-3 mb-12">
        <div className="bg-white p-2 rounded-lg text-xl text-indigo-700">
          🏠
        </div>
        <span className="font-bold text-xl tracking-tight">ROOM.RENT</span>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-4 py-4 px-4 hover:bg-white/10 rounded-xl cursor-pointer transition mb-2"
          >
            <span>{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
