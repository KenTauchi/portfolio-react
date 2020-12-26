import "./App.css";

import Header from "./components/Header";
import Contact from "./components/Contact/Contact";
import WelcomeText from "./components/WelcomeText";

function App() {
  return (
    <div style={styles.bcg}>
      <Header />
      <Contact />
      <WelcomeText />
    </div>
  );
}

const styles = {
  bcg: {
    backgroundColor: "black",
    color: "white",
  },
};

export default App;
