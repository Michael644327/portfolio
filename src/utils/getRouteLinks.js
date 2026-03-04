import React from "react";
import { Link } from "react-router-dom";

/**
 * 根據 route 配置自動生成連結清單
 * @param {Array} routes - 路由配置陣列
 * @param {string} basePath - 父層路徑 (例如 '/function')
 * @returns <ul>元素
 */

export function getRouterLinks(routes, basePath ="") {
    if (!routes || !Array.isArray(routes)) return null;

    const visibleRoutes = routes.filter((r)=> r.meta && r.meta.label);

    return (
        <ul>
            {visibleRoutes.map((route)=> {
                const linkTo = route.index ? basePath : `${basePath}/${route.path}`.replace(/\/+/g,"/");

                return (
                    <li key={route.path || "index"}>
                        <Link to={linkTo}>{route.meta.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}