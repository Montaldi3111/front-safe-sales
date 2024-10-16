import { useContext } from "react"
import { FilterContext } from "../context/filterContext";

export const useFilter = () => {
    const context = useContext(FilterContext);

    if(!context) {
        throw new Error("useTab must be used within a FilterProvider")
    }

    return context;
}