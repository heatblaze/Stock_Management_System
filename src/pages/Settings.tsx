import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Database, Palette } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useTheme } from '../contexts/ThemeContext';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    lowStock: true,
    stockMovement: false,
    supplierUpdates: true,
    systemUpdates: false
  });

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your account settings and preferences
        </p>
      </motion.div>

      {/* Profile Settings */}
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <User className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile Settings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Job Title
            </label>
            <input
              type="text"
              defaultValue="Inventory Manager"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              defaultValue="TechCorp Inc."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button>Save Profile Changes</Button>
        </div>
      </Card>

      {/* Appearance Settings */}
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <Palette className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Appearance</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Theme</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Choose between light and dark mode
              </p>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            </Button>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <Bell className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {key === 'lowStock' && 'Get notified when items are running low'}
                  {key === 'stockMovement' && 'Receive updates on stock movements'}
                  {key === 'supplierUpdates' && 'Get notifications about supplier changes'}
                  {key === 'systemUpdates' && 'Receive system maintenance notifications'}
                </p>
              </div>
              <button
                onClick={() => handleNotificationChange(key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  value ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <Shield className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Security</h2>
        </div>

        <div className="space-y-4">
          <div>
            <Button variant="outline">Change Password</Button>
          </div>
          <div>
            <Button variant="outline">Enable Two-Factor Authentication</Button>
          </div>
          <div>
            <Button variant="outline">Download Account Data</Button>
          </div>
        </div>
      </Card>

      {/* Data Management */}
      <Card className="p-6">
        <div className="flex items-center mb-6">
          <Database className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Data Management</h2>
        </div>

        <div className="space-y-4">
          <div>
            <Button variant="outline">Export Inventory Data</Button>
          </div>
          <div>
            <Button variant="outline">Import Stock Items</Button>
          </div>
          <div>
            <Button variant="outline">Backup Data</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;