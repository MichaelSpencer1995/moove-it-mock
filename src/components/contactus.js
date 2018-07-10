import React, { Component } from 'react'
import styled from 'styled-components'

const ContactUs = () => {
    return (
        <View>
            <ContactUsButton>
                <Arrow>
                    <img src="/assets/arrow-right.svg" />
                </Arrow>

                <div>Contact Us and Get Started</div>
            </ContactUsButton>
        </View>
    )
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
    padding: 17px 21px;
    margin-top: 94px;
    margin-bottom: 94px;
    background: #ff8d40;
    color: white;
    font-size: 20px;
    font-weight: 300;
    border-radius: 999px;
    border: none;
`

export default ContactUs
