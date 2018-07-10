import React, { Component } from 'react'
import styled from 'styled-components'

const TechnologiesWeMaster = () => {
    return (
        <View>
            <Container>
                <LineAndCircle />

                <h3>Technologies we master</h3>

                <TwoCol>
                    <Col>
                        <h2>
                            Web Development and<br />
                            Enterprise Applications
                        </h2>

                        <WebDevTechs>
                            <img src="/assets/techs.svg"/ >
                        </WebDevTechs>
                    </Col>
                    
                    <Col>
                        <h2>
                            Android and iOS<br />
                            Development
                        </h2>

                        <WebDevTechs>
                            <img src="/assets/androidtechs.svg"/ >
                        </WebDevTechs>
                    </Col>
                </TwoCol>
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
    width: 100%;
    padding-bottom: 60px;
    h3{
        color: #737373;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 30px;
        text-transform: uppercase;
        font-size: 16px;
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
`
const TwoCol = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`
const Col = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2 {
        padding-bottom: 20px;
        color: #ff8d40;
        line-height: 34px;
        font-weight: 300;
    }
`
const WebDevTechs = styled.div`
    img {
        width: 100%;
    }
`

export default TechnologiesWeMaster
