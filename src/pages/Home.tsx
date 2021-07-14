import Layout, { Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { createUseStyles } from "react-jss";
import About from "./About";
import Banner from "./Banner";
import Education from "./Education";
import Experience from "./Experience";

const style = createUseStyles({
  headerWrapper: {
    background: "#000000",
    color: "white",
    fontWeight: "900",
    fontSize: "50px",
  },

  header2Wrapper: {},
  sectionWrapper: {},
  footerWrapper: {
    background: "#000000",
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "20px",
  },
});

const Home = () => {
  const classes = style();
  return (
    <Layout>
      <Header className={classes.headerWrapper}>Amit Sharma</Header>

      <Banner />
      <div className={classes.sectionWrapper}>
        <About />
      </div>

      <div className={classes.sectionWrapper}>
        <Education />
      </div>

      <div className={classes.sectionWrapper}>
        <Experience />
      </div>
      <Footer className={classes.footerWrapper}>Copyright© 2021</Footer>
    </Layout>
  );
};

export default Home;
