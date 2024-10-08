import { useContext } from "react"
import { TabContext } from "../context/tabContext";

export const useTab = () => {
    const context = useContext(TabContext);

    if(!context) {
        throw new Error("useTab must be used within a TabProvider")
    }

    return context;
}