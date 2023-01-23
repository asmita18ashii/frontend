import {BrowserRouter,Route,Routes} from "react-router-dom"
import Landing from "./LandingPage";
import {FormPost} from "./formpost";
import { ViewPost } from "./viewpost";
export const App=()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/view" element={<ViewPost/>}/>
            <Route path="/post" element={<FormPost/>}/>
        </Routes>
        </BrowserRouter>
    )
}