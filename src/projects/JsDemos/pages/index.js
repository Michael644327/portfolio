import { jsRoutes } from "../../../routes";
import { Link } from "react-router-dom";
import { getRouterLinks } from "../../../utils/getRouteLinks";

function Home() {

    const subPages = jsRoutes.filter((r) => r.meta && r.path);
    return (
        <>
            <div className="container mt-4">
            <h2>Function components 一覽</h2>
            {getRouterLinks(jsRoutes, "/jsdemos")}
                {/* <ul>
                    {subPages.map((i) => (
                        <li key={i.path}>
                            <Link to={i.path}>{i.meta.label}</Link> </li>))}
                </ul> */}
            </div>

        </>
    )
}

export default Home;