import React, { Component } from 'react'
import styled from 'styled-components'
import { TABLET, MOBILE } from '../constants'

const Header = () => {
    return (
        <View>
            <Container>
                <h1>
                    We are your software partner <br />
                    for creating high-value, innovative products.
                </h1>
            </Container>
        </View>
    )
}

const View = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    background-image: url(/assets/hero.jpg);
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: ${ TABLET }) {
        height: calc(100vh - 50px);
    }
`
const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 0 20px;

    h1 {
        text-align: center;
        color: #fff;
        font-size: 56px;
        line-height: 1.23;
        line-height: 1.17541;
        font-weight: 300;
        padding: 0 21px;
    }
    @media(max-width: ${ TABLET }) {
        max-width: 700px;
        width: 100%;
        padding: 0;
        h1 {
            font-size: 45px;
            padding: 0;
            position: relative;
            bottom: 10px;
        }
    }
    @media(max-width: ${ MOBILE }) {
        width: 86%;
        h1 {
            font-size: 36px;
        }
    }
    @media(max-width: 550px) {
        width: 90%;
        h1 {
            font-size: 22px;
        }
    }
`

export default Header
