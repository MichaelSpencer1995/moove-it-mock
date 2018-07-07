import React, { Component } from 'react'
import styled from 'styled-components'

class Nav extends Component {
    render() {
        return (
            <View>
                <Container>
                    <Logo>
                        <img src="#" />
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

const View = styled.div``
const Container = styled.div``
const Logo = styled.div``
const Links = styled.ul``
const Link = styled.li``
const ContactInfo = styled.div``
const PhoneNumber = styled.a``
const ContactButton = styled.button``

export default Nav
