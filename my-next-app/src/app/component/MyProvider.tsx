
'use client';

import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [value, setValue] = useState<any>(null); 

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;