import React, { Component } from 'react'
import styled from 'styled-components'

const ContactUs = () => {
    return (
        <View>
            <ContactUsButton>
                <Arrow/>

                <div>Contact Us and Get Started</div>
            </ContactUsButton>
        </View>
    )
}

const View = styled.div``
const Arrow = styled.div``
const ContactUsButton = styled.button``

export default ContactUs
