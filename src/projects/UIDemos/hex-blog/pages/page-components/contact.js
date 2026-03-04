
import styles from "./contact.module.css";

export default function ContactSection() {
    return (
        <>
            <div className={`container ${styles.contactSection}`}>
                <h3>與我聯繫</h3>
                <div className={styles.contact}>
                    <div>alysewang@hexschool.com 合作洽談</div>
                    <div>&rarr;</div></div>
                <div className={styles.contact}>
                    <div className={styles.flexRow}>
                        <div><img src="./img/icons/socialicon-YT.png" alt="youtube" /></div>
                        <div>Youtube 職涯諮詢室</div>
                    </div>
                    <div>&rarr;</div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.flexRow}>
                        <div><img src="./img/icons/socialicon-SC.png" alt="showcase" /></div>
                        <div>podcast 職涯諮詢室</div>
                    </div>
                    <div>&rarr;</div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.flexRow}>
                        <div><img src="./img/icons/socialicon-FB.png" alt="facebook" /></div>
                        <div>Facebook 前端社群</div>
                    </div>
                    <div>&rarr;</div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.flexRow}>
                        <div><img src="./img/icons/socialicon-LI.png" alt="linkedln" /></div>
                        <div>linkdin 職涯交流</div>
                    </div>
                    <div>&rarr;</div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.flexRow}>
                        <div><img src="./img/icons/socialicon-INS.png" alt="instagram" /></div>
                        <div>Instagram 日常分享</div>
                    </div>
                    <div>&rarr;</div>
                </div>
            </div>
        </>
    )
}