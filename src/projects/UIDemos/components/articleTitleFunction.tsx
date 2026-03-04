
import { ReactNode } from "react";
import styles from "./articleTitleFunction.module.css";
import bg from "./assets/Herobg.png"

interface ArticleTitleFunctionProps {
    leftBlock: ReactNode;
    rightBlock: ReactNode;
    intro?: ReactNode; // 可選
}

export default function ArticleTitleFunction({
    leftBlock,
    rightBlock,
    intro = null,
}: ArticleTitleFunctionProps) {
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