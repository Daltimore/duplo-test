import React from 'react';
import { ReactBaseModel } from '../models/ReactBase.class';

const LandingLayout: React.FC<ReactBaseModel> = ({ children }) => {
  return (
    <div className='relative'>
      {children}
    </div>
  );
}

export default LandingLayout;