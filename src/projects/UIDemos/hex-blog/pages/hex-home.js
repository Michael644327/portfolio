import React from "react";
import layout from "../../../../layout/BlogLayout.module.css";
import styles from "./Home.module.css";
import HexHero1 from "./page-components/hex-hero1";
import ServiceSection from "./page-components/service";
import BlogSection from "./page-components/blog-carousel";
import CareerSection from "../../components/career-consulation";
import PodcastsSection from "./page-components/podcasts";
import SubscribeSection from "./page-components/subscribe";
import ContactSection from "./page-components/contact";

export default function HomePage() {
    return <>
        <div className={styles.wideSection}>
            <HexHero1 />
        </div>
        <div className={layout.container}>
            <ServiceSection />
        </div>
        <div className="home-blogs">
            <div className="container">
                <h3>部落格精選</h3>
            </div>
            <BlogSection />
        </div>
        <div className="container">
            <div className="CareerSection">
                <h3>職涯諮詢成功案例</h3>
                <CareerSection />
                <PodcastsSection />
            </div>w
        </div>
        <SubscribeSection />
        <ContactSection />
    </>

}