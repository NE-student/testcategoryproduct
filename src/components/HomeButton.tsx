'use client';

import React from 'react';
import Link from 'next/link';

const HomeButton: React.FC = () => {
    return (
        <Link href={`/`} className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors">
            Головна
        </Link>
    );
};

export default HomeButton;