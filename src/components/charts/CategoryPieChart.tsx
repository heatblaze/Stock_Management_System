import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

const data = [
  { name: 'Electronics', value: 35, color: '#3b82f6' },
  { name: 'Computers', value: 25, color: '#10b981' },
  { name: 'Audio', value: 20, color: '#f59e0b' },
  { name: 'Accessories', value: 15, color: '#ef4444' },
  { name: 'Components', value: 5, color: '#8b5cf6' },
];

const CategoryPieChart: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
            border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
            borderRadius: '8px',
            color: theme === 'dark' ? '#f9fafb' : '#111827'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryPieChart;