import React from "react";
import { Navbar, Hero, Category, CTA, Footer} from "./components";
import styles from "./style";

const App = () => {

  return (
    <>
      <Navbar />

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Category />
        <CTA />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App
