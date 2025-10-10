import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Aboutpage from "./components/Aboutus/Aboutpage";
import Home from "./components/Home/Home";
import Property from "./components/Projects/Property";
import Contactus from "./components/contactus/Contactus";
import Projectdetails from "./components/Projects/Projectdetails";
import { fetchWebSetting, setLoadingManager } from "./utils/Api_path";
import { updateFavicon } from "./utils/faviconUtils";
import { LogoProvider } from "./contexts/LogoContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { useLoading } from "./contexts/LoadingContext";
import Loader from "./components/common/Loader";
import ScrollToTop from "./components/common/ScrollToTop";

// Component to initialize loading manager
const LoadingInitializer = ({ children }) => {
  const loadingManager = useLoading();
  
  useEffect(() => {
    setLoadingManager(loadingManager);
  }, [loadingManager]);
  
  return children;
};

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
      <LoadingProvider>
        <LoadingInitializer>
          <Router>
            <ScrollToTop />
            <Loader />
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
        </LoadingInitializer>
      </LoadingProvider>
    </LogoProvider>
  );
}

export default App;
