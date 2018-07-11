import React, { Component } from 'react'
import styled from 'styled-components'
import { ORANGE, TABLET, MOBILE } from '../constants'

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
                    
                    <Col2>
                        <h2>
                            Android and iOS<br />
                            Development
                        </h2>

                        <WebDevTechs>
                            <img src="/assets/androidtechs.svg"/ >
                        </WebDevTechs>
                    </Col2>
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
    &:hover {
        cursor: pointer;
    }
`
const TwoCol = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    @media(max-width: ${ MOBILE }) {
        flex-direction: column;
    }
`
const Col = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2 {
        padding-bottom: 20px;
        color: ${ ORANGE };
        line-height: 34px;
        font-weight: 300;
    }
    @media(max-width: ${ MOBILE }) {
        width: 100%;
    }
`

const Col2 = styled(Col)`
    @media(max-width: ${ MOBILE }) {
        margin-top: 50px;
    }
`

const WebDevTechs = styled.div`
    width: 50%;
    img {
        width: 100%;
    }
    @media(max-width: ${ TABLET }) {
        width: 50%;
    }
    @media(max-width: ${ MOBILE }) {
        width: 65%;
    }
`

export default TechnologiesWeMaster
