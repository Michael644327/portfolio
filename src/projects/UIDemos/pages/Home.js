import React from "react";
import homeBlog from "./data/homepage-blog.json"
import { Link } from "react-router-dom";

export default function Home() {
    return <>
        <div className="wide-section">
            <div className="top-title">
                <div className="title-block title-img">
                    <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/Hero%20Section.png" alt="img" width="100%" />
                </div>
                <div className="title-block title-text">
                    <h3>Alyse Wang</h3>
                    <div>前端工程師 & 職涯諮詢師</div>
                </div>
            </div>
            <div className="intro">
                <p>嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
                <p>擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
                <div className="socialmedia">
                    <Link to="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon.png" alt="icon" /></Link>
                    <Link to="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-1.png" alt="icon1" /></Link>
                    <Link to="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-2.png" alt="icon2" /></Link>
                    <Link to="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/icons8-linkedin.png" alt="icon4" /></Link>
                    <Link to="#"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-3.png" alt="icon3" /></Link>
                </div>
            </div>
        </div>
        <div className="container service">
            <h3>專業服務與方案</h3>
            <div className="services">
                <div className="section text-right">
                    <div className="img">
                        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo.png" alt="photo1" width="100%" />
                    </div>
                    <div className="des text-block">
                        <h4>履歷健檢</h4>
                        <p>履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。</p>
                    </div>
                </div>
                <div className="section text-left">
                    <div className="img">
                        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo2.png" alt="photo2" width="100%" />
                    </div>
                    <div className="des text-block">
                        <h4>線上諮詢</h4>
                        <p>想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。</p></div>
                </div>
                <div className="section text-right">
                    <div className="img">
                        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo3.png" alt="photo3" width="100%" />
                    </div>
                    <div className="des text-block">
                        <h4>網頁開發</h4>
                        <p>想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。</p></div>
                </div>
                <div className="section text-left">
                    <div className="img">
                        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo4.png" alt="photo4" width="100%" />
                    </div>
                    <div className="des text-block">
                        <h4>企業內訓</h4>
                        <p>想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。</p>
                    </div>
                </div>
                <h4 className="large-text">聯繫我，取得更多資訊！<span className="arrow-circle">&rarr;</span></h4>
            </div>
        </div>
        <div className="home-blogs">
            <div className="container">
                <h3>部落格精選</h3>
            </div>
            <div className="blog-carousel">
                <button class="arrow left">&#8592;</button>
                <div className="container">
                    <div className="blogs">
                        {homeBlog.map((v, i) => (
                            <div className={`article article-${v.id}`} key={v.id}>
                                <img src={v.image} alt="lesson-photo" width="100%" />
                                <div className="article-info">
                                    <div className="date">{v.data}</div>
                                    <div className="tags">{v.tag} {v.pop ? <span className="pop">{v.pop}</span> : ""}</div>
                                    <h3 className="article-title">{v.title}</h3>
                                    <p className="describe">{v.describe}</p>
                                </div>
                                <Link className="readmore" to="/blog/page1">閱讀內文</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <button class="arrow right">&#8594;</button>
            </div>
        </div>
        <div className="container">

            <div className="asking-section">
                <h3>職涯諮詢成功案例</h3>
                <div className="asking">
                    <div className="img-block bg-gray">
                        <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo8.png" width="100%" alt="photo8" />
                    </div>
                    <div className="asking-text">
                        <div className="para-1 text-block bg-white">
                            <div>
                                在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span className="blue">突破原有的舒適圈</span>。
                            </div>
                        </div>
                        <div className="para-2 text-block bg-gray">
                            <p>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
                            <div>
                                <button className="readmore"><Link to="./blog/page1">立即預約諮詢</Link></button></div>
                        </div>
                    </div>

                </div>
                <div className="respons bg-gray">
                    <div className="respon">
                        <div className="photo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/people.png" alt="img" /></div>
                        <div className="bd-bt">
                            <h4>無經驗到前端工程師 Offer</h4>
                            <ul>
                                <li>打造前端專案與履歷亮點</li>
                                <li>深度強化面試表現</li>
                            </ul>
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">前往聆聽 podcast</Link></button>
                        </div>
                    </div>
                    <div className="respon">
                        <div className="photo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/people2.png" alt="img" /></div>
                        <div className="bd-bt">
                            <h4>轉職迷茫到明確學習規劃</h4>
                            <ul>
                                <li>制訂階段性目標與時間安排</li>
                                <li>鼓勵參與前端社群或活動</li>
                            </ul>
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">前往聆聽 podcast</Link></button>
                        </div>
                    </div>
                    <div className="respon">
                        <div className="photo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/people3.png" alt="img" /></div>
                        <div className="bd-bt">
                            <h4>面試緊張到從容應對</h4>
                            <ul>
                                <li>透過面試模擬找出常犯的邏輯漏洞</li>
                                <li>討論遇到不熟悉議題時的回應方式</li>
                            </ul>
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">前往聆聽 podcast</Link></button>
                        </div>
                    </div>
                    <div className="respon">
                        <div className="photo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/people4.png" alt="img" /></div>
                        <div className="bd-bt">
                            <h4>面試緊張到從容應對</h4>
                            <ul>
                                <li>擬定進階框架或技術研究目標</li>
                                <li>培養跨團隊溝通與簡報能力</li>
                            </ul>
                        </div>
                        <div>
                            <button className="readmore"><Link to="#">前往聆聽 podcast</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="news">
            <div className="news-img">
                <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/photo9.png" alt="img" width="100%" />
            </div>
            <div className="news-block">
                <div className="news-sub bg-white">
                    <div>
                        <h3>訂閱電子報</h3>
                        <p>立即訂閱，搶先掌握<span className="blue">前端 x 職涯</span>的獨家資訊！</p>
                    </div>
                    <div className="news-input">
                        <input type="text" id="name" placeholder="請輸入您的大名" />
                        <input type="mail" id="email" placeholder="請輸入您的電子信箱" />
                    </div>
                    <div>
                        <button className="readmore"><Link to="#">啟動訂閱</Link></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container contact-section">
            <h3>與我聯繫</h3>
            <div className="contact">
                <div>alysewang@hexschool.com 合作洽談</div>
                <div>&rarr;</div></div>
            <div className="contact">
                <div className="flex-row">
                    <div><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon.png" alt="icon" /></div>
                    <div>Youtube 職涯諮詢室</div>
                </div>
                <div>&rarr;</div>
            </div>
            <div className="contact">
                <div className="flex-row">
                    <div><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-1.png" alt="icon-1" /></div>
                    <div>podcast 職涯諮詢室</div>
                </div>
                <div>&rarr;</div>
            </div>
            <div className="contact">
                <div className="flex-row">
                    <div><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-2.png" alt="icon-2" /></div>
                    <div>Facebook 前端社群</div>
                </div>
                <div>&rarr;</div>
            </div>
            <div className="contact">
                <div className="flex-row">
                    <div><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/icons8-linkedin.png" alt="icon-linkedin" /></div>
                    <div>linkdin 職涯交流</div>
                </div>
                <div>&rarr;</div>
            </div>
            <div className="contact">
                <div className="flex-row">
                    <div><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/onlyIcon-3.png" alt="icon-3" /></div>
                    <div>Instagram 日常分享</div>
                </div>
                <div>&rarr;</div>
            </div>
        </div>
    </>

}