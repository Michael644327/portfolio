
import styles from "./subscribe.module.css";
import { Link } from "react-router-dom";

export default function SubscribeSection() {
    return (
        <>
            <div className={styles.news}>
                <div className={styles.imgBlock}>
                    <img src="./img/hex/subscribe01.png" alt="subscribe01" width="100%" />
                </div>
                <div className={styles.newsBlock}>
                    <div className={`bgWhite ${styles.sub}`}>
                        <div>
                            <h3>訂閱電子報</h3>
                            <p>立即訂閱，搶先掌握<span className="blue">前端 x 職涯</span>的獨家資訊！</p>
                        </div>
                        <div className={styles.fields}>
                            <input type="text" id="name" placeholder="請輸入您的大名" />
                            <input type="mail" id="email" placeholder="請輸入您的電子信箱" />
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">啟動訂閱</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}