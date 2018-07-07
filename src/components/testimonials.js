import React, { Component } from 'react'
import styled from 'styled-components'

class Testimonials extends Component {
  render() {
    this.state = {
      currentQuote: 'blah',
      currentQuoter: ['Conor Brady', 'VP of Software Development, Geoforce']
    }

    return (
      <View>
        <Container>
          <QuoteMarks>
            <img src="#" />
          </QuoteMarks>

          <Quote>{this.state.currentQuote}</Quote>

          <Quoters>
            <Quoter><img src="#" /></Quoter>
            <Quoter><img src="#" /></Quoter>
            <Quoter><img src="#" /></Quoter>
            <Quoter><img src="#" /></Quoter>
            <Quoter><img src="#" /></Quoter>
            <Quoter><img src="#" /></Quoter>
            <Quoter><img src="#" /></Quoter>
            <Quoter><img src="#" /></Quoter>
          </Quoters>
        </Container>
      </View>
    )
  }
}

const View = styled.div``
const Container = styled.div``
const QuoteMarks = styled.div``
const Quote = styled.div``
const Quoters = styled.div``
const Quoter = styled.div``

export default Testimonials
