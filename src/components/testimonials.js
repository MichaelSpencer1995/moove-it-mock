import React, { Component } from 'react'
import styled from 'styled-components'
import Quoter from './quoter'
import { TABLET } from '../constants'

const quote0 = "Moove-it has been instrumental in our ability to rapidly adapt and effectively respond to our market's demand. A strong cultural match, their savviness and consultative approach are key for our business to continue to choose Moove-it after 4+ years."
const quote1 = "I can vouch for the @moove_it team being a wonderful bunch, and working for them would be a wise move."
const quote2 = "Their offices are cool and home-like, and the culture is positive and fresh. Everyone seems talented and caring, and their technical chops are competitive with anyone else you can find."
const quote3 = "The talented and passionate people at Moove-it are an integral part of the YouScience team. Together we set high standards and deliver great software."
const quote4 = "Moove-it has been an ideal partner with our business. Their ability to work within our budget, adjust to our ever-changing product development priorities, and provide innovative and thoughtful solutions has been a large part of our success."
const quote5 = "Working with Moove-it is a two-way enrichment relationship, sharing a common goal: make the technology invisible to the user and provide a better service."
const quote6 = "Moove-it has been a valuable resource to our engineering needs. Thank you!"
const quote7 = "Moove-it helped us increase our team's velocity and capacity.  Moove-it engineers were able to catch up with our project's complex architecture and successfully integrate with our full-time staff."
const quoteData0 = ['Conor Brady', 'VP of Software Development, Geoforce']
const quoteData1 = ['Harry Roberts', 'CSS Wizard']
const quoteData2 = ['Michael Staton', 'Partner, Learn Capital']
const quoteData3 = ['Pete Sharum', 'Head of Engineering, YouScience']
const quoteData4 = ['Steve Roberson', 'Managing Partner, MapRight']
const quoteData5 = ['Fernando Etchevarren', 'CTO, Bancard']
const quoteData6 = ['Agustin Vilaseca', 'CTO, edSurge']
const quoteData7 = ['Matt Gelbman', 'SVP, Software Engineering MLB.com']

class Testimonials extends Component {
  constructor() {
    super()  
    this.state = {
      quoterIndex: 0,
      active: ["-active", "", "", "", "", "", "", ""],
      currentQuote: [quote0, quote1, quote2, quote3, quote4, quote5, quote6, quote7],
      currentQuoter: [quoteData0, quoteData1, quoteData2, quoteData3, quoteData4, quoteData5, quoteData6, quoteData7]
    }
  }

  render() {
    return (
      <View>
        <Container>
          <QuoteMarks xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21" height="21" width="25"><path d="M7.31.21l3.088 2.47C7.104 4.945 4.52 8.96 4.315 12.246c.112-.103.833-.197 1.14-.197 2.36 0 4.11 1.954 4.11 4.313 0 2.368-1.852 4.427-4.426 4.427-2.773 0-5.14-2.367-5.14-6.588C0 8.445 3.293 3.092 7.31.21zm14.61 0L25 2.68c-3.294 2.265-5.868 6.28-6.066 9.566.103-.103.72-.206 1.133-.206 2.368 0 4.118 1.956 4.118 4.315 0 2.368-1.853 4.427-4.427 4.427-2.78 0-5.147-2.368-5.147-6.59 0-5.747 3.296-11.1 7.31-13.983z"></path></QuoteMarks>

          <QuoteContainer>
            <CurrentQuote>
              {this.state.currentQuote[this.state.quoterIndex]}
            </CurrentQuote>
            
            <CurrentQuoter>
              {this.state.currentQuoter[this.state.quoterIndex][0]}
            </CurrentQuoter>

            <CurrentQuoterPoistion>
              {this.state.currentQuoter[this.state.quoterIndex][1]}
            </CurrentQuoterPoistion>
          </QuoteContainer>

          <Quoters>
            <Quoter
              src="/assets/testimonials/conor.jpg" 
              isActive={this.state.active[0]}
              updateQuoterStatus={() => this.setNewQuoter(0)}
              classes={{ img: "testimonial-image-wrapper", button: this.state.active[0] }} />
            <Quoter
              src="/assets/testimonials/harry.jpg"
              isActive={this.state.active[1]}
              updateQuoterStatus={() => this.setNewQuoter(1)}
              classes={{ img: "testimonial-image-wrapper", button: this.state.active[1] }} />
            <Quoter
              src="/assets/testimonials/michael.jpg" 
              isActive={this.state.active[2]}
              updateQuoterStatus={() => this.setNewQuoter(2)}
              classes={{ img: "testimonial-image-wrapper", button: this.state.active[2] }} />
            <Quoter
              src="/assets/testimonials/pete.jpg"
              isActive={this.state.active[3]}
              updateQuoterStatus={() => this.setNewQuoter(3)}
              classes={{ img: "testimonial-image-wrapper lg-testi-img", button: this.state.active[3] }} />
            <Quoter
              src="/assets/testimonials/steve.jpg"  
              isActive={this.state.active[4]}
              updateQuoterStatus={() => this.setNewQuoter(4)}
              classes={{ img: "testimonial-image-wrapper", button: this.state.active[4] }} />
            <Quoter
              src="/assets/testimonials/fernando.jpg"
              isActive={this.state.active[5]}
              updateQuoterStatus={() => this.setNewQuoter(5)}
              classes={{ img: "testimonial-image-wrapper", button: this.state.active[5] }}  />
            <Quoter
              src="/assets/testimonials/agustin.jpg"
              isActive={this.state.active[6]}
              updateQuoterStatus={() => this.setNewQuoter(6)}
              classes={{ img: "testimonial-image-wrapper", button: this.state.active[6] }}  />
            <Quoter
              src="/assets/testimonials/mlb.jpg" 
              isActive={this.state.active[7]}
              updateQuoterStatus={() => this.setNewQuoter(7)}
              classes={{ img: "testimonial-image-wrapper", button: this.state.active[7] }} />
          </Quoters>
        </Container>
      </View>
    )
  }
  setNewQuoter(quoterToActivate) {
    let newState = ["", "", "", "", "", "", "", ""]
    newState[quoterToActivate] = "-active"

    this.setState({ 
      active: newState,
      quoterIndex: quoterToActivate
    })
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
  margin-top: 50px;
  @media(max-width: ${ TABLET }) {
    width: 60%;
  }
`


const QuoteMarks = styled.svg`
  width: 40px;
  fill: #b9b9b9;
`
const CurrentQuote = styled.div`
  font-size: 18px;
  line-height: 24px;
  height: 100px;
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

const CurrentQuoterPoistion = styled.h6`
  font-size: 11px;
  font-weight: 300;
  line-height: 18px;
  color: #737373;
`

const Quoters = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`
export default Testimonials
