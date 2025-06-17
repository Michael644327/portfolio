import "../css/timeCounting.css"

const timeCounting = () => {

    let timerInterval;
    let timeLeft = 0;
    let isPaused = false;

    function startCountdown() {
        // const input = document.getElementById("secondsInput").value;
        // let timeLeft = parseFloat(input);
        const input = parseFloat(document.getElementById("secondsInput").value);

        if (isNaN(input) || input <= 0) {
            alert("請輸入正確的秒數");
            return;
        }

        clearInterval(timerInterval);
        timeLeft = input;
        isPaused = false;
        document.getElementById("pauseBtn").textContent = "暫停";
        document.getElementById("pauseBtn").disabled = false;

        const display = document.getElementById("countdownDisplay");

        timerInterval = setInterval(() => {
            if (!isPaused) {
                timeLeft -= 0.01;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    display.textContent = "0.00";
                    document.getElementById("pauseBtn").disabled = true;
                }
                else {
                    display.textContent = timeLeft.toFixed(2);
                }

                display.classNameList.remove("animate");
                void display.offsetWidth;//觸發重新繪製
                display.classNameList.add("animate");
            }
        }, 10);
    }

    function togglePause() {
        isPaused = !isPaused;
        const pauseBtn = document.getElementById("pauseBtn");
        pauseBtn.textContent = isPaused ? "繼續" : "暫停";
    };

    return (
        <>
            <div className="container">
                <h2>輸入秒數開始倒數</h2>
                <input type="number" step="0.01" id="secondsInput" placeholder="秒數" />
                    <button onclick="startCountdown()">開始</button>
                    <button onclick="togglePause()" id="pauseBtn" disabled>暫停</button>

                    <div id="countdownDisplay" className="timer">0.00</div>
            </div>
        </>
    )

}

export default timeCounting;

