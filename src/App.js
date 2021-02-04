import "./App.css";

import HeaderNav from "./components/Navbar/HeaderNav";
import Header from "./components/Header";
import Contact from "./components/Contact/Contact";
import WelcomeText from "./components/WelcomeText";
import GitHubBar from "./components/GithubBar/GitHubBar";
import Works from "./components/Works/Works";
import Abouts from "./components/AboutMe/Abouts";
import TechMobile from "./components/Tech/TechMobile";
import TechDeskTop from "./components/Tech/TechDeskTop";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div style={styles.bcg}>
      <HeaderNav />
      <Header />
      <Contact />
      <WelcomeText />
      {/* <GitHubBar /> */}
      <Works />
      <Abouts />
      <TechMobile />
      <TechDeskTop />

      <Footer />
    </div>
  );
}

const styles = {
  bcg: {
    backgroundColor: "black",
    color: "white",
    position: "relative",
  },
};

export default App;
