import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Aboutpage from "./components/Aboutus/Aboutpage";
import Home from "./components/Home/Home";
import Property from "./components/Projects/Property";
import Contactus from "./components/contactus/Contactus";
import Projectdetails from "./components/Projects/Projectdetails";
import { fetchWebSetting } from "./utils/Api_path";
import { updateFavicon } from "./utils/faviconUtils";
import { LogoProvider } from "./contexts/LogoContext";
function App() {
  useEffect(() => {
    const loadFavicon = async () => {
      try {
        const webSettings = await fetchWebSetting();
        if (webSettings?.favicon) {
          updateFavicon(webSettings.favicon);
        }
      } catch (error) {
        console.error('Failed to load favicon:', error);
      }
    };
    loadFavicon();
  }, []);

  return (
    <LogoProvider>
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
            <Route path="/Projectdetails/:id" element={<Projectdetails />} />
          </Routes>
        </div>
      </Router>
    </LogoProvider>
  );
}

export default App;
