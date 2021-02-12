import "./App.css";
import MetaTags from "react-meta-tags";
import logo from "./assets/logo2.svg";

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
      <MetaTags>
        <title>Ken Tauchi Portfolio Front End Developer</title>
        <meta
          name="description"
          content="This is a portfolio site featureing Ken Tauchi's work, background, and skills. "
        />
        <meta property="og:title" content="Ken Tauchi - Portfolio Website" />
        <meta
          property="og:site_name"
          content="Ken Tauchi - Portfolio Website"
        />
        <meta property="og:image" content={logo} />
      </MetaTags>
      <HeaderNav />
      <Header />
      <Contact />
      <WelcomeText />
      <GitHubBar />
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
