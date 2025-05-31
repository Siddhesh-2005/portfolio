import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
function HashRouter2() {
  return (
    <div>
      <HashRouter>
        <nav>
          <Link to="/home">Sid.</Link>      
          
        </nav>
        <Routes>
          
          <Route path="/home" element={<Home />} />
          
        </Routes>
      </HashRouter>
    </div>
  );
}
export default HashRouter2;
