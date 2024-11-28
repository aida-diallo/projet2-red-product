
'use client';

import React, { createContext } from 'react';


interface MyContextType {
    value: any; 
    setValue: React.Dispatch<React.SetStateAction<any>>;
}


const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;