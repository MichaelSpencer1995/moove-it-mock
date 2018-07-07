import React, { Component } from 'react'
import styled from 'styled-components'

class Brands extends Component {
    render() {
        return (
            <View>
                <Container>
                  <LineAndCircle />  
  
                  <a href="#">Brands that trust us</a>

                  <BrandsGrid>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                    <Brand><img src="#" /></Brand>
                  </BrandsGrid>

                  <LetsWorkTogether>
                    Let's work together
                  </LetsWorkTogether>
                </Container>
            </View>
        )
    }
}

const View = styled.div``
const Container = styled.div``
const LineAndCircle = styled.div``
const BrandsGrid = styled.div``
const Brand = styled.div``
const LetsWorkTogether = styled.button``

export default Brands
