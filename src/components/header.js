import React, { Component } from 'react'
import styled from 'styled-components'

class Header extends Component {
    render() {
        return (
            <View>
                <Container>
                  <h1>We are your software partner <br /> for creating high-value, innovative products.</h1>
                </Container>
            </View>
        )
    }
}

const View = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    background-image: url(/assets/hero.jpg);
    background-size: cover;
    background-position: 0px 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    }
`

export default Header
