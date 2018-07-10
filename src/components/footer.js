import React, { Component } from 'react'
import styled from 'styled-components'
import { ORANGE } from '../constants'

class Footer extends Component {
    render() {
        return (
            <View>
                <Container>
                    <a href="#">
                        <Logo xmlns="http://www.w3.org/2000/svg" height="37" width="181"><path d="M158.637 0c-2.208 0-3.988 1.743-3.988 3.955a3.982 3.982 0 0 0 3.986 3.988c2.165 0 3.94-1.782 3.94-3.988A3.937 3.937 0 0 0 158.636 0zm11.476 5.274c-.452.038-.537.213-.537.7v4.932h-2.882c-.495 0-.748.118-.748.716v3.207c0 .542.073.812.813.812h2.815V32.62c0 1.75 1.476 4.363 4.688 4.363 4.45 0 6.56-1.852 6.56-3.19 0-.213-.04-.438-.147-.602l-1.35-1.887c-.108-.216-.33-.423-.603-.423-1.985 1.403-2.28.18-2.28-1.124V15.643h2.882c.646 0 .616-.175.75-.717l.813-3.304c.136-.542-.095-.716-.75-.716h-3.695V5.974c0-.557-.115-.7-.765-.7h-5.47c-.036 0-.064-.003-.096 0zM4.598 8.414c-.22 0-.49.074-.814.18l-3.11 1.01c-.374.12-.6.515-.6.993l.03 8.367v16.343c0 .6.104.765.75.765h5.37c.648 0 .75-.166.75-.765v-18.98c.705-.653 2.498-2.215 4.77-2.215 2.055 0 2.262 2.482 2.262 4.542v16.653c0 .6.117.765.765.765h5.357c.647 0 .75-.166.75-.765v-18.98c.707-.653 2.48-2.215 4.752-2.215 2.054 0 2.28 2.482 2.28 4.542v16.653c0 .6.104.765.75.765h5.37c.646 0 .764-.166.764-.765v-18.33c0-4.703-1.196-8.562-6.283-8.562-4.43 0-6.765 2.34-8.383 3.745-.653-2.27-3.197-3.745-5.518-3.745-4.278 0-6.667 2.34-8.286 3.745-.6-2.545-1.026-3.745-1.726-3.745zm45.546 0c-7.306 0-11.737 5.587-11.737 14.294 0 8.71 4.43 14.292 11.737 14.292 7.3 0 11.737-5.58 11.737-14.292 0-8.707-4.487-14.293-11.735-14.293zm26.988 0c-7.3 0-11.736 5.587-11.736 14.294C65.396 31.418 69.83 37 77.132 37c7.31 0 11.737-5.58 11.737-14.292 0-8.708-4.48-14.293-11.74-14.293zm48.444 0c-7.245 0-11.476 5.966-11.476 14.57 0 9.948 4.99 14.016 12.128 14.016 4.276 0 9.684-1.8 9.684-3.207 0-.213-.054-.42-.162-.586l-1.35-3.256c-.108-.213-.33-.42-.603-.42-.758 0-2.978 1.773-6.87 1.773-5.083 0-5.958-3.725-5.958-6.755h13.802c1.023 0 1.238-.318 1.238-1.35 0-6.54-1.24-14.782-10.434-14.782zm-29.626.44c-.107 0-.7.067-.862.067l-4.493.473c-.81.112-1.19.17-1.19.602.065.386.22.823.278.928l8.61 24.922c.212.606.272.717 1.027.717h4.427c.76 0 .807-.11 1.025-.716l8.824-24.922c.053-.105.222-.542.276-.928 0-.43-.377-.49-1.188-.602l-3.695-.47c-.164 0-.756-.067-.865-.067-.434 0-.587.5-.748 1.09l-3.68 12.177c-2.342 7.746-1.42 8.336-3.678 0L96.714 9.946c-.16-.542-.328-1.09-.765-1.09zm59.97 2.068c-.647 0-.75.16-.75.717v23.714c0 .558.103.717.75.717h5.354c.65 0 .765-.16.765-.716V11.64c0-.56-.118-.718-.767-.718h-5.355zm-30.344 2.54c3.736 0 3.89 3.835 3.89 6.056h-8.497c.17-1.516.387-6.056 4.605-6.056zm-75.432.374c3.726 0 4.427 3.836 4.427 8.872 0 5.082-.644 8.87-4.425 8.87-3.79 0-4.428-3.842-4.428-8.87 0-5.036.69-8.872 4.428-8.872zm26.988 0c3.736 0 4.428 3.836 4.428 8.872 0 5.082-.64 8.87-4.428 8.87-3.785 0-4.426-3.842-4.426-8.87 0-5.036.697-8.872 4.426-8.872zm63.176 6.74c-.206.042-.278.212-.278.57V25.1c0 .48.11.57.522.57h9.75c.412 0 .538-.09.538-.57v-3.955c0-.357-.087-.526-.293-.57h-10.24z"></path></Logo>
                    </a>
                    
                    <Top>
                        <TopLeftContainer>
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

                        <TopRightContainer>
                            <ThreeRow>
                                <FirstRow>
                                    <LocationIcon>
                                        <img src="/assets/places/austin.svg" />
                                    </LocationIcon>

                                    <p>	
                                        Austin<br />
                                        701 Brazos St Austin, TX, USA 78701<br />
                                        +1 (512) 949-8991
                                    </p>
                                </FirstRow>

                                <SecondRow>
                                    <LocationIcon2>
                                        <img src="/assets/places/sanfran.svg" />
                                    </LocationIcon2>

                                    <p>	
                                        San Francisco<br />
                                        2 Embarcadero Center 8th Floor<br />
                                        San Francisco, CA, USA 94111<br />
                                        +1 (415) 449-8778
                                    </p>
                                </SecondRow>

                                <ThirdRow>
                                    <LocationIcon>
                                        <img src="/assets/places/montevideo.svg" />
                                    </LocationIcon>

                                    <p>	
                                        Montevideo<br />
                                        Bulevar Artigas 1112 Montevideo 11300, Uruguay<br />
                                        +598 2706-60-71
                                    </p>
                                </ThirdRow>
                            </ThreeRow>
                        </TopRightContainer>
                    </Top>

                    <Bottom>
                        <BottomLeftContainer>
                            <SocialMediaIcons>
                                <Instagram href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 18" height="18"><path d="M30.07-10.9v-.076a.92.92 0 0 1-.05.077h.05z"></path><path d="M3.977 17.558H.12V5.95h3.857zM2.047 4.364h-.024C.728 4.364-.11 3.474-.11 2.36-.11 1.22.755.353 2.075.353s2.132.866 2.158 2.005c0 1.113-.84 2.004-2.184 2.004zM17.89 17.558h-3.857v-6.21c0-1.56-.558-2.626-1.954-2.626-1.067 0-1.7.718-1.98 1.412-.103.247-.128.593-.128.94v6.484H6.114s.05-10.52 0-11.608H9.97v1.643c.514-.79 1.43-1.917 3.48-1.917 2.537 0 4.44 1.66 4.44 5.225v6.66z"></path></svg>
                                </Instagram>

                                <Facebook href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"><path d="M13.182 5.828h-2.848V3.96c0-.7.465-.865.792-.865h2.01V.01L10.368 0C7.295 0 6.595 2.3 6.595 3.773v2.055H4.818v3.18h1.777V18h3.74V9.007h2.52l.327-3.18z"></path></svg>
                                </Facebook>

                                <Twitter href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 18" height="18"><path d="M18 3.418a7.332 7.332 0 0 1-2.12.58 3.7 3.7 0 0 0 1.623-2.042 7.413 7.413 0 0 1-2.345.896 3.693 3.693 0 0 0-2.696-1.166A3.692 3.692 0 0 0 8.865 6.22a10.485 10.485 0 0 1-7.612-3.86 3.692 3.692 0 0 0 1.143 4.93A3.687 3.687 0 0 1 .723 6.83v.047c0 1.79 1.273 3.28 2.963 3.62a3.673 3.673 0 0 1-1.668.064 3.697 3.697 0 0 0 3.45 2.565 7.416 7.416 0 0 1-4.587 1.58c-.296 0-.59-.017-.88-.05a10.46 10.46 0 0 0 5.66 1.658c6.795 0 10.51-5.627 10.51-10.507 0-.16-.004-.32-.01-.478A7.526 7.526 0 0 0 18 3.416z"></path></svg>
                                </Twitter>

                                <Github href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18"><path d="M12.11 10.28c-.702 0-1.272.79-1.272 1.76 0 .974.57 1.762 1.272 1.762.702 0 1.27-.788 1.27-1.76.002-.973-.568-1.76-1.27-1.76zm4.428-4.58c.145-.358.152-2.387-.62-4.33 0 0-1.772.194-4.453 2.034C10.903 3.248 9.95 3.17 9 3.17s-1.902.078-2.465.233C3.855 1.563 2.083 1.37 2.083 1.37c-.773 1.943-.766 3.972-.62 4.33C.553 6.685 0 7.87 0 9.486c0 7.03 5.832 7.143 7.304 7.143h3.392c1.472 0 7.304-.115 7.304-7.145 0-1.617-.554-2.8-1.462-3.786zm-7.51 10.064h-.055c-3.69 0-6.564-.44-6.564-4.026 0-.86.302-1.656 1.022-2.318 1.2-1.103 3.233-.52 5.54-.52h.055c2.306 0 4.34-.582 5.54.52.72.662 1.023 1.46 1.023 2.318 0 3.586-2.873 4.026-6.562 4.026zM5.89 10.28c-.702 0-1.27.79-1.27 1.76 0 .974.568 1.762 1.27 1.762.703 0 1.272-.788 1.272-1.76 0-.973-.57-1.76-1.272-1.76z"></path></svg>
                                </Github>
                            </SocialMediaIcons>
                        </BottomLeftContainer>

                        <BottomRightContainer>
                            <a href="#">hello@moove-it.com</a>
                        </BottomRightContainer>
                    </Bottom>
                </Container>
            </View>
        )
    }
}

const View = styled.div`
    width: 100%;
    background: linear-gradient(to right, #1d1d1d 50%, ${ ORANGE } 50%);
    display: flex;
    padding: 60px 0px;
    padding-bottom: 54px;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    width: 86%;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
`
const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const TopLeftContainer = styled.div`
    flex-basis: 41%;
`
const TopRightContainer = styled.div`
    flex-basis: 42%;
`
const BottomLeftContainer = styled.div`
    flex-basis: 42%;
`
const BottomRightContainer = styled.div`
    flex-basis: 42%;
    a {
        margin-left: 72px;
        color: white;
        font-size: 18px;
        font-weight: 300;
        &:hover {
            text-decoration: underline;
        }
    }
`
const Logo = styled.svg`
    transform: scale(0.66);
    transform-origin: 0 100%;
    fill: #737373;
    padding-bottom: 40px;
`
const ThreeCol = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h4 {
            color: #b9b9b9;
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 8px;
        }
        a {
            margin-bottom: 10px;
            color: #737373;
            text-decoration: none;
            font-weight: 300;
            font-size: 14px;
            transition: color 0.2s ease;
            &:hover {
                color: #b9b9b9;
            }
        }
    }
`
const FirstCol = styled.div``
const SecondCol = styled.div`
    margin-left: 55px;
`
const ThirdCol = styled.div``
const ThreeRow = styled.div`
    div {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
        p {
            color: white;
            font-size: 14px;
            font-weight: 300;
            line-height: 20px;
        }
    }
`
const FirstRow = styled.div``
const SecondRow = styled.div`
    margin-bottom: 20px !important;
`
const ThirdRow = styled.div``
const LocationIcon = styled.div`
    width: 50px;
    padding-right: 20px;
    img {
        width: 100%;
    }
`
const LocationIcon2 = styled(LocationIcon)`
    padding-top: 10px;
`

const SocialMediaIcons = styled.div`
    display: flex;
    padding-bottom: 20px;

    a {
    }
    
    a > svg {
        transition: background 0.2s ease, fill 0.2s ease;
        padding: 11.5px;
        fill: #737373;
        margin-right: 2px;
        &:hover {
            background: white;
        }
    }
`
const Instagram = styled.a`
    svg {
        &:hover {
            fill: #006fb6;
        }
    }    
`
const Facebook = styled.a`
    svg {
        &:hover {
            fill: #434899;
        }
    }    
`
const Twitter = styled.a`
    svg {
        &:hover {
            fill: #00c0fc;
        }
    }    
`
const Github = styled.a``

export default Footer
