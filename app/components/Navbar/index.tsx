import Navbar from './Navbar';
import React, { useEffect } from 'react';

const Navbarin: React.FC = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const debounce = (fn: Function) => {
                let frame: number;
                return (...params: any[]) => {
                    if (frame) {
                        cancelAnimationFrame(frame);
                    }
                    frame = requestAnimationFrame(() => {
                        fn(...params);
                    });
                };
            };

            const storeScroll = () => {
                document.documentElement.dataset.scroll = window.scrollY.toString();
            };

            const debouncedScroll = debounce(storeScroll);

            document.addEventListener('scroll', debouncedScroll, { passive: true });

            storeScroll();
        }
    }, []);

    return (
        <>
            <Navbar />
        </>
    );
};

export default Navbarin;
