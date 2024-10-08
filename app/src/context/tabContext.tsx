import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface TabContextType {
    tab: number;
    setTab: (value:number) => void;
}

interface TabProviderProps {
    children: ReactNode;
}

export const TabContext = createContext<TabContextType | undefined>(undefined);
// este context me permite modificar los datos del perfil deshabilitando el resto de los botones
// en el momento en que se hace click al boton de editar en un cambio

export const TabProvider:React.FC<TabProviderProps> = ({children}) => {
    const [tab, setTab] = useState<number>(0);
    return (
        <TabContext.Provider value={{tab, setTab}}>
            {children}
        </TabContext.Provider>
    )
}