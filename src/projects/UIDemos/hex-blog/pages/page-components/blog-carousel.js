
import styles from "./blog-carousel.module.css";
import homeBlog from "../../data/homepage-blog.json"
import { Link } from "react-router-dom";

export default function BlogSection() {
    return (
        <>
            <div className={styles.blogCarousel}>
                <button class={`${styles.arrow} ${styles.arrowLeft}`}>&#8592;</button>
                <div className="container">
                    <div className={styles.blogs}>
                        {homeBlog.map((v, i) => (
                            <div className={`${styles.article} article-${v.id}`} key={v.id}>
                                <img src={v.image} alt="lesson-photo" width="100%" />
                                <div className={styles.articleInfo}>
                                    <div className={styles.date}>{v.data}</div>
                                    <div className={styles.tags}>{v.tag} {v.pop ? <span className={styles.pop}>{v.pop}</span> : ""}</div>
                                    <h3 className={styles.articleTitle}>{v.title}</h3>
                                    <p className={styles.describe}>{v.describe}</p>
                                </div>
                                <Link className={styles.readmore} to="/hex/article">閱讀內文</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <button class={`${styles.arrow} ${styles.arrowRight}`}>&#8594;</button>
            </div>
        </>
    )
}