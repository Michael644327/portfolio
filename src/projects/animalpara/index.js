import React from "react";
import "../../styles/icon.css"
// import "../../components/styles/icon.css"
import HomeSection1 from "../animalpara/components/animalpara/Home1Carousel"
// import HomeSection1 from "../../components/animalpara/Home1Carousel";
import HomeSection2 from "../animalpara/components/animalpara/Home2Vote";
import HomeSection3 from "../animalpara/components/animalpara/Home3Video";
import SalesProduct from "../animalpara/components/animalpara/Home4sales";

const IndexPage = () => {

  return (
    <>
        <div className="bg-primary bg-opacity-50 pb-5">
          <HomeSection1 />
        </div>
        <div className="bg-success bg-gradient bg-opacity-50">
          <HomeSection2 />
        </div>

        <div className="p-3 bg-warning bg-opacity-50">
          <HomeSection3 />
        </div>
        <div className="bg-info bg-opacity-50 pb-5">
          <SalesProduct />
        </div>
    </>
  )
}

export default IndexPage;