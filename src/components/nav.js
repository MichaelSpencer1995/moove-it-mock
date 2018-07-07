import React, { Component } from 'react'
import styled from 'styled-components'

class Nav extends Component {
    render() {
        return (
            <View>
                <Container>
                    <Logo>
                        <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" class="u-fill--white u-position--absolute u-is-centered--total" width="30px"><path d="M4.7 3.6c-.2 0-.5.1-.8.2l-3.1 1c-.4.2-.6.6-.6 1.1v24.7c0 .6.1.8.8.8h5.4c.6 0 .8-.2.8-.8v-19c.7-.7 2.5-2.2 4.8-2.2 2.1 0 2.3 2.5 2.3 4.5v16.7c0 .6.1.8.8.8h5.4c.6 0 .8-.2.8-.8v-19c.7-.7 2.5-2.2 4.8-2.2 2.1 0 2.3 2.5 2.3 4.5v16.7c0 .6.1.8.8.8H34c.6 0 .8-.2.8-.8V12.3c0-4.7-1.2-8.6-6.3-8.6-4.4 0-6.8 2.3-8.4 3.7-.7-2.3-3.2-3.7-5.5-3.7-4.3 0-6.7 2.3-8.3 3.7C5.6 5 5.2 3.8 4.7 3.6z"></path></LogoSvg>
                    </Logo>

                    <Links>
                        <Link><a href="#">Home</a></Link>
                        <Link><a href="#">About Us</a></Link>
                        <Link><a href="#">Services</a></Link>
                        <Link><a href="#">Our Work</a></Link>
                        <Link><a href="#">Careers</a></Link>
                        <Link><a href="#">Blog</a></Link>
                    </Links>

                    <ContactInfo>
                        <PhoneNumber>+1 (512) 949-8991</PhoneNumber>
                        <ContactButton>Contact</ContactButton>
                    </ContactInfo>
                </Container>
            </View>
        )
    }
}

const View = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    background: transparent;
    background: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff8d40;
    height: 50px;
    width: 50px;
    border-radius: 5px;
`
const LogoSvg = styled.svg`
    fill: white;
`
const Links = styled.ul`
    display: flex;
    text-align: center;
    list-style: none;
    align-self: center;
`
const Link = styled.li`
    margin-right: 20px;
    
    a {
        font-size: 14px;
        font-weight: 100;
        text-decoration: none;
        color: white;
    }
`
const ContactInfo = styled.div``
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
    font-size: 14px;
    font-weight: 100;
`

export default Nav
