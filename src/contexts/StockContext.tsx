import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StockItem, Supplier, StockMovement } from '../types';
import { mockStockItems, mockSuppliers, mockStockMovements } from '../data/mockData';

interface StockContextType {
  stockItems: StockItem[];
  suppliers: Supplier[];
  stockMovements: StockMovement[];
  addStockItem: (item: Omit<StockItem, 'id' | 'lastUpdated'>) => void;
  updateStockItem: (id: string, updates: Partial<StockItem>) => void;
  deleteStockItem: (id: string) => void;
  addStockMovement: (movement: Omit<StockMovement, 'id' | 'timestamp'>) => void;
}

const StockContext = createContext<StockContextType | undefined>(undefined);

export const StockProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stockItems, setStockItems] = useState<StockItem[]>(mockStockItems);
  const [suppliers, setSuppliers] = useState<Supplier[]>(mockSuppliers);
  const [stockMovements, setStockMovements] = useState<StockMovement[]>(mockStockMovements);

  const addStockItem = (item: Omit<StockItem, 'id' | 'lastUpdated'>) => {
    const newItem: StockItem = {
      ...item,
      id: Date.now().toString(),
      lastUpdated: new Date().toISOString(),
    };
    setStockItems(prev => [...prev, newItem]);

    // Add a stock movement record
    const movement: StockMovement = {
      id: Date.now().toString() + '_movement',
      itemId: newItem.id,
      itemName: newItem.name,
      type: 'in',
      quantity: newItem.quantity,
      timestamp: new Date().toISOString(),
      reference: `INITIAL-${newItem.sku}`,
      notes: 'Initial stock entry'
    };
    setStockMovements(prev => [movement, ...prev]);
  };

  const updateStockItem = (id: string, updates: Partial<StockItem>) => {
    setStockItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, ...updates, lastUpdated: new Date().toISOString() }
          : item
      )
    );
  };

  const deleteStockItem = (id: string) => {
    setStockItems(prev => prev.filter(item => item.id !== id));
  };

  const addStockMovement = (movement: Omit<StockMovement, 'id' | 'timestamp'>) => {
    const newMovement: StockMovement = {
      ...movement,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    setStockMovements(prev => [newMovement, ...prev]);
  };

  return (
    <StockContext.Provider value={{
      stockItems,
      suppliers,
      stockMovements,
      addStockItem,
      updateStockItem,
      deleteStockItem,
      addStockMovement,
    }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error('useStock must be used within a StockProvider');
  }
  return context;
};