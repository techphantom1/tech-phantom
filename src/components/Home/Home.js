import React from 'react'

const Home = (props)=>{
      const { banner , sections } = props.homeProps

      function paintSection(section){
            const { heading , content} = section
            return(
                  <>
                  <h4>{heading}</h4>
                  <p>{content}</p>
                  </>
            )
      }

      return (
            <>
            <div className='banner'>
                  <img src={banner.imgSrc} alt=""/>
            </div>
            {
                  sections.map((section)=>{
                        return paintSection(section)
                  })
            }
            </>
      )

}
export default Home