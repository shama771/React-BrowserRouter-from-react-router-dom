import about from "./Components/about";
import blog from "./Components/blog"
import home from "./Components/home"
import Nav from "./Components/nav"
import team from "./Components/team"
import {Routes ,Route} from "react-router-dom"


const App = () => {
    return (
        <div>
            <Nav />
    <Routes>
        <Route path="/" element={<home />}/>
        <Route path="/blog" element={<blog />}/>
        <Route path="/team" element={<team />}/>
        <Route path="/stories" element={<about />}/>
     </Routes>
        </div>
    )
}

export default App