import { Card, Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

interface IExperience {
  id: number;
  companyName: string;
  startYear: number;
  endYear: number;
}

const useStyles = createUseStyles({
  titleWrapper: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    textDecoration: "underline",
    width: "100%",
  },
  sectionTitle: {
    fontWeight: "900",
    fontFamily: "verdana",
    fontSize: "30px",
    lineHeight: "42px",
  },
  rowWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  expCardWrapper: {
    width: "100%",
    margin: "20px",
    padding: "20px",
  },
  rows: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    marginTop: "15px",
  },
});

const Experience = () => {
  const [experiences, setExperiences] = useState([] as IExperience[]);

  const getAllExperience = async () => {
    let response = await axios.get("http://localhost:3050/experience");
    setExperiences(response.data);
  };

  useEffect(() => {
    getAllExperience();
  }, []);

  const classes = useStyles();

  return (
    <Row className={classes.rowWrapper}>
      <div className={classes.titleWrapper}>
        <h3 className={classes.sectionTitle}>Experience</h3>
      </div>

      <div className={classes.expCardWrapper}>
        <Row className={classes.rows}>
          {experiences.map((experience) => (
            <Col span={6}>
              <Card
                className={classes.card}
                title={experience.companyName}
                style={{ width: 300 }}
              >
                <p>{experience.startYear}</p>
                <p>
                  {experience.endYear > 0
                    ? experience.endYear
                    : "Currently working here"}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Row>
  );
};

export default Experience;
