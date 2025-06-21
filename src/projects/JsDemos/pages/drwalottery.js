import { useState, useEffect } from "react";
import '../css/drawLottery.css'

function DrawLottery() {
    const [numbers, setNumbers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isDrawing, setIsDrawing] = useState(false);

    function drawNumbers(count = 6) {
        const arr = Array.from({ length: 49 }, (_, i) => i + 1);
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.slice(0, count);
    }

    // document.getElementById("drawBtn").addEventListener("click", () => {
    //     const resultsContainer = document.getElementById("results");
    //     resultsContainer.innerHTML = ""; // 清空舊結果
    //     const picked = drawNumbers(6); // 抽 6 個數字

    function startDraw() {
        const result = drawNumbers();
        setNumbers(result);
        setCurrentIndex(-1);
        setIsDrawing(true);
    }

    useEffect(() => {
        if (isDrawing) {
            const interval = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev >= 5) {
                        clearInterval(interval);
                        setIsDrawing(false);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 500);
            return () => clearInterval(interval);
        }
    }, [isDrawing])

    // picked.forEach((num, index) => {
    //     const ball = document.createElement("div");
    //     ball.classList.add("ball");
    //     ball.textContent = num;

    //         // 延遲顯示動畫
    //         setTimeout(() => {
    //             resultsContainer.appendChild(ball);
    //             // 強制瀏覽器重新渲染，才能觸發動畫
    //             requestAnimationFrame(() => {
    //                 ball.classList.add("show");
    //             });
    //         }, index * 500); // 每 0.5 秒一個
    //     });
    // });

    return (
        <>
            <div className="lotto-container">
                <h1>樂透抽獎</h1>
                <button id="drawBtn"
                    onClick={startDraw}
                    disabled={isDrawing}>{isDrawing ? '抽獎中……' : '開始抽獎'}</button>
                <div className="results">
                    {numbers.map((num, i) => (
                        <div key={i} className={`ball ${i <= currentIndex ? 'show' : ''}`}>
                            {num}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default DrawLottery;