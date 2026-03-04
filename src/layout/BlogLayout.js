import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import styles from "./BlogLayout.module.css"
import "./BlogLayout.css"

export default function BlogLayout() {
    return (
        <>
            {/* <div className="app-container blogLayout"> */}
            <div className={`app-container blogLayout ${styles.blogLayout}`}>
                <nav>
                    <Link to="/">回作品集</Link>
                    <Link to="/hex">首頁</Link>
                    <Link to="/hex/blog">部落格</Link>
                </nav>
                <div className="main-container">
                    <Outlet />
                </div>
                <footer>© 2025 Alyse Wang. All rights reserved.</footer>
            </div>
        </>
    )
}
