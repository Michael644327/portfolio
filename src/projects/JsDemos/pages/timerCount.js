import { useEffect, useState, useRef } from "react";
import useTimer from "../../../components/useTimer";
import "../css/timeCounting.css";

function App() {

    const [inputSeconds, setInputSeconds] = useState('');
    const displayRef = useRef(null);

    const { timeLeft, isRunning, start, pause, reset } = useTimer({});

    useEffect(() => {
        if (displayRef.current) {
            displayRef.current.classList.remove('animate');
            void displayRef.current.offsetWidth;
            displayRef.current.classList.add('animate');
        }
    }, [timeLeft]);

    const handleStart = () => {
        const duration = parseFloat(inputSeconds);
        if (isNaN(duration) || duration <= 0) {
            alert("請輸入正確的秒數");
            return;
        }
        start(duration);
    }


    return (
        <>
            <div className="container">
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
                    <button onClick={pause} id="pauseBtn">{!isRunning ? '繼續' : '暫停'}</button>
                    <button onClick={reset}>重設</button>

                    <div id="countdownDisplay" className="timer" ref={displayRef}>{timeLeft.toFixed(2)}</div>
                </div>
            </div>
        </>
    );
}

export default App;