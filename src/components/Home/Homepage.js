import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Homepage.css';
import Home from "../Home/Home"

const Homepage = ()=>{
      const homeProps = {
            banner : {
                  imgSrc : "../images/banner.jpg"
            },
            sections :[
                  {
                        heading : "Step1",
                        content : "lorem ipsum"
                  },
                  {
                        heading : "Step2",
                        content : "lorem ipsum"
                  }
            ]
      }
      const footerProps = {
            foot : "Prop is foot"
      }
      return(
            <>
            <div className='navbar'>
            <Navbar />
            </div>
            <div className='home'>
                  <Home homeProps={homeProps}/>
            </div>
            <div className='footer'>
                  <Footer footerProps = {footerProps}/>
            </div>
            </>
      )
}
export default Homepage;