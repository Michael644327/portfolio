
import styles from "./podcasts.module.css";
import { Link } from "react-router-dom";

export default function PodcastsSection() {
    return (
        <>
                <div className={`bgGray ${styles.respons}`}>
                    <div className={styles.respon}>
                        <div className="photo"><img src="./img/hex/people01.png" alt="podcast01" /></div>
                        <div className="bdBt">
                            <h4>無經驗到前端工程師 Offer</h4>
                            <ul>
                                <li>打造前端專案與履歷亮點</li>
                                <li>深度強化面試表現</li>
                            </ul>
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">前往聆聽 podcast</Link></button>
                        </div>
                    </div>
                    <div className={styles.respon}>
                        <div className="photo"><img src="./img/hex/people02.png" alt="podcast02" /></div>
                        <div className="bdBt">
                            <h4>轉職迷茫到明確學習規劃</h4>
                            <ul>
                                <li>制訂階段性目標與時間安排</li>
                                <li>鼓勵參與前端社群或活動</li>
                            </ul>
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">前往聆聽 podcast</Link></button>
                        </div>
                    </div>
                    <div className={styles.respon}>
                        <div className="photo"><img src="./img/hex/people03.png" alt="podcast03" /></div>
                        <div className="bdBt">
                            <h4>面試緊張到從容應對</h4>
                            <ul>
                                <li>透過面試模擬找出常犯的邏輯漏洞</li>
                                <li>討論遇到不熟悉議題時的回應方式</li>
                            </ul>
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">前往聆聽 podcast</Link></button>
                        </div>
                    </div>
                    <div className={styles.respon}>
                        <div className="photo"><img src="./img/hex/people04.png" alt="podcast04" /></div>
                        <div className="bdBt">
                            <h4>面試緊張到從容應對</h4>
                            <ul>
                                <li>擬定進階框架或技術研究目標</li>
                                <li>培養跨團隊溝通與簡報能力</li>
                            </ul>
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">前往聆聽 podcast</Link></button>
                        </div>
                    </div>
                </div>
        </>
    )
}