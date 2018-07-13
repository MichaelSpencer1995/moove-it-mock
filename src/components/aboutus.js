import React, { Component } from 'react'
import styled from 'styled-components'
import Carousel from './carousel'
import { ORANGE, TABLET, MOBILE } from '../constants'

let ourExpToExpand, ourTeamContainerElement, OurProcessContainerElement

class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            view: "desktop"
        }
    }

    componentWillMount() {
        this.setView()
    }

    setView() {
        if(window.innerWidth < 776) {
            this.setState({
                view: "mobile"
            })
        }
    }

    handleExpanderTapped(sectionToExpandIndex) {
        this.rotateIcon(sectionToExpandIndex)
        this.expandSection(sectionToExpandIndex)
    }
    
    expandSection(index) {
        let toExpandElements = document.getElementsByClassName('to-expand-containers')
        const alreadyExpanded = toExpandElements[index].style.maxHeight === "2000px"
        
        if(alreadyExpanded) {
            toExpandElements[index].style.maxHeight = '0'
        } else {
            toExpandElements[index].style.maxHeight = '2000px'
        }
    }

    rotateIcon(index) {
        let expanderElements = document.getElementsByClassName('expanders')
        const alreadyExpanded = expanderElements[index].style.transform === 'rotate(0deg)'

        if(alreadyExpanded) {
            expanderElements[index].style.transform = 'rotate(180deg)'
        } else {
            expanderElements[index].style.transform = 'rotate(0deg)'
        }
    }

    checkIfRerenderNecessary() {
        if(this.state.view === 'desktop') {
            if(window.innerWidth < 776) {
                this.setState({
                    view: 'mobile'
                })
            }
        } else {
            if(window.innerWidth >= 776) {
                this.setState({
                    view: 'desktop'
                })
            }
        }
    }

    render() {
        let windowWidth = window.innerWidth
        window.addEventListener('resize', () => {
            this.checkIfRerenderNecessary()
        })
        
        if(this.state.view === "desktop") {
            return (
                <DesktopView>
                    <Grid>
                        <AllProjectsWrapper>
                            <AllProjectsContainer>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"><path d="M8 11V8h3v3H8zm0-7h3v3H8V4zm0-4h3v3H8V0zM4 8h3v3H4V8zm0-4h3v3H4V4zm0-4h3v3H4V0zM0 8h3v3H0V8zm0-4h3v3H0V4zm0-4h3v3H0V0z"></path></svg>
                                
                                <a href="#">All projects</a>
                            </AllProjectsContainer>
                        </AllProjectsWrapper>

                        <OurExperienceWrapper>
                            <OurExperienceContainer>
                                <h3>Our Experience</h3>

                                <p>
                                    We deliver high-value and compelling web and mobile apps
                                    throughout a wide range of vertical markets and industries. 
                                </p>

                                <a href="#">Read more</a>
                            </OurExperienceContainer>
                        </OurExperienceWrapper>
                        
                        <OurTeamWrapper>
                            <OurTeamContainer>
                                <h3>Our Team</h3>

                                <p>
                                    We have an enthusiastic, professional and reliable team.
                                    We efficiently integrate cross-disciplinary talents with
                                    a well-defined development process. 
                                </p>

                                <a href="#">Read more</a>
                            </OurTeamContainer>
                        </OurTeamWrapper>

                        <OurProcessWrapper>
                            <OurProcessContainer>
                                <h3>Our Process</h3>

                                <p>
                                    We unify design and product strategy in an agile context to
                                    reduce development cycles and maximize the value delivered
                                    to stakeholders. 
                                </p>

                                <a href="#">Read more</a>
                            </OurProcessContainer>
                        </OurProcessWrapper>
                    </Grid>
                </DesktopView>
            )
        } else {
            return (
                <MobileView>
                    <Carousel />

                    <AboutUsMobileContainer>
                        <OurExperienceWrapper>
                            <OurExperienceContainer>
                                <ExpanderH3Container1 onClick={() => this.handleExpanderTapped(0)}>
                                    <h3>Our Experience</h3>

                                    <ExpanderWrapper className="expanders">
                                        <img src="/assets/expander.svg" />
                                    </ExpanderWrapper>
                                </ExpanderH3Container1>

                                <ToExpand1 className="to-expand-containers">
                                    <p>
                                        We deliver high-value and compelling web and mobile apps
                                        throughout a wide range of vertical markets and industries. 
                                    </p>

                                    <a href="#">Read more</a>
                                </ToExpand1>
                            </OurExperienceContainer>
                        </OurExperienceWrapper>
                        
                        <OurTeamWrapper>
                            <OurTeamContainer>
                                <ExpanderH3Container2 onClick={() => this.handleExpanderTapped(1)}>
                                    <h3>Our Team</h3>

                                    <ExpanderWrapper className="expanders">
                                        <img src="/assets/expander.svg" />
                                    </ExpanderWrapper>
                                </ExpanderH3Container2>

                                <ToExpand2 className="to-expand-containers">
                                    <p>
                                        We have an enthusiastic, professional and reliable team.
                                        We efficiently integrate cross-disciplinary talents with
                                        a well-defined development process. 
                                    </p>

                                    <a href="#">Read more</a>
                                </ToExpand2>
                            </OurTeamContainer>
                        </OurTeamWrapper>

                        <OurProcessWrapper>
                            <OurProcessContainer>
                                <ExpanderH3Container3 onClick={() => this.handleExpanderTapped(2)}>
                                    <h3>Our Process</h3>

                                    <ExpanderWrapper className="expanders">
                                        <img src="/assets/expander.svg" />
                                    </ExpanderWrapper>
                                </ExpanderH3Container3>

                                <ToExpand3 className="to-expand-containers">
                                    <p>
                                        We unify design and product strategy in an agile context to
                                        reduce development cycles and maximize the value delivered
                                        to stakeholders. 
                                    </p>

                                    <a href="#">Read more</a>
                                </ToExpand3>
                            </OurProcessContainer>
                        </OurProcessWrapper>
                    </AboutUsMobileContainer>
                </MobileView>
            )
        }
    }
}

const DesktopView = styled.div`
    width: 100vw;
    height: 50vw;
    background-image: url(/assets/aboutbg.jpg);
    background-size: cover;
    background-position: 0 50%;
    @media(max-width: ${ TABLET }) {
        height: 66.666666vw;
    }
`
const MobileView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3a3a3a;
`
const AboutUsMobileContainer = styled.div`
    margin-top: -40px;
    background: #3a3a3a;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ExpanderH3Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: #737373 1px solid;
    padding-top: 20px;
`
const ExpanderH3Container1 = styled(ExpanderH3Container)`border: none;`
const ExpanderH3Container2 = styled(ExpanderH3Container)`margin-top: 14px;`
const ExpanderH3Container3 = styled(ExpanderH3Container)`margin-top: 14px;`

const ExpanderWrapper = styled.button`
    width: 20px;
    border: none;
    background: transparent;
    transform: rotate(180deg);
    transition: transform .25s ease;
    img {
        width: 100%;
    }
`
const ToExpand = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
`
const ToExpand1 = styled(ToExpand)`
    transition: max-height 0.5s ease;
`
const ToExpand2 = styled(ToExpand)``
const ToExpand3 = styled(ToExpand)``

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 25vw);
    @media(max-width: ${ TABLET }) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 33.3333333vw);
    }
`
const BlockWrapper = styled.div`
    box-sizing: border-box;
    padding: 0px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        h3 {
            text-transform: uppercase;
            font-weight: 700;
            padding-bottom: 20px;
            font-size: 16px;
            color: #737373;
        }
        p {
            font-size: 18px;
            font-weight: 300;
            line-height: 27px;
            padding-bottom: 20px;
        }
        a {
            color: ${ ORANGE };
            font-weight: 300;
            font-size: 18px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    @media(max-width: ${ TABLET }) {
        div {
            h3 {
                padding-bottom: 8px;
            }
            p {
                padding-bottom: 14px;
            }
        }
    }
    @media(max-width: ${ MOBILE }) {
        div {
            h3 {
                font-size: 21px;
                font-weight: 300;
                color: white;
            }
            p {
                color: white;
                line-height: 30px;
                margin-top: 18px;
                margin-bottom: 18px;
            }
        }
    }
`
const AllProjectsWrapper = styled(BlockWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px 0px !important;
    grid-column: 3;
    grid-row: 1;
    @media(max-width: ${ TABLET }) {
        grid-column: 2;
        grid-row: 1;
    }
`
const OurExperienceWrapper = styled(BlockWrapper)`
    background: white;
    grid-column: 4;
    grid-row: 1;
    @media(max-width: ${ TABLET }) {
        grid-column: 3;
        grid-row: 1;
    }
    @media(max-width: ${ MOBILE }) {
        background: #3a3a3a;
    }
`
const OurTeamWrapper = styled(BlockWrapper)`
    background: white;
    grid-column: 1;
    grid-row: 2;
    padding: 50px 30px;
    @media(max-width: ${ TABLET }) {
        grid-column: 1;
        grid-row: 2;
    }
    @media(max-width: ${ MOBILE }) {
        background: #3a3a3a;
        padding: 0px 25px;
    }
`
const OurProcessWrapper = styled(BlockWrapper)`
    background: white;
    grid-column: 3;
    grid-row: 2;
    @media(max-width: ${ TABLET }) {
        grid-column: 2;
        grid-row: 2;
    }
    @media(max-width: ${ MOBILE }) {
        background: #3a3a3a;
        margin-bottom: 20px;
    }
`

const AllProjectsContainer = styled.div`
    a {
        text-transform: uppercase;
        font-weight: 300 !important;
        &:hover {
            text-decoration: none !important;
        }
    }
    svg {
        fill: ${ ORANGE };
        padding-right: 3px;
    }
`
const OurExperienceContainer = styled.div``
const OurTeamContainer = styled.div``
const OurProcessContainer = styled.div``

export default AboutUs
