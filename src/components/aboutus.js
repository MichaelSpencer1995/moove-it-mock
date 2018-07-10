import React, { Component } from 'react'
import styled from 'styled-components'
import { ORANGE } from '../constants'

class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            view: "desktop"
        }
    }

    render() {
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
        }
    }
}

const DesktopView = styled.div`
    width: 100vw;
    height: 50vw;
    background-image: url(/assets/aboutbg.jpg);
    background-size: cover;
    background-position: 0 50%;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 25vw);
`
const BlockWrapper = styled.div`
    box-sizing: border-box;
    padding: 50px 25px;
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
`
const AllProjectsWrapper = styled(BlockWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 0px !important;
    grid-column: 3;
    grid-row: 1;
`
const OurExperienceWrapper = styled(BlockWrapper)`
    background: white;
    grid-column: 4;
    grid-row: 1;
`
const OurTeamWrapper = styled(BlockWrapper)`
    background: white;
    grid-column: 1;
    grid-row: 2;
    padding: 50px 30px;
`
const OurProcessWrapper = styled(BlockWrapper)`
    background: white;
    grid-column: 3;
    grid-row: 2;
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
