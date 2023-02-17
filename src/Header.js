import React from 'react';
import './App.scss';


const Header = ({effect, setEffect, scrollTop, setScrollTop}) => {
    return (
        <div className='btn'>
            <button onClick={() => {
                setEffect('first')
                setScrollTop(0)
                window.scroll(0,0)
            }} style={{
                        transform: (scrollTop >= 0 && scrollTop < 680) ? 'scale(1.5)' : ''
                    }}></button>
            <button onClick={() => {
                setEffect('second')
                setScrollTop(680)
                window.scroll(0, 680)
            }} style={{
                transform:
                    (scrollTop >= 680 && scrollTop < 1410) ? 'scale(1.5)' : ''}}></button>
            <button onClick={() => {
                setEffect('third')
                setScrollTop(1410)
                window.scroll(0, 1410)
            }} style={{
                        transform: (scrollTop >= 1410 && scrollTop < 2140) ? 'scale(1.5)' : ''
                    }}></button>
            <button onClick={() => {
                setEffect('fours')
                setScrollTop(2140)
                window.scroll(0, 2140)
            }} style={{
                        transform: (scrollTop >= 2140 && scrollTop < 2870) ? 'scale(1.5)' : ''
                    }}></button>
            <button onClick={() => {
                setEffect('fives')
                setScrollTop(2870)
                window.scroll(0, 2870)
            }} style={{
                        transform: (scrollTop >= 2870 && scrollTop < 3600) ? 'scale(1.5)' : ''
                    }}></button>
        </div>
    );
};

export default Header;