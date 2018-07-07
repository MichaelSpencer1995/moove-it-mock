import React, { Component } from 'react'
import styled from 'styled-components'
import TechnologiesWeMaster from '../components/technologieswemaster'

class AboutUs extends Component {
    render() {
        this.state = {
            view: "desktop"
        }

        if(this.state.view === "desktop") {
            return (
                <DesktopView>
                    <Grid>
                        <BlockWrapper>
                            <AllProjectsContainer>
                                <a href="#">All projects</a>
                            </AllProjectsContainer>
                        </BlockWrapper>

                        <BlockWrapper>
                            <OurExperienceContainer>
                                <h3>Our Experience</h3>

                                <p>
                                    We deliver high-value and compelling web and mobile apps
                                    throughout a wide range of vertical markets and industries. 
                                </p>

                                <a href="#">Read more</a>
                            </OurExperienceContainer>
                        </BlockWrapper>
                        
                        <BlockWrapper>
                            <OurTeamContainer>
                                <h3>Our Team</h3>

                                <p>
                                    We have an enthusiastic, professional and reliable team.
                                    We efficiently integrate cross-disciplinary talents with
                                    a well-defined development process. 
                                </p>

                                <a href="#">Read more</a>
                            </OurTeamContainer>
                        </BlockWrapper>

                        <BlockWrapper>
                            <OurProcessContainer>
                                <h3>Our Process</h3>

                                <p>
                                    We unify design and product strategy in an agile context to
                                    reduce development cycles and maximize the value delivered
                                    to stakeholders. 
                                </p>

                                <a href="#">Read more</a>
                            </OurProcessContainer>
                        </BlockWrapper>
                    </Grid>
                    
                    <TechnologiesWeMaster />
                </DesktopView>
            )
        }
    }
}

const DesktopView = styled.div``
const Grid = styled.div``
const BlockWrapper = styled.div``
const AllProjectsContainer = styled.div``
const OurExperienceContainer = styled.div``
const OurTeamContainer = styled.div``
const OurProcessContainer = styled.div``

export default AboutUs
