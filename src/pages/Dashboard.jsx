const Dashboard = () => {
  const cards = [
    {
      icon: '👥',
      title: 'Users',
      value: '1,245',
      subtitle: 'New this week: 48',
    },
    {
      icon: '💰',
      title: 'Revenue',
      value: '₹75,000',
      subtitle: 'Monthly total',
    },
    {
      icon: '🔔',
      title: 'Notifications',
      value: '5',
      subtitle: 'Unseen alerts',
    },
  ];

  return (
    <div>
      <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
        Welcome back! Here's a quick overview:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
              <span>{card.icon}</span> {card.title}
            </h2>
            <p className="text-2xl font-bold text-dark dark:text-white">{card.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
