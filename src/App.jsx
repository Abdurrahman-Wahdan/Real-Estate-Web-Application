import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero";
import "./App.css";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Conatct/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradiant"></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
