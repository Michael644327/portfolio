import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const noLayoutPrefixes = ["/animalpara", "/projects"];

export default function LayoutRoute({ children, title = "My Portfolio", showH2 = true }) {
    const location = useLocation();

    const useCustomLayout = noLayoutPrefixes.some((prefix) =>
        location.pathname.startsWith(prefix))


    useEffect(() => {
        document.title = title || "My Portfilio";
    }, [title]);

    if (useCustomLayout) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main>
                {showH2 && title && (
                    <div className='title col-12 bg-dark text-center text-white p-3'>
                        <h2>{title}</h2>
                    </div>
                )}
                {children}
            </main>
            <Footer />
        </>
    );
};

