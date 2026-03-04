import { Link } from "react-router-dom";
import styles from "./pagination.module.css"



export default function Pagination() {
    return (
        <>
            <ul className={styles.pagination}>
                <li className={styles.arrow}>
                    <Link to="#">&lt;</Link>
                </li>
                <li className={`${styles.page} ${styles.active}`}>
                    <Link to="#">1</Link>
                </li>
                <li className={styles.page}>
                    <Link to="#">2</Link>
                </li>
                <li className={styles.page}>
                    <Link to="#">3</Link>
                </li>
                <li className={styles.page}>
                    <Link to="#">4</Link>
                </li>
                <li className={styles.page}>
                    <Link to="#">5</Link>
                </li>
                <li className={styles.dots}>
                    <Link to="#">...</Link>
                </li>
                <li className={styles.arrow}>
                    <Link to="#">&gt;</Link>
                </li>
            </ul>
        </>
    )
}
