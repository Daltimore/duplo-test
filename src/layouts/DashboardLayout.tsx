import React from 'react';
import { ReactBaseModel } from '../models/ReactBase.class';
import Sidebar from '../components/sidebar'

const DashboardLayout: React.FC<ReactBaseModel> = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      {children}
    </div>
  );
}

export default DashboardLayout;