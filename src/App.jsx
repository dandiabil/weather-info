import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import WeatherCheck from "./pages/WeatherCheck";
import WeatherForecast from "./pages/WeatherForecast";
import WeatherMap from "./pages/WeatherMap";

const App = () => {
  return (
    <div className="bg-[#E6CCBF]">
      <Header />
      <LandingPage />
      {/* <ErrorBoundary>
        <WeatherMap />
      </ErrorBoundary> */}
    </div>
  );
};

export default App;
