import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

const data = [
  { category: 'Electronics', value: 45000 },
  { category: 'Computers', value: 38000 },
  { category: 'Audio', value: 12500 },
  { category: 'Accessories', value: 8200 },
  { category: 'Components', value: 15300 },
];

const StockValueChart: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
        <XAxis 
          dataKey="category" 
          stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
        />
        <YAxis 
          stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
            border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
            borderRadius: '8px',
            color: theme === 'dark' ? '#f9fafb' : '#111827'
          }}
        />
        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StockValueChart;