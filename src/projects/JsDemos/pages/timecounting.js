import React, { useState, useRef, useEffect } from 'react';
import "../css/timeCounting.css";

function TimeCounting() {
    const [inputSeconds, setInputSeconds] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const displayRef = useRef(null);

    useEffect(() => {
        if (isRunning && !isPaused) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 0.01) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return (prev - 0.01);
                });
            }, 10);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, isPaused]);

    useEffect(() => {
        if (displayRef.current) {
            displayRef.current.classList.remove('animate');
            void displayRef.current.offsetWidth;
            displayRef.current.classList.add('animate');
        }
    }, [timeLeft]);

    const handleStart = () => {
        const value = parseFloat(inputSeconds);
        if (isNaN(value) || value <= 0) {
            alert('請輸入正確的秒數');
            return;
        }

        clearInterval(intervalRef.current);
        setTimeLeft(value);
        setIsRunning(true);
        setIsPaused(false);
    };

    const handlePauseToggle = () => {
        setIsPaused(prev => !prev);
    };

    return (
        <>
            <div className='container'>
                <div className="box">
                    <h2>輸入秒數開始倒數</h2>
                    <input
                        type="number"
                        step="0.01"
                        id="secondsInput"
                        placeholder="秒數"
                        value={inputSeconds}
                        onChange={(e) => setInputSeconds(e.target.value)} />
                    <button onClick={handleStart}>開始</button>
                    <button onClick={handlePauseToggle} id="pauseBtn" disabled={!isRunning}>{isPaused ? '繼續' : '暫停'}</button>

                    <div id="countdownDisplay" className="timer" ref={displayRef}>{timeLeft.toFixed(2)}</div>
                </div>
            </div>
        </>
    );
};

export default TimeCounting;

