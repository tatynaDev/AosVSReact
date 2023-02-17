import './App.scss';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect, useState} from "react";
import Header from "./Header";

function App() {

    const [effect, setEffect] = useState('first')

    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = event => {
        setScrollTop(event.currentTarget.scrollTop);
    };


    useEffect(() => {
        window.scroll(0,0)
        AOS.init({duration: 1000})
        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    return (
        <>
            <Header effect={effect}
                    setEffect={setEffect}
                    scrollTop={scrollTop}
                    setScrollTop={setScrollTop}
            />
            <div className="top">
                <div className="animation" onScroll={handleScroll} data-aos='fade-up'>
                     <h1>Animation N1</h1>
                </div>

                <div className="animation" onScroll={handleScroll} data-aos='fade-up'>
                     <h1>Animation N2</h1>
                </div>

                <div className="animation" onScroll={handleScroll} data-aos='fade-up'>
                     <h1>Animation N3</h1>
                </div>

                <div className="animation" onScroll={handleScroll} data-aos='fade-up'>
                     <h1>Animation N4</h1>
                </div>

                <div className="animation" onScroll={handleScroll} data-aos='fade-up'>
                     <h1>Animation N5</h1>
                </div>

            </div>
        </>
    );
}

export default App;
