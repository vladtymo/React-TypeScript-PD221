import { Carousel } from 'antd'
import React from 'react'

const Home: React.FC = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome to PD221 Shop{":)"}</h1>
            <Carousel autoplay>
                <div>
                    <img alt='Shop' style={imageStyle} src='https://cdn.pixabay.com/photo/2014/10/22/18/24/central-embassy-498554_640.jpg' />
                </div>
                <div>
                    <img alt='Shop' style={imageStyle} src='https://i.pinimg.com/originals/76/f6/a1/76f6a1c1bf175b83466e6abde17164b8.png' />
                </div>
                <div>
                    <img alt='Shop' style={imageStyle} src='https://cdn.pixabay.com/photo/2014/10/22/18/24/central-embassy-498560_640.jpg' />
                </div>
            </Carousel>

        </div>
    )
}
export default Home;

const imageStyle: React.CSSProperties = {
    objectFit: "cover",
    width: "100%",
    height: "400px"
};