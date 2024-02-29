import React, { useEffect } from 'react';
import GlitchedWriter, { wait } from "https://cdn.skypack.dev/glitched-writer@2.0.29";

export const GlitchedText = () => {
    useEffect(() => {
        const Writer = new GlitchedWriter('#glitch_this', { letterize: true });

        const writeMessages = async () => {
            while (true) {
                await wait(3000);
                await Writer.write("Hello! 👋");

                await wait(3000);
                await Writer.write("Greetings.");

                await wait(3000);
                await Writer.write("I'm Rushi.");

                await wait(3000);
                await Writer.write("Developer.");
            }
        };

        writeMessages();

    }, []); // empty dependency array means this effect will only run once

    return (
        <h1
            className='text-yellow-400 z-40 text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            id='glitch_this'
        >
        </h1>
    );
};
