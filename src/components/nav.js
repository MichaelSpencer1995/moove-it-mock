import React, { Component } from 'react'
import styled from 'styled-components'
import { ORANGE, TABLET, MOBILE } from '../constants'

let prevOffset = window.pageYOffset
let currentOffset

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            view: "desktop",
            isExpanded: false,
            isScrolled: false,
            isScrollingDownOnMobile: false
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

    handleMenuTapped() {
        this.setState({
            isExpanded: !this.state.isExpanded 
        })
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

    handleScroll() {
        // to avoid it from setting state on every scroll and instead only when it needs to
        const isScrolledAndNotAlreadySet = window.scrollY > 0 && this.state.isScrolled === false
        const isntScrolledButIsSet = window.scrollY === 0 && this.state.isScrolled === true
        
        if(isScrolledAndNotAlreadySet) {
            this.setState({ isScrolled: true }, () => this.checkIfNavNeedsToBeHiddenOrRevealed())
            return
        } else if (isntScrolledButIsSet) {
            this.setState({ isScrolled: false }, () => this.checkIfNavNeedsToBeHiddenOrRevealed())
            return
        }
        this.checkIfNavNeedsToBeHiddenOrRevealed()
    }

    checkIfNavNeedsToBeHiddenOrRevealed() {
        currentOffset = window.pageYOffset

        const shouldBeHiddenAndIsntAlready = prevOffset < currentOffset && !this.state.isScrollingDownOnMobile && currentOffset > 0
        const shouldBeRevealedAndIsntAlready = prevOffset > currentOffset && this.state.isScrollingDownOnMobile

        if(shouldBeHiddenAndIsntAlready) {
            console.log('hidden', prevOffset, currentOffset)
            this.setState({ isScrollingDownOnMobile: true })
        } else if (shouldBeRevealedAndIsntAlready) {
            console.log('revealed', prevOffset, currentOffset)
            this.setState({ isScrollingDownOnMobile: false })
        }

        prevOffset = currentOffset
    }

    render() {
        const { isExpanded, isScrolled, isScrollingDownOnMobile, view } = this.state

        window.addEventListener('scroll', () => this.handleScroll(this.state.view))
        window.addEventListener('resize', () => {
            this.checkIfRerenderNecessary()
        })
 
        return (
            <View className="nav-view" isScrolled={ isScrolled } isScrollingDownOnMobile={ isScrollingDownOnMobile }>
                <Container>
                    <LogoContainer>
                        <Logo>
                            <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" width="30px"><path d="M4.7 3.6c-.2 0-.5.1-.8.2l-3.1 1c-.4.2-.6.6-.6 1.1v24.7c0 .6.1.8.8.8h5.4c.6 0 .8-.2.8-.8v-19c.7-.7 2.5-2.2 4.8-2.2 2.1 0 2.3 2.5 2.3 4.5v16.7c0 .6.1.8.8.8h5.4c.6 0 .8-.2.8-.8v-19c.7-.7 2.5-2.2 4.8-2.2 2.1 0 2.3 2.5 2.3 4.5v16.7c0 .6.1.8.8.8H34c.6 0 .8-.2.8-.8V12.3c0-4.7-1.2-8.6-6.3-8.6-4.4 0-6.8 2.3-8.4 3.7-.7-2.3-3.2-3.7-5.5-3.7-4.3 0-6.7 2.3-8.3 3.7C5.6 5 5.2 3.8 4.7 3.6z"></path></LogoSvg>
                        </Logo>
                    </LogoContainer>

                    <Links isExpanded={ isExpanded } className="drop-down-menu">
                        <Link isScrolled={ isScrolled } className="nav-home-link"><a className='nav-links' href="#">Home</a></Link>
                        <Link isScrolled={ isScrolled }><a className='nav-links' href="#">About us</a></Link>
                        <Link isScrolled={ isScrolled }><a className='nav-links' href="#">Services</a></Link>
                        <Link isScrolled={ isScrolled }><a className='nav-links' href="#">Our Work</a></Link>
                        <Link isScrolled={ isScrolled }><a className='nav-links' href="#">Careers</a></Link>
                        <Link isScrolled={ isScrolled }><a className='nav-links' href="#">Blog</a></Link>
                        <ContactLinkMobile><a className='nav-links' href="#">Contact</a></ContactLinkMobile>
                    </Links>

                    <ContactInfo>
                        <PhoneNumber isExpanded={ isExpanded } className="phone-number">+1 (512) 949-8991</PhoneNumber>
                        <ContactButton isScrolled={ isScrolled }className='nav-contact-button'>Contact</ContactButton>
                    </ContactInfo>

                    <MenuExpander onClick={() => this.handleMenuTapped()}>
                        <Bar1 isExpanded={ isExpanded } className="bars"/>
                        <Bar2 isExpanded={ isExpanded } className="bars"/>
                        <Bar3 isExpanded={ isExpanded } className="bars"/>
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
            transition: all 0.3s ease-in-out;
            width: 100%;
            top: 0;
            position: relative;
            height: 3px;
            background: white;
        }
    }
`

const Bar1 = styled.div`
    transform: ${({ isExpanded }) => isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' };
    top: ${({ isExpanded }) => isExpanded ? '6px !important' : '' };
`
const Bar2 = styled.div`
    opacity: ${({ isExpanded }) => isExpanded ? '0' : '1' };
`
const Bar3 = styled.div`
    transform: ${({ isExpanded }) => isExpanded ? 'rotate(-45deg)' : 'rotate(0deg)' };
    top: ${({ isExpanded }) => isExpanded ? '-6px !important' : '' };
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
    background: ${({ isScrolled }) => isScrolled ? 'white' : 'transparent' };
    transition: all 0.3s ease-in-out;

    @media(max-width: ${ MOBILE }) {
        transform: ${({ isScrollingDownOnMobile }) => isScrollingDownOnMobile ? 'translateY(-2000px)' : 'translateY(0px)' };
        background: ${({ isScrolled }) => isScrolled ? '#3a3a3a' : 'transparent' };
        box-shadow: ${({ isScrolled }) => isScrolled ? '0 0 3px rgba(0, 0, 0, 0.6)' : 'none' };
        height: 83px;
        padding: 20px;
        justify-content: flex-start;
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
    position: relative;
    top: 4px;
    transition: 0.33333s;
    height: ${({ isExpanded }) => isExpanded ? "auto" : "auto" };
    opacity: ${({ isExpanded }) => isExpanded ? "1" : "1" };

    @media(max-width: ${ TABLET }) {
        flex-grow: 1;
    }
    @media(max-width: ${ MOBILE }) {
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 0;
        left: 0;
        height: 0;
        opacity: 0;
        height: ${({ isExpanded }) => isExpanded ? "100vh" : "0" };
        opacity: ${({ isExpanded }) => isExpanded ? "1" : "0" };
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
        color: ${({ isScrolled }) => isScrolled ? '#3a3a3a' : 'white' };
    }
    &:first-child {
        border-color: ${({ isScrolled }) => isScrolled ? '#3a3a3a' : 'white' };
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
        a {
            color: white;
        }
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
        color: ${({ isExpanded }) => isExpanded ? "white": ORANGE };
        font-size: 14px;
        margin-right: 15px;
        bottom: 6px;
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
    color: ${({ isScrolled }) => isScrolled ? '#3a3a3a' : 'white' };
    border-color: ${({ isScrolled }) => isScrolled ? ORANGE : 'white' };
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
