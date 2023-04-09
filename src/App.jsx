import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './style.css';

const App = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;

    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Home isMobile={isMobile} />}
                />
                <Route
                    path='/about'
                    element={<About isMobile={isMobile} />}
                />
                <Route
                    path='/work'
                    element={<Home isMobile={isMobile} />}
                />
                <Route
                    path='/contact'
                    element={<Home isMobile={isMobile} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
