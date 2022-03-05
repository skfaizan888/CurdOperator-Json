import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { AddUser } from "./components/Home/AddUser";
import { Home } from "./components/Home/Home";
import { AllUser } from "./components/Home/AllUser";
import { NotFound } from "./components/Home/NotFound";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import { EidteUsers } from "./components/Home/EidteUsers";

function App() {
  return (
    
    <BrowserRouter>
   

      <Routes>
      
          <Route exact={"true"} path="/" element={<Home />} />
          <Route exact={"true"} path="/all" element={<AllUser />} />
          <Route exact={"true"} path="/add" element={<AddUser />} />
          <Route exact={"true"} path="/edite/:id" element={<EidteUsers />} />
          
          <Route  path="*" element={<NotFound />} />
     
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
