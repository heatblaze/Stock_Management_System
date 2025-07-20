import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import AddStock from './pages/AddStock';
import StockMovement from './pages/StockMovement';
import Suppliers from './pages/Suppliers';
import Settings from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="add-stock" element={<AddStock />} />
            <Route path="stock-movement" element={<StockMovement />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;