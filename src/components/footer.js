import React, { Component } from 'react'
import styled from 'styled-components'

class Footer extends Component {
    render() {
        return (
            <View>
                <TopLeftWrapper>
                    <TopLeftContainer>
                        <Logo>
                            <img src="#"/>
                        </Logo>

                        <ThreeCol>
                            <FirstCol>
                                <h4>About</h4>

                                <a href="#">Credo & Values</a>
                                <a href="#">The team</a>
                                <a href="#">Playbook</a>
                                <a href="#">Privacy Policy</a>
                            </FirstCol>

                            <SecondCol>
                                <h4>Services</h4>

                                <a href="#">Web App Development</a>
                                <a href="#">Mobile Development</a>
                                <a href="#">Java Enterprise Applications</a>
                                <a href="#">Staff Augmentation</a>
                            </SecondCol>

                            <ThirdCol>
                                <h4>Community</h4>

                                <a href="#">Open source</a>
                                <a href="#">Events</a>
                                <a href="#">Blog</a>
                            </ThirdCol>
                        </ThreeCol>
                    </TopLeftContainer>
                </TopLeftWrapper>

                <TopRightWrapper>
                    <TopRightContainer>
                        <ThreeRow>
                            <FirstRow>
                                <LocationIcon>
                                    <img src="#" />
                                </LocationIcon>

                                <p>	
                                    Austin<br />
                                    701 Brazos St Austin, TX, USA 78701<br />
                                    +1 (512) 949-8991
                                </p>
                            </FirstRow>

                            <SecondRow>
                                <LocationIcon>
                                    <img src="#" />
                                </LocationIcon>

                                <p>	
                                    San Francisco<br />
                                    2 Embarcadero Center 8th Floor<br />
                                    San Francisco, CA, USA 94111<br />
                                    +1 (415) 449-8778
                                </p>
                            </SecondRow>

                            <ThirdRow>
                                <LocationIcon>
                                    <img src="#" />
                                </LocationIcon>

                                <p>	
                                    Montevideo<br />
                                    Bulevar Artigas 1112 Montevideo 11300, Uruguay<br />
                                    +598 2706-60-71
                                </p>
                            </ThirdRow>
                        </ThreeRow>
                    </TopRightContainer>
                </TopRightWrapper>

                <BottomLeftWrapper>
                    <BottomLeftContainer>
                        <SocialMediaIcons>
                            <Instagram>
                                <img src="#" />
                            </Instagram>

                            <Facebook>
                                <img src="#" />
                            </Facebook>

                            <Twitter>
                                <img src="#" />
                            </Twitter>

                            <Github>
                                <img src="#" />
                            </Github>
                        </SocialMediaIcons>
                    </BottomLeftContainer>
                </BottomLeftWrapper>

                <BottomRightWrapper>
                    <BottomRightContainer>
                        <a href="#">hello@moove-it.com</a>
                    </BottomRightContainer>
                </BottomRightWrapper>
            </View>
        )
    }
}

const View = styled.div``
const Container = styled.div``
const TopLeftWrapper = styled.div``
const TopRightWrapper = styled.div``
const BottomLeftWrapper = styled.div``
const BottomRightWrapper = styled.div``
const TopLeftContainer = styled.div``
const TopRightContainer = styled.div``
const BottomLeftContainer = styled.div``
const BottomRightContainer = styled.div``
const Logo = styled.div``
const ThreeCol = styled.div``
const FirstCol = styled.div``
const SecondCol = styled.div``
const ThirdCol = styled.div``
const ThreeRow = styled.div``
const FirstRow = styled.div``
const SecondRow = styled.div``
const ThirdRow = styled.div``
const LocationIcon = styled.div``
const SocialMediaIcons = styled.div``
const Instagram = styled.div``
const Facebook = styled.div``
const Twitter = styled.div``
const Github = styled.div``

export default Footer
