import React from 'react'
import './Home.css'
import Hero from '../../assets/hero_banner.jpg'
import Title from '../../assets/hero_title.png'
import Play from '../../assets/play_icon.png'
import Info from '../../assets/info_icon.png'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={Hero} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={Title} alt="" className='caption-img' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero rem error? Quibusdam officiis at quod quo aliquid!</p>
                    <div className="hero-btns">
                        <button className='btn'><img src={Play} alt="" />Play</button>
                        <button className='btn dark-btn'><img src={Info} alt="" />More-info</button>
                    </div>
                    <TitleCards/>
                </div>
            </div>
            <div className="more-cards">
            <TitleCards title={"Blockbuster Movie"} category={"top_rated"}/>
            <TitleCards title={"Only On Netflix"} category={"popular"}/>
            <TitleCards title={"Upcoming"} category={"upcoming"}/>
            <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home