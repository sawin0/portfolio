export function Card({ className = '', children, ...props }) {
    return (
        <div
            className={`rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardContent({ className = '', children, ...props }) {
    return (
        <div className={`p-6 ${className}`} {...props}>
            {children}
        </div>
    );
}
