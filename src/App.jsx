import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#E6CCBF]">
      <Router>
        <Header />
        <LandingPage />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
