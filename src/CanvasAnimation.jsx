import React, { useEffect, useRef } from 'react';
import { GlitchedText } from './GlitchedText';

const CanvasAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const cxt = canvas.getContext("2d");

        canvas.width = window.innerWidth * 0.991;
        canvas.height = window.innerHeight * 0.91;

        const chinese = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-*/?.,<>~`!@#$%^&()+=";
        // const chinese = "01";
        const font_size = 10;
        const columns = canvas.width / font_size;
        const drops = Array.from({ length: columns }, () => 1);
        const text = "Hello";

        const draw = () => {
            cxt.fillStyle = "rgba(0,0,0,0.10";
            cxt.fillRect(0, 0, canvas.width, canvas.height);

            cxt.fillStyle = "#0F0";
            cxt.font = font_size + 'px arial';

            for (let i = 0; i < drops.length; i++) {
                const text = chinese[Math.floor(Math.random() * chinese.length)];
                cxt.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
                    drops[i] = 0;

                // increment y coordinate
                drops[i]++;

                
                }
        };

        const intervalId = setInterval(draw, 33);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='h-screen'>
            <canvas ref={canvasRef}></canvas>
            {/* <h1 className='text-yellow-400 z-40 text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Hello! 👋<br/>I'm Rushi.</h1> */}
            <GlitchedText />
        </div>
    
    );
};

export default CanvasAnimation;
