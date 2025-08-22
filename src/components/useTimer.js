import { useState, useEffect, useRef } from "react";

function useTimer({ duration = 5, onComplete }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    // 更新 duration 時，重設初始時間
    // useEffect(() => {
    //     setTimeLeft(duration);
    // }, [duration]);

    // 倒數邏輯
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    const next = parseFloat((prev - 0.01).toFixed(2));
                    if (next <= 0.01) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        if (onComplete) onComplete();
                        return 0;
                    }
                    return next;
                });
            }, 10);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning, onComplete]);

    // 控制方法
    const start = (duration) => {
        clearInterval(intervalRef.current);
        setTimeLeft(duration);
        setIsRunning(true);
    };

    const pause = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTimeLeft(0);
    };

    return { timeLeft, isRunning, start, pause, reset };
}

export default useTimer;