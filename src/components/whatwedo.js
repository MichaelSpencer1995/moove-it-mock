import React, { Component } from 'react'
import styled from 'styled-components'

class WhatWeDo extends Component {
    render() {
        return (
            <View>
                <Container>
                    <LineAndCircle />

                    <h3>What we do</h3>

                    <ThreeCol>
                        <Col>
                            <h2>Build the right software products</h2>

                            <p>
                                We contribute to the strategic growth of your business by
                                helping your organization embrace innovation, implement
                                disruptive ideas and add value to existing products.
                            </p>
                        </Col>

                        <Col>
                            <h2>Reduced time to market</h2>

                            <p>
                                We combine effective communication and high technical capabilities
                                to keep our clients' goals on time and within budget.
                            </p>
                        </Col>

                        <Col>
                            <h2>Scalable high-quality</h2>

                            <p>
                                We focus on technologies that, along with a build-measure-learn
                                process, allow us to deliver high-performing, intelligible
                                code that is less error-prone.
                            </p>
                        </Col>
                    </ThreeCol>
                </Container>
            </View>
        )
    }
}

const View = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3a3a3a;
    width: 100%;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
    h3{
        color: #737373;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-top: 30px;
        text-transform: uppercase;
    }
`
const LineAndCircle = styled.div`
    width: 10px;
    position: relative;

    ::after {
        content: '';
        position: absolute;
        height: 20px;
        width: 1px;
        left: 50%;
        translateX(-50%);
        background: #737373;
    }

    ::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 20px;        
        transform: translateX(-50%);
        width: 10px;
        height: 10px;
        border: #737373 1px solid;
        border-radius: 999px;
    }
`
const ThreeCol = styled.div`
    display: flex;
    width: 95%;
`
const Col = styled.div`
    width: 33.333%;
    padding: 0 15px;
    h2 {
        color: #ff8d40;
        font-size: 28px;
        font-weight: 300;
    }
    p {
        color: white;
        font-size: 18px;
        font-weight: 300;
        line-height: 30px;
        margin-top: 20px;
    }
`

export default WhatWeDo
