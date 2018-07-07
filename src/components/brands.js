import React, { Component } from 'react'
import styled from 'styled-components'

class Brands extends Component {
    render() {
        return (
            <View>
                <Container>
                  <LineAndCircle />  
  
                  <a href="#">Brands that trust us</a>

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
                    Let's work together
                  </LetsWorkTogether>
                </Container>
            </View>
        )
    }
}

const LineAndCircle = styled.div`
    width: 10px;
    background: red;
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
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 60px;

    a {
        text-decoration: none;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-transform: uppercase;
        color: #737373;
        font-weight: bold;
    }
`
const BrandsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > * {
        flex-basis: 20%;
    }
`
const Brand = styled.div`
    // width: 100%;
    img{
        width: 100%;
    }
`
const LetsWorkTogether = styled.button`
    border-radius: 999px;
    background: #ff8d40;
    color: #fff;
    padding: 6px 20px;
    border: none;
    font-weight: 300;
    font-size: 18px;
`

export default Brands
