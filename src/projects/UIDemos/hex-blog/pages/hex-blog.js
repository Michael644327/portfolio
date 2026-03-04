import React from "react";
import blogArticle from "../data/article.json"
import HexHero2 from "./page-components/hex-hero2";
import ArticleTop from "./page-components/article-1";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchbar";
import Pagination from "../../components/pagination";

export default function Blog() {
    return (
        <>
            <div className="wide-section">
                <HexHero2 />
                <ArticleTop />
            </div>
            <div className="container">
                <SearchBar />
                <div className="blogs">
                    {blogArticle.map((v, i) => (
                        <div className="article" key={v.id}>
                            <img src={v.image} alt="lesson-photo" width="100%" />
                            <div className="article-title">
                                <div className="date">{v.data}</div>
                                <div className="tags">{v.tag} {v.pop ? <span className="pop">人氣文章</span> : ""}</div>
                                <h3 className="article-title">{v.title}</h3>
                                <p className="describe">{v.describe}</p>
                            </div>
                            <Link className="readmore" to="/blog/page1">閱讀內文</Link>
                        </div>
                    ))}
                </div>
                <Pagination />
            </div>
            <div className="page-footer">
                <div className="contact">alysewang@hexschool.com</div>
                <div>
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon.png" alt="icon" />
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-1.png" alt="icon-1" />
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-2.png" alt="icon-2" />
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/icons8-linkedin.png" alt="icon-linkedin" />
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-3.png" alt="icon-3" />
                </div>
            </div>
        </>
    );
}