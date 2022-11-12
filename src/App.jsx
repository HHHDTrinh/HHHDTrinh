import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar, Home } from './components/index';
import { About, Contact, Portfolio } from './pages/index';

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
        <div className="overflow-y-auto overflow-x-hidden h-screen p-4 lg:px-4 lg:py-8 bg-gradient-to-b from-purple-500 to-purple-300">
            <Navbar isMobile={isMobile} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    );
};

export default App;
