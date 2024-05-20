import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//! for making typescript know that it wont return null

ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
