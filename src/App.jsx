import { useState, useEffect } from 'react';

import { Footer, Home, Navbar } from './components/index';

const App = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                heigth: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleSize);
        handleSize();
        return () => window.removeEventListener('resize', handleSize);
    }, []);

    useEffect(() => {
        if (windowSize.width < 1025) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [windowSize]);
    return (
        <div className="bg-[whitesmoke] h-full">
            <Navbar isMobile={isMobile} />
            <Home />
            <Footer />
        </div>
    );
};

export default App;
