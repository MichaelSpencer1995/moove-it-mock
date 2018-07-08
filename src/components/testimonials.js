import React, { Component } from 'react'
import styled from 'styled-components'
const windowWidth = window.innerWidth

class Testimonials extends Component {
  componentWillMount() {
    console.log(windowWidth)
  }

  render() {
    this.state = {
      currentQuote: "Moove-it has been instrumental in our ability to rapidly adapt and effectively respond to our market's demand. A strong cultural match, their savviness and consultative approach are key for our business to continue to choose Moove-it after 4+ years.",
      currentQuoter: ['Conor Brady', 'VP of Software Development, Geoforce']
    }

    return (
      <View>
        <Container>
            <QuoteMarks xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21" height="21" width="25"><path d="M7.31.21l3.088 2.47C7.104 4.945 4.52 8.96 4.315 12.246c.112-.103.833-.197 1.14-.197 2.36 0 4.11 1.954 4.11 4.313 0 2.368-1.852 4.427-4.426 4.427-2.773 0-5.14-2.367-5.14-6.588C0 8.445 3.293 3.092 7.31.21zm14.61 0L25 2.68c-3.294 2.265-5.868 6.28-6.066 9.566.103-.103.72-.206 1.133-.206 2.368 0 4.118 1.956 4.118 4.315 0 2.368-1.853 4.427-4.427 4.427-2.78 0-5.147-2.368-5.147-6.59 0-5.747 3.296-11.1 7.31-13.983z"></path></QuoteMarks>

          <QuoteContainer>
            <CurrentQuote>
              {this.state.currentQuote}
            </CurrentQuote>
            
            <CurrentQuoter>
              {this.state.currentQuoter[0]}
            </CurrentQuoter>

            <CurrentQuoterPoistion>
              {this.state.currentQuoter[1]}
            </CurrentQuoterPoistion>
          </QuoteContainer>

          <Quoters>
            <Quoter1 />
            <Quoter2 />
            <Quoter3 />
            <Quoter4 />
            <Quoter5 />
            <Quoter6 />
            <Quoter7 />
            <Quoter8 />
          </Quoters>
        </Container>
      </View>
    )
  }
}

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eaeaea;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuoteContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


const QuoteMarks = styled.svg`
  width: 40px;
  fill: #b9b9b9;
`
const CurrentQuote = styled.div`
  padding-top: 50px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  color: rgb(115, 115, 115);
  text-align: center;
`

const CurrentQuoter = styled.h2`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`

const CurrentQuoterPoistion= styled.h6`
  font-size: 11px;
  font-weight: 300;
  line-height: 18px;
  color: #737373;
`

const Quoters = styled.div`
  width: 60%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`
const Quoter = styled.button`
  width: calc(${windowWidth * 0.6 * .1}px);
  height: calc(${windowWidth * 0.6 * .1}px);
  overflow:hidden;
  border-radius: 999px;
  background-size: cover;
  border: none;
`
const Quoter1 = styled(Quoter)`
  background-image: url(/assets/testimonials/conor.jpg);
`
const Quoter2 = styled(Quoter)`
  background-image: url(/assets/testimonials/harry.jpg);
`
const Quoter3 = styled(Quoter)`
  background-image: url(/assets/testimonials/michael.jpg);
`
const Quoter4 = styled(Quoter)`
  background-image: url(/assets/testimonials/pete.jpg);
`
const Quoter5 = styled(Quoter)`
background-image: url(/assets/testimonials/steve.jpg);
`
const Quoter6 = styled(Quoter)`
background-image: url(/assets/testimonials/fernando.jpg);
`
const Quoter7 = styled(Quoter)`
  background-image: url(/assets/testimonials/agustin.jpg);
`
const Quoter8 = styled(Quoter)`
  background-image: url(/assets/testimonials/mlb.jpg);
`


export default Testimonials
