import { Card, Col, Row } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

interface IEducation {
    title: string;
    schoolname: string;
    startYear: number;
    endYear: number;
    address: string;
}


const useStyles = createUseStyles({
    titleWrapper:{
        padding:'20px',
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'underline',
        width:'100%',
    },
    sectionTitle:{
        fontWeight:'900',
        fontFamily: 'verdana',
        fontSize:'30px',
        lineHeight: '42px',
    },
    rowWrapper:{
        width:'100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    eduCardWrapper:{
        width:'100%',
        margin:'20px',
        padding:'20px',
    },
    rows:{
        display: 'flex',
        flexWrap: 'wrap'
    },
    col:{
        height:'400',
        width:'250px',
        marginTop:'15px'
    },
    card:{
        width:'100%',
        height:'100%'
    }
});

const Education= () => {

    const [educations, setEducations] = useState([] as IEducation[]);

    const classes = useStyles();

    const getAllEducation = async () => {
        let response =await axios.get('http://localhost:3050/education');
        setEducations(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getAllEducation();
    }, [])
    return (
        <Row className={classes.rowWrapper}>
            <div className={classes.titleWrapper}>
                <h3 className={classes.sectionTitle}>Education</h3>
            </div>

            <div className={classes.eduCardWrapper}>
            <Row className={classes.rows}>
                {educations.map((education) => (
                    <Col className={classes.col} span={8}>
                    <Card className={classes.card} title={education.title} style={{ width: 300 }}>
                    <h2>{education.schoolname}</h2>
                    <h3>{education.startYear}-{education.endYear > 0 ? education.endYear : "Currently Studying here"}</h3>
                    <h4>{education.address}</h4>

                </Card>
                    </Col>
                ))}
                
                
            </Row>
            
            </div>
      </Row>   
    )
}

export default Education

