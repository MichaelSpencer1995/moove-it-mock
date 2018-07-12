import React, { Component } from 'react'
import styled from 'styled-components'
import { ORANGE } from '../constants'

class ContactUs extends Component {

    animateButton() {
        console.log('animation')

        const contactButton = document.getElementById('contact-button')
        const spanTag = document.getElementsByClassName('span-tag')[0]
        const arrow = document.getElementsByClassName('arrow')[0]

        spanTag.style.display = 'none'
        spanTag.style.opacity = '0'
        arrow.style.transform = 'translateX(140px)'
        contactButton.style.background = '#ff9c5a'

        setTimeout(() => {
            spanTag.style.display = 'block'
            setTimeout(() => {
                spanTag.style.opacity = '1'
                arrow.style.transform = 'translateX(0px)'
            }, 250);
        }, 50);
    }

    render() {
        return (
            <View>
                <ContactUsButton>
                    <Arrow>
                        <img src="/assets/arrow-right.svg" />
                    </Arrow>
    
                    <span>Contact Us and Get Started</span>
                </ContactUsButton>
            </View>
        )
    }
}

const View = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Arrow = styled.div`
    width: 4px;
    padding-right: 24px;
    position: relative;
    bottom: 1px;
    img {
        width: 100%;
    }
`
const ContactUsButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 22px;
    width: 310px;
    margin-top: 94px;
    margin-bottom: 94px;
    background: ${ ORANGE };
    color: white;
    font-size: 20px;
    font-weight: 300;
    border-radius: 999px;
    border: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        background #ff9c5a;
    }
`

export default ContactUs
