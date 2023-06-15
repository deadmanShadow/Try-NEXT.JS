"use client";

import React from 'react';

const Template = ({children}) => {
    console.log('from Template');
    return (
        <div>
            <button>WOW</button>
            {children}
        </div>
    );
};

export default Template;