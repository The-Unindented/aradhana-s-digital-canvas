
import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

export function GlobalLoader() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if we've already shown the loader in this session? 
        // The user request says "when the user loads the website for the first time".
        // I'll assume every refresh for now, or I can use sessionStorage.
        // Let's stick to simple "on mount".

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2; // Adjust speed
            });
        }, 20);

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500); // Total time roughly aligns with progress

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500">
            <div className="w-[80%] max-w-md space-y-4 text-center">
                <h2 className="text-3xl font-display font-bold animate-pulse text-foreground">Loading...</h2>
                <Progress value={progress} className="w-full h-6" />
            </div>
        </div>
    );
}
