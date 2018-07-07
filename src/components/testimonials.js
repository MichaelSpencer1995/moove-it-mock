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
          <QuoteMarks xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21" height="21" width="25"><path d="M7.31.21l3.088 2.47C7.104 4.945 4.52 8.96 4.315 12.246c.112-.103.833-.197 1.14-.197 2.36 0 4.11 1.954 4.11 4.313 0 2.368-1.852 4.427-4.426 4.427-2.773 0-5.14-2.367-5.14-6.588C0 8.445 3.293 3.092 7.31.21zm14.61 0L25 2.68c-3.294 2.265-5.868 6.28-6.066 9.566.103-.103.72-.206 1.133-.206 2.368 0 4.118 1.956 4.118 4.315 0 2.368-1.853 4.427-4.427 4.427-2.78 0-5.147-2.368-5.147-6.59 0-5.747 3.296-11.1 7.31-13.983z" class="c-quote__fill"></path></QuoteMarks>

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
const QuoteMarks = styled.svg`
  width: 40px;
  fill: #b9b9b9;
`
const Quote = styled.div``
const Quoters = styled.div``
const Quoter = styled.div``

export default Testimonials
