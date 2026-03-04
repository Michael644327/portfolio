import styles from "./service.module.css"

export default function ServiceSection() {
    return (
        <>
            <div className={styles.service}>
                <h3>專業服務與方案</h3>
                <div className={`${styles.section} ${styles.textRight}`}>
                    <div className={styles.img}>
                        <img src="./img/hex/service01.png" alt="service01" width="100%" />
                    </div>
                    <div className={`${styles.des} ${styles.textBlock}`}>
                        <h4>履歷健檢</h4>
                        <p>履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。</p>
                    </div>
                </div>
                <div className={`${styles.section} ${styles.textLeft}`}>
                    <div className={styles.img}>
                        <img src="./img/hex/service02.png" alt="servic02" width="100%" />
                    </div>
                    <div className={`${styles.des} ${styles.textBlock}`}>
                        <h4>線上諮詢</h4>
                        <p>想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。</p></div>
                </div>
                <div className={`${styles.section} ${styles.textRight}`}>
                    <div className={styles.img}>
                        <img src="./img/hex/service03.png" alt="servic03" width="100%" />
                    </div>
                    <div className={`${styles.des} ${styles.textBlock}`}>
                        <h4>網頁開發</h4>
                        <p>想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。</p></div>
                </div>
                <div className={`${styles.section} ${styles.textLeft}`}>
                    <div className={styles.img}>
                        <img src="./img/hex/service04.png" alt="servic04" width="100%" />
                    </div>
                    <div className={`${styles.des} ${styles.textBlock}`}>
                        <h4>企業內訓</h4>
                        <p>想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。</p>
                    </div>
                </div>
                <div className={styles.largeText}>
                    <h4>聯繫我，取得更多資訊！<span className={styles.arrowCircle}>&rarr;</span></h4>
                </div>
            </div>

        </>
    )

}