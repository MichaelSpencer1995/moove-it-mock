import React, { Component } from 'react'
import styled from 'styled-components'
import { ORANGE } from '../constants'

class Brands extends Component {
    render() {
        return (
            <View id="brands-target">
                <Container>
                    <LineAndCircle />  

                    <a onClick={() => {
                        const element = document.getElementById('brands-target')
                        element.scrollIntoView({behavior: "smooth", block: "start"})
                    }}>Brands that trust us</a>

                    <BrandsContainer>
                        <Brand><img src="/assets/brands/mlb.png" /></Brand>
                        <Brand><img src="/assets/brands/unilever.jpg" /></Brand>
                        <Brand><img src="/assets/brands/verifone.jpg" /></Brand>
                        <Brand><img src="/assets/brands/edsurge.jpg" /></Brand>
                        <Brand><img src="/assets/brands/prescribewellness.png" /></Brand>
                        <Brand><img src="/assets/brands/catapult.png" /></Brand>
                        <Brand><img src="/assets/brands/numerex.jpg" /></Brand>
                        <Brand><img src="/assets/brands/youscience.jpg" /></Brand>
                        <Brand><img src="/assets/brands/geoforce.jpg" /></Brand>
                        <Brand><img src="/assets/brands/kd.png" /></Brand>
                        <Brand><img src="/assets/brands/quantumiot.png" /></Brand>
                        <Brand><img src="/assets/brands/therapydia.png" /></Brand>
                        <Brand><img src="/assets/brands/bancard.jpg" /></Brand>
                        <Brand><img src="/assets/brands/bandai.jpg" /></Brand>
                        <Brand><img src="/assets/brands/bcp.jpg" /></Brand>
                        <Brand><img src="/assets/brands/tugg.jpg" /></Brand>
                        <Brand><img src="/assets/brands/mapright.jpg" /></Brand>
                        <Brand><img src="/assets/brands/uversity.jpg" /></Brand>
                        <Brand><img src="/assets/brands/petrobras.jpg" /></Brand>
                        <Brand><img src="/assets/brands/voy.png" /></Brand>
                    </BrandsContainer>

                    <LetsWorkTogether>
                        <RightArrow src="/assets/arrow-right.svg" />

                        <span>Let's work together</span>
                    </LetsWorkTogether>
                </Container>
            </View>
        )
    }
}

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
const View = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    padding-bottom: 48px;

    a {
        font-size: 16px;
        text-decoration: none;
        margin-top: 20px;
        padding-top: 18px;
        padding-bottom: 0px;
        text-transform: uppercase;
        color: #737373;
        font-weight: bold;
        &:hover {
            text-decoration: underline;
        }
    }
`
const BrandsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    > * {
        flex-basis: 20%;
    }
`
const Brand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 80%;
    }
`
const LetsWorkTogether = styled.button`
    border-radius: 999px;
    background: ${ ORANGE };
    color: #fff;
    padding: 7px 22px;
    border: none;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 36px;
`

const RightArrow = styled.img`
    width: 4px;
    margin-right: 22px;
    position: relative;
    top: 1px;
`

export default Brands
