
import { useState, useEffect } from 'react';

export default function Hero({onComplete}) {

  const [text, setText] = useState('');
  const prevText = "Radiance Design";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(prevText.substring(0, index));
      index++;
      if (index > prevText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        },1000)
      }
    }, 100);

    return () => clearInterval(interval);
    }, [onComplete])

   
  return (
    <div className=" fixed h-screen flex flex-col items-center justify-center text-center px-4 w-[100%]">
        <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-400 to-blue-500 animate-blink text-nowrap mb-2 py-2 md:text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">{text}</div>
        <div className=" text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block bg-clip-text text-transparent mt-4 animate-fade-in">
        Radiance: Where Brilliance Shines! Captivating designs that mesmerize. Let's create magic together!</div>
    </div>
  );
}
