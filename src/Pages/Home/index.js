import { HomeContextProvider } from "../../Context/HomeContext";
import { HomeUI } from "./HomeUI";

function Home(){
    return(
        <HomeContextProvider>
            <HomeUI/>
        </HomeContextProvider>
    );
}

export { Home };