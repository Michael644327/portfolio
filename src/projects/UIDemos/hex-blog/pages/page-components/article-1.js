import ArticleTitleFunction from "../../../components/articleTitleFunction"

export default function ArticleTop() {
    return (
        <ArticleTitleFunction
            leftBlock={<img src="./img/hex/article-top.png" alt="article-top" width="100%" />}
            rightBlock={
                <>
                            <div className="top-article">
                                <div className="date">2024/10/11</div>
                                <div className="tags"><span class="blue">前端開發 x 職涯成長</span> <span className="pop">最新文章</span></div>
                                <h3 className="articleTitle">自學前端不用怕：從零開始的三大關鍵</h3>
                            </div>
                </>
            }
        />
    )
}