import React, { Component } from 'react'
import styled from 'styled-components'

const TechnologiesWeMaster = () => {
    return (
        <View>
            <Container>
                <LineAndCircle />

                <h3>Technologies we master</h3>

                <TwoCol>
                    <Col>
                        <h2>
                            Web Development and Enterprise Applications
                        </h2>

                        <WebDevTechs>
                            <img src="#"/ >
                        </WebDevTechs>
                    </Col>
                    
                    <Col>
                        <h2>
                            Web Development and Enterprise Applications
                        </h2>

                        <WebDevTechs>
                            <img src="#"/ >
                        </WebDevTechs>
                    </Col>
                </TwoCol>
            </Container>
        </View>
    )
}

const View = styled.div``
const Container = styled.div``
const LineAndCircle = styled.div``
const TwoCol = styled.div``
const Col = styled.div``
const WebDevTechs = styled.div``

export default TechnologiesWeMaster
