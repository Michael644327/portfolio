import HeroFunction from "../../../components/heroFunction";
import { Link } from "react-router-dom";

export default function HexHero1() {
    return (
        <HeroFunction
            leftBlock={<img src="./img/hex/HeroSection.png" alt="HeroSection" width="100%" />}
            rightBlock={
                <>        <h3>Alyse Wang</h3>
                    <div>前端工程師 & 職涯諮詢師</div>
                </>
            }
            intro={
                <>
                    <p>嗨，我是 Alyse 一名深耕前端技術的工程師。</p>
                    <p>擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
                    <div className="socialmedia">
                        <Link to="#"><img src="./img/icons/socialicon-YT.png" alt="youtube" /></Link>
                        <Link to="#"><img src="./img/icons/socialicon-SC.png" alt="showcase" /></Link>
                        <Link to="#"><img src="./img/icons/socialicon-FB.png" alt="facebook" /></Link>
                        <Link to="#"><img src="./img/icons/socialicon-LI.png" alt="linkedln" /></Link>
                        <Link to="#"><img src="./img/icons/socialicon-INS.png" alt="instagram" /></Link>
                    </div>
                </>
            }

        />

    )
}