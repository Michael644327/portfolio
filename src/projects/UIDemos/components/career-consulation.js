
import styles from "./career-consulation.module.css";
import { Link } from "react-router-dom";

export default function CareerSection() {
    return (
        <>
            <div className={styles.career}>
                <div className={`bgGray ${styles.imgBlock}`}>
                    <img src="./img/hex/career01.png" width="100%" alt="career01" />
                </div>
                <div className={styles.careerText}>
                    <div className={`bgWhite ${styles.textBlock} ${styles.para1}`}>
                        <div>
                            在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span className="blue">突破原有的舒適圈</span>。
                        </div>
                    </div>

                    <div className={`bgGray ${styles.textBlock} ${styles.para2}`}>
                        <p>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
                        <div>
                            <button className="readmore"><Link to="./article">立即預約諮詢</Link></button></div>
                    </div>
                </div>
            </div>
        </>
    )
}