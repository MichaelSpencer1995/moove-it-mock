import React, { Component } from 'react'
import styled from 'styled-components'
import { ORANGE, TABLET, MOBILE } from '../constants'

const WhatWeDo = () => {
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
    padding-bottom: 80px;
    h3{
        color: #737373;
        padding-top: 14px;
        padding-bottom: 38px;
        margin-top: 30px;
        font-size: 16px;
        text-transform: uppercase;
    }
`
const LineAndCircle = styled.div`
    width: 10px;
    position: relative;
    right: 1px;

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
        width: 8px;
        height: 8px;
        border: #737373 1px solid;
        border-radius: 999px;
    }
    &:hover {
        cursor: pointer;
    }
`
const ThreeCol = styled.div`
    display: flex;
    width: 99%;
    max-width: 1200px;
    @media(max-width: ${ TABLET }) {
        width: 96%;
    }
    @media(max-width: ${ MOBILE }) {
        flex-direction: column;
        width: 90%;
    }
`
const Col = styled.div`
    width: 33.333%;
    padding: 0 15px;

    h2 {
        color: ${ ORANGE };
        font-size: 28px;
        font-weight: 300;
        width: 95%;
    }
    p {
        color: white;
        font-size: 18px;
        font-weight: 300;
        line-height: 30px;
        margin-top: 20px;
        width: 95%;
    }
    @media(max-width: ${ TABLET }) {
        padding: 0 5px;
    }
    @media(max-width: ${ MOBILE }) {
        width: 100%;
        margin-bottom: 20px;
    }
`

export default WhatWeDo
