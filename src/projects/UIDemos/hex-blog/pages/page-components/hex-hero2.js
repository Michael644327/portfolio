import HeroFunction from "../../../components/heroFunction"
export default function HexHero2() {
    return (
        <HeroFunction
            leftBlock={<img src="./img/hex/HeroSection.png" alt="HeroSection" width="100%" />}
            rightBlock={
                <>
                    <h3>BLOG</h3>
                    <div>前端工程師 & 職涯諮詢師</div>
                </>
            }
        />
    )
}