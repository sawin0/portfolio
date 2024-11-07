// src/components/ui/badge.jsx
import React from 'react';

export function Badge({
    variant = 'default',
    className = '',
    children,
    ...props
}) {
    const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:focus:ring-neutral-300';

    const variants = {
        default: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80',
        secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
    };

    return (
        <span
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}
