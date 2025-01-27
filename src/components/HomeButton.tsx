'use client';

import React from 'react';
import Link from 'next/link';

const HomeButton: React.FC = () => {

    return (
        <Link href={`/`} className="text-blue-500 hover:underline">
            Головна
        </Link>
    );
};

export default HomeButton;