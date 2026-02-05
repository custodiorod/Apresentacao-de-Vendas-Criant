"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
    children?: React.ReactNode;
    className?: string;
}

function HandWrittenTitle({
    children,
    className = "",
}: HandWrittenTitleProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
                opacity: { duration: 0.5 },
            },
        },
    };

    return (
        <div className={`relative inline-block px-6 py-4 ${className}`}>
            <motion.svg
                width="220"
                height="140"
                viewBox="0 0 220 140"
                initial="hidden"
                animate="visible"
                className="absolute -top-4 -left-6 -right-6 -bottom-4 pointer-events-none"
            >
                <motion.path
                    d="M 110 10 
                       C 170 10, 210 35, 210 70
                       C 210 105, 170 130, 110 130
                       C 50 130, 10 105, 10 70
                       C 10 35, 50 10, 110 10"
                    fill="none"
                    strokeWidth="3"
                    stroke="url(#gradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={draw}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FD7E00" />
                        <stop offset="100%" stopColor="#FF6600" />
                    </linearGradient>
                </defs>
            </motion.svg>
            <div className="relative z-10 text-center">
                {children}
            </div>
        </div>
    );
}

export { HandWrittenTitle }
