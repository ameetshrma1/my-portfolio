import { Col, Image, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import pic from "../images/FW.jpg";

interface IAbout {
  detail: string;
  image: string;
}

const useStyles = createUseStyles({
  titleWrapper: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    textDecoration: "underline",
  },
  sectionTitle: {
    fontWeight: "900",
    fontFamily: "verdana",
    fontSize: "30px",
    lineHeight: "42px",
  },
  contentWrapper: {
    margin: "1px",
    padding: "5px",
    textAlign: "justify",
  },
  imageWrapper: {
    margin: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignContent: "end",
    // width: "100%",
    // height: "100%",
  },
});

const About = () => {
  const [about, setAbout] = useState({} as IAbout);

  const getAboutData = async () => {
    let response = await axios.get("http://localhost:3050/about");
    setAbout(response.data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const classes = useStyles();
  return (
    <Row>
      <Col span={12}>
        <div className={classes.titleWrapper}>
          <h3 className={classes.sectionTitle}>About Me</h3>
        </div>

        <div className={classes.contentWrapper}>
          <p> {about.detail} </p>
        </div>
      </Col>
      <Col span={12}>
        <div className={classes.imageWrapper}>
          <Image src={pic} />
        </div>
      </Col>
    </Row>
  );
};

export default About;
