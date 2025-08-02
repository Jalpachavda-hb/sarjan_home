import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from "./components/Aboutus/Aboutpage";
import Home from "./components/Home/Home";
import Property from "./components/Projects/Property";
import Contactus from "./components/contactus/Contactus";
import Projectdetails from "./components/Projects/Projectdetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/Property" element={<Property />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/Projectdetails" element={<Projectdetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
