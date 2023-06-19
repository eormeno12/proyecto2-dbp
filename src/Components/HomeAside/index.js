import { useContext } from "react";
import { RoundIconButton } from "../RoundIconButton";
import { HomeContext } from "../../Context/HomeContext";

import './HomeAside.css'

function HomeAside({children}){

    const {closeHomeAside} = useContext(HomeContext);

    return(
        <aside className="home-aside">
            <RoundIconButton iconType='x-mark' onClick={closeHomeAside} />
            {children}
        </aside>
    )
}

export { HomeAside };