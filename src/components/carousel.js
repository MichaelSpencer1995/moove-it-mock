import React from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
 
class Carousel extends React.Component {
    render() {
        return (
            <MyCarouselProvider
                lockOnWindowScroll
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={3}
            >        
                <Slider>
                    <Slide index={0}>
                        <ImgContainer>
                            <Img1 src="/assets/carousel/carousel-img-1.jpg" />
                        </ImgContainer>
                    </Slide>

                    <Slide index={1}>
                        <ImgContainer>
                            <Img2 src="/assets/carousel/carousel-img-2.jpg" />
                        </ImgContainer>
                    </Slide>
                    
                    <Slide index={2}>
                        <ImgContainer>
                            <Img3 src="/assets/carousel/carousel-img-3.jpg" />
                        </ImgContainer>
                    </Slide>
                </Slider>

                <ButtonsContainer>
                    <MyButtonBack>
                        <ArrowLeft>
                            <img src="/assets/arrow-left.svg" />
                        </ArrowLeft>
                    </MyButtonBack>

                    <MyButtonNext>
                        <ArrowRight>
                            <img src="/assets/arrow-right.svg" />
                        </ArrowRight>
                    </MyButtonNext>
                </ButtonsContainer>
            </MyCarouselProvider>
        )
    }
}

const MyCarouselProvider = styled(CarouselProvider)`
    width: 100%;
    background: #3a3a3a;
`
const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`

const Img1 = styled.img`
    width: 150%;
    position: relative;
    right: 121px;
`

const Img2 = styled(Img1)`
`
const Img3 = styled(Img1)`
    right: 162px;
`
const ButtonsContainer = styled.div`
    width: 100px;
    display: flex;
    float: right;
    position: relative;
    bottom: 40px;
`

const MyButtonBack = styled(ButtonBack)`
    height: 50px;
    width: 50px;
    background: rgba(255,141,64,0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    transition: background .5s ease;
    &:hover {
        background: #ff8d40;
    }
`
const MyButtonNext = styled(ButtonNext)`
    height: 50px;
    width: 50px;
    background: rgba(255,141,64,0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    transition: background .5s ease;
    &:hover {
        background: #ff8d40;
    }
`
const ArrowLeft = styled.div`
    width: 10px;
    img {
        width: 100%;
    }
`
const ArrowRight = styled.div`
    width: 10px;
    img {
        width: 100%;
    }
`

export default Carousel