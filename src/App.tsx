import React from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { RoutesList } from "./components/RoutesList/RoutesList";
import { useScrollToTop } from "./shared/hooks";

function App() {
    useScrollToTop();
    const location = useLocation().pathname;

    return (
        <div className="App">
            <Header />
            <div className="content">
                <RoutesList />
            </div>
            {location !== "/" && <Footer />}
        </div>
    );
}

export default App;
