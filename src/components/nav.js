import React, { Component } from 'react'
import styled from 'styled-components'

class Nav extends Component {
    render() {
        window.addEventListener('scroll', handleScroll)
        
        function handleScroll() {
            toggleNavColors();
        }
        
        function toggleNavColors() {
            const navView = document.getElementsByClassName('nav-view')[0]
            const navLinks = document.getElementsByClassName('nav-links')
            const navContactButton = document.getElementsByClassName('nav-contact-button')[0]
            
            if(window.scrollY > 0) {
                navView.style.background = 'white'
                navContactButton.style.borderColor = '#ff8d40'
                navContactButton.style.color = 'rgb(58, 58, 58)'
                for(let i = 0; i < navLinks.length; i++) {
                    navLinks[i].style.color = 'black'
                }
            } else {
                navView.style.background = 'transparent'
                navContactButton.style.borderColor = 'white'
                navContactButton.style.color = 'white'
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

                    <Links>
                        <Link><a className='nav-links' href="#">Home</a></Link>
                        <Link><a className='nav-links' href="#">About Us</a></Link>
                        <Link><a className='nav-links' href="#">Services</a></Link>
                        <Link><a className='nav-links' href="#">Our Work</a></Link>
                        <Link><a className='nav-links' href="#">Careers</a></Link>
                        <Link><a className='nav-links' href="#">Blog</a></Link>
                    </Links>

                    <ContactInfo>
                        <PhoneNumber>+1 (512) 949-8991</PhoneNumber>
                        <ContactButton className='nav-contact-button'>Contact</ContactButton>
                    </ContactInfo>
                </Container>
            </View>
        )
    }
}

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
const LogoContainer = styled.div``
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff8d40;
    border-radius: 5px;
    height: 50px;
    width: 50px;
`
const LogoSvg = styled.svg`
    fill: white;
`
const Links = styled.ul`
    display: flex;
    text-align: center;
    list-style: none;
    align-self: center;
    color: black;
`
const Link = styled.li`
    margin-right: 20px;
    
    a {
        font-size: 14px;
        font-weight: 300;
        text-decoration: none;
        color: white;
    }
`
const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const PhoneNumber = styled.a`
    color: #ff8d40;
    font-size: 20px;
    font-weight: 300;
`
const ContactButton = styled.button`
    margin-left: 15px;
    margin-right: 15px;
    border: #fff 1px solid;
    border-radius: 999px;
    padding: 10px 20px;
    color: white;
    background: transparent;
    font-size: 14px;
    font-weight: 300;
`

export default Nav
