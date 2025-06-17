import { useMemo } from "react";

const useSortId = (id, sortKey = "id")=>{
    const sortedProducts = useMemo(() => {
        return [...id].sort((a,b)=>a[sortKey] - b[sortKey]);
    }, [id, sortKey]);

    return sortedProducts;
};

export default useSortId;