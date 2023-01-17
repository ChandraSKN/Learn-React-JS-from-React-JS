import React, { Fragment } from "react";

import { View, Image } from "react-native";

import confused from "../images/confused.gif";

import Confident from "../images/Confident.gif";

import Card from 'react-bootstrap/Card';
import {
    Col,
    Row,    
    Container,
} from "react-bootstrap";


// import "./Home.css"

function Home() {
    let stylereg_na = { height: 300, width: 300 };
    let stylereg_eu = { height: 300, width: 300 };

    return (
        <Fragment>
            <Container>
            <Row>
                <Col>
                    <View style={{ alignItems: "left", flex: 1, paddingTop: 15, paddingBottom: 15 }}>
                        <Image style={stylereg_na} source={confused} />
                    </View>
                </Col>
                <Col>
                    <View style={{ alignItems: "center", paddingTop: 130, paddingBottom: 5 }}>
                        <Card border="success" style={{ width: '18rem' }}>
                            <Card.Body>Learn React JS from React JS</Card.Body>
                        </Card>
                    </View>
                </Col>
                <Col>
                    <View style={{ alignItems: "right", paddingTop: 15, paddingBottom: 15 }}>
                        <Image style={stylereg_eu} source={Confident} />
                    </View>

                </Col>
            </Row>
            </Container>
        </Fragment>
    )
}

export default Home;