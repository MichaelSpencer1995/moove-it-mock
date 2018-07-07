import React, { Component } from 'react'
import styled from 'styled-components'

class Header extends Component {
    render() {
        return (
            <View>
                <Container>
                  <h1>We are your software partner for creating high-value, innovative products.</h1>
                </Container>
            </View>
        )
    }
}

const View = styled.div``
const Container = styled.div``

export default Header
