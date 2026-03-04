
import styles from "./hex-hero.module.css";
import bg from "./assets/Herobg.png"

export default function HeroFunction({
    leftBlock, rightBlock, intro,
}) {
    return (
        <>
            <div className={styles.topTitle}>
                <div className={styles.titleBlock}>
                    {leftBlock}
                </div>
                <div className={styles.titleBlock} style={{ backgroundImage: `url(${bg})` }}>
                    <div className={styles.titleText}>
                        {rightBlock}
                    </div>
                </div>
            </div>
            {/* 無intro值時不顯示 */}
            {intro && (
                <div className={styles.intro}>
                    {intro}
                </div>
            )}
        </>
    )
}