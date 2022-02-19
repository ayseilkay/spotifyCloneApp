import Bottombar from "components/Bottombar";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     <div className="wrapper">
       <Sidebar/>
       <Content/>
     </div>
     <div><Bottombar/></div>
    </BrowserRouter>
  );
}

export default App;
