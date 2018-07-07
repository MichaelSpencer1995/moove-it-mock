import React, { Component } from 'react'
import styled from 'styled-components'

class WhatWeDo extends Component {
    render() {
        return (
            <View>
                <Container>
                    <LineAndCircle />

                    <h3>What we do</h3>

                    <ThreeCol>
                        <Col>
                            <h2>Build the right software products</h2>

                            <p>
                                We contribute to the strategic growth of your business by
                                helping your organization embrace innovation, implement
                                disruptive ideas and add value to existing products.
                            </p>
                        </Col>

                        <Col>
                            <h2>Reduced time to market</h2>

                            <p>
                                We combine effective communication and high technical capabilities
                                to keep our clients' goals on time and within budget.
                            </p>
                        </Col>

                        <Col>
                            <h2>Scalable high-quality</h2>

                            <p>
                                We focus on technologies that, along with a build-measure-learn
                                process, allow us to deliver high-performing, intelligible
                                code that is less error-prone.
                            </p>
                        </Col>
                    </ThreeCol>
                </Container>
            </View>
        )
    }
}

const View = styled.div``
const Container = styled.div``
const LineAndCircle = styled.div``
const ThreeCol = styled.div``
const Col = styled.div``

export default WhatWeDo
