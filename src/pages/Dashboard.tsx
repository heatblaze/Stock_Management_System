import React from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, AlertTriangle, TrendingUp } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import StockValueChart from '../components/charts/StockValueChart';
import CategoryPieChart from '../components/charts/CategoryPieChart';
import { mockDashboardStats, mockStockItems, mockStockMovements } from '../data/mockData';

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Items',
      value: mockDashboardStats.totalItems,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      name: 'Total Value',
      value: `$${mockDashboardStats.totalValue.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      name: 'Low Stock Items',
      value: mockDashboardStats.lowStockItems,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900',
    },
    {
      name: 'Recent Movements',
      value: mockDashboardStats.recentMovements,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
  ];

  const lowStockItems = mockStockItems.filter(item => item.quantity < item.minStock);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Overview of your stock management system
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Stock Value by Category
          </h3>
          <StockValueChart />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Category Distribution
          </h3>
          <CategoryPieChart />
        </Card>
      </div>

      {/* Low Stock Alerts & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Low Stock Alerts
          </h3>
          <div className="space-y-4">
            {lowStockItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">SKU: {item.sku}</p>
                </div>
                <div className="text-right">
                  <Badge variant="error">{item.quantity} left</Badge>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Min: {item.minStock}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {mockStockMovements.slice(0, 5).map((movement) => (
              <div key={movement.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{movement.itemName}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{movement.reference}</p>
                </div>
                <div className="text-right">
                  <Badge variant={movement.type === 'in' ? 'success' : 'warning'}>
                    {movement.type === 'in' ? '+' : '-'}{movement.quantity}
                  </Badge>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(movement.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;