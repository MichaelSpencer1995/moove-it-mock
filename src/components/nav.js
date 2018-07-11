import React, { Component } from 'react'
import styled from 'styled-components'
import { ORANGE, TABLET, MOBILE } from '../constants'
let isMobile

class Nav extends Component {
    componentWillMount() {
        if(window.innerWidth < 776) {
            isMobile = true 
        } else {
            isMobile = false
        }
    }

    handleMenuTapped() {
        this.animateMenuIcon()
        this.toggleMenuOpenClosed()
    }

    animateMenuIcon() {
        console.log('menu')
    }

    toggleMenuOpenClosed() {
        const dropDownMenuElement = document.getElementsByClassName('drop-down-menu')[0]
        const phoneNumberElement = document.getElementsByClassName('phone-number')[0]
        const alreadyExpanded = dropDownMenuElement.style.opacity === '1'
        
        if(alreadyExpanded) {
            dropDownMenuElement.style.opacity = '0'
            dropDownMenuElement.style.height = '0'
            phoneNumberElement.style.color = ORANGE
        } else {
            dropDownMenuElement.style.opacity = '1'
            dropDownMenuElement.style.height = '100vh'
            phoneNumberElement.style.color = 'white'
        }
    }

    render() {
        window.addEventListener('scroll', handleScroll)
        
        function handleScroll() {
            toggleNavColors()
        }
        
        function toggleNavColors() {
            const navView = document.getElementsByClassName('nav-view')[0]
            const navLinks = document.getElementsByClassName('nav-links')
            const navHomeLink = document.getElementsByClassName('nav-home-link')[0]
            const navContactButton = document.getElementsByClassName('nav-contact-button')[0]
            let navColor

            if(window.innerWidth < 776) {
                navColor = "#3a3a3a"
            } else {
                navColor = "white"
            }
            

            if(window.scrollY > 0) {
                navView.style.background = navColor
                navContactButton.style.borderColor = ORANGE
                navContactButton.style.color = 'rgb(58, 58, 58)'
                navHomeLink.style.borderColor = '#3a3a3a'
                if(isMobile) {
                    navView.style.boxShadow = '0 0 3px rgba(0,0,0,0.6)'
                    return
                }
                for(let i = 0; i < navLinks.length; i++) {
                    navLinks[i].style.color = '#3a3a3a'
                }
            } else {
                navView.style.background = 'transparent'
                navContactButton.style.borderColor = 'white'
                navContactButton.style.color = 'white'
                navHomeLink.style.borderColor = 'white'
                if(isMobile) {
                    navView.style.boxShadow = 'none'
                    return
                }
                for(let i = 0; i < navLinks.length; i++) {
                    navLinks[i].style.color = 'white'
                }
            }
        }

        return (
            <View className="nav-view">
                <Container>
                    <LogoContainer>
                        <Logo>
                            <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" width="30px"><path d="M4.7 3.6c-.2 0-.5.1-.8.2l-3.1 1c-.4.2-.6.6-.6 1.1v24.7c0 .6.1.8.8.8h5.4c.6 0 .8-.2.8-.8v-19c.7-.7 2.5-2.2 4.8-2.2 2.1 0 2.3 2.5 2.3 4.5v16.7c0 .6.1.8.8.8h5.4c.6 0 .8-.2.8-.8v-19c.7-.7 2.5-2.2 4.8-2.2 2.1 0 2.3 2.5 2.3 4.5v16.7c0 .6.1.8.8.8H34c.6 0 .8-.2.8-.8V12.3c0-4.7-1.2-8.6-6.3-8.6-4.4 0-6.8 2.3-8.4 3.7-.7-2.3-3.2-3.7-5.5-3.7-4.3 0-6.7 2.3-8.3 3.7C5.6 5 5.2 3.8 4.7 3.6z"></path></LogoSvg>
                        </Logo>
                    </LogoContainer>

                    <Links className="drop-down-menu">
                        <Link className="nav-home-link"><a className='nav-links' href="#">Home</a></Link>
                        <Link><a className='nav-links' href="#">About us</a></Link>
                        <Link><a className='nav-links' href="#">Services</a></Link>
                        <Link><a className='nav-links' href="#">Our Work</a></Link>
                        <Link><a className='nav-links' href="#">Careers</a></Link>
                        <Link><a className='nav-links' href="#">Blog</a></Link>
                        <ContactLinkMobile><a className='nav-links' href="#">Contact</a></ContactLinkMobile>
                    </Links>

                    <ContactInfo>
                        <PhoneNumber className="phone-number">+1 (512) 949-8991</PhoneNumber>
                        <ContactButton className='nav-contact-button'>Contact</ContactButton>
                    </ContactInfo>

                    <MenuExpander onClick={() => this.handleMenuTapped()}>
                        <div />
                        <div />
                        <div />
                    </MenuExpander>
                </Container>
            </View>
        )
    }
}

const MenuExpander = styled.div`
    width: 30px;
    height: 29px;
    box-sizing: border-box;
    padding: 7px 0;
    display: none;
    flex-basis: auto !important;
    z-index: 1;
    &:hover {
        cursor: pointer;
    }
    @media(max-width: ${ MOBILE }) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
            width: 100%;
            height: 3px;
            background: white;
        }
    }
`

const View = styled.div`
    z-index: 1;
    position: fixed;
    width: 100%;
    height: 70px;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    transition: 0.33333s background-color;
    @media(max-width: ${ MOBILE }) {
        padding: 20px;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > * {
        flex-basis: 33.33333%;
    }
`
const LogoContainer = styled.div`
    z-index: 1;
    @media(max-width: ${ TABLET }) {
        flex-basis: auto;
    }
`
const Logo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ ORANGE };
    border-radius: 5px;
    height: 50px;
    width: 50px;
    margin-right: 5px;
    @media(max-width: ${ MOBILE }) {
        background: transparent;
        height: auto;
        width: auto;
    }
`
const LogoSvg = styled.svg`
    fill: white;
    @media(max-width: ${ MOBILE }) {
        transform: scale(1.17);
        transform-origin: 0px 0px;
    }
`
const Links = styled.ul`
    display: flex;
    text-align: center;
    list-style: none;
    align-self: center;
    color: black;
    position: relative;
    top: 4px;
    transition: 0.33333s;
    @media(max-width: ${ TABLET }) {
        flex-grow: 1;
    }
    @media(max-width: ${ MOBILE }) {
        position: absolute;
        overflow: hidden;
        height: 0;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        flex-direction: column;
        background: rgba(255,141,64,.9);
    }
`
const Link = styled.li`
    margin: 0 14px;
    border-bottom: transparent 1px solid;
    border-radius: 1px;
    padding: 0 1px;
    padding-bottom: 10px;
    transition: border-bottom-color 0.2s ease;
    white-space: nowrap;
    a {
        font-size: 14px;
        font-weight: 300;
        text-decoration: none;
        color: white;
    }
    &:first-child {
        border-color: white;
    }
    &:hover {
        cursor: pointer;
        border-bottom-color: #b9b9b9;
    }
    @media(max-width: ${ TABLET }) {
        margin: 0 10px;
        padding: 0;
        padding-bottom: 10px;
    }
    @media(max-width: ${ MOBILE }) {
        border: none;
        position: relative;
        top: 85px;
        padding-bottom: 11px;
        &:hover {
            border: none;
        }
    }
`
const ContactLinkMobile = styled(Link)`
    display: none;
    border: white 1px solid;
    border-radius: 999px;
    padding: 7px 0;
    margin: 0;
    @media(max-width: ${ MOBILE }) {
        display: block;
        top: 80px;
        &:hover {
            border: white 1px solid;
            background: #111a502b;
        }
    }
`
const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    top: 2px;
    right: 9px;
    z-index: 1;
    @media(max-width: ${ TABLET }) {
        right: 5px;
        flex-basis: auto;
    }
    @media(max-width: ${ MOBILE }) {
        flex-grow: 1;
    }
`
const PhoneNumber = styled.a`
    color: ${ ORANGE };
    font-size: 19.9999px;
    font-weight: 300;
    position: relative;
    bottom: 4px;
    &:hover {
        text-decoration: underline;
    }
    @media(max-width: ${ MOBILE }) {
        font-size: 14px;
        margin-right: 15px;
        bottom: 5px;
    }
`
const ContactButton = styled.button`
    margin-left: 13px;
    margin-right: 15px;
    border: #fff 1px solid;
    border-radius: 999px;
    padding: 12px 20px;
    color: white;
    background: transparent;
    font-size: 14px;
    font-weight: 300;
    transition: border-bottom-color 0.2s ease;
    &:hover {
        border-color: ${ ORANGE } !important;
        color: white !important;
    }
    @media(max-width: ${ TABLET }) {
        margin-left: 18px;
    }
    @media(max-width: ${ MOBILE }) {
        display: none;
    }
`

export default Nav
