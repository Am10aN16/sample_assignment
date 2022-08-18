import React from 'react'
import Dog from "../assets/dog.png"
import Cat from "../assets/cat.png"
import BlackGrass from "../assets/black.svg"
import GreenGrass from "../assets/green.svg"
import Box from "../assets/treasure.png"
import ComingSoon from "../assets/comingsoon.png"


const Lower = () => {
  return (
    <>
       <div className="lower__body">
        <div className="left__body">
                <div className='img__container swing'>
                    <img src={Dog} alt="" style={{width:450 , height: 450 ,position:"relative", top:30}} />
                   
                </div>
                
                <div className="back__container flex_container">
                    <img src={BlackGrass} alt="" />
                </div>
                <div className="btns">
                <button className='body__btn' >Buy Now</button>
                    <button className='body__btn'>Chart</button>
                    <button className='body__btn'>Contract</button>
                </div>

                <p style={{textAlign: "center" , textTransform:"uppercase", fontWeight:"600", color:"#ddd"}}>Tokenomics</p>
               
                <div className="treasure" style={{display:"flex", flexDirection:"row" , "alignItems":"center"}}>
               
                 <div className="data" style={{display:"flex", flexDirection:"column"  , "alignItems":"center"}}> 
                 <img src={Box} alt=""  style={{height:250 , width:250 }}/>
                 <p style={{color:"red", fontWeight:600}}>10% <span style={{color:"#FFC92E" , textTransform:"uppercase" , fontWeight:600}}>team lock</span></p>
                 </div> 


                   <div className="data" style={{display:"flex", flexDirection:"column"  , "alignItems":"center"}}>
                 <img src={Box} alt=""  style={{height:250 , width:250 }}/>
                 <p style={{color:"red", fontWeight:600}}>20% <span style={{color:"#FFC92E" , textTransform:"uppercase" , fontWeight:600}}>staking rewards</span></p>
                 </div> 
                </div>
                <div className="treasure" style={{display:"flex", flexDirection:"row" , "alignItems":"center"}}>
                   <div className="data" style={{display:"flex", flexDirection:"column"  , "alignItems":"center"}}>
                 <img src={Box} alt=""  style={{height:250 , width:250 }}/>
                 <p style={{color:"red", fontWeight:600}}>30% <span style={{color:"#FFC92E" , textTransform:"uppercase" , fontWeight:600}}>liquidity</span></p>
                 </div> 
                   <div className="data" style={{display:"flex", flexDirection:"column"  , "alignItems":"center"}}>
                 <img src={Box} alt=""  style={{height:250 , width:250 }}/>
                 <p style={{color:"red", fontWeight:600}}>40% <span style={{color:"#FFC92E" , textTransform:"uppercase" , fontWeight:600}}>fair launch</span></p>
                 </div> 
                </div>
                <h2 style={{color:"white" , textAlign:"center"}}>TAX</h2>
              <div className="tax__container">
                <div className="left_tax">
                  <h3>3% Buy Tax</h3>
                  <h3>2% RESERVE</h3>
                  <h3>1% BURN</h3>
                </div>
                <p id='line'></p>
                <div className="right_tax">
                <h3>3% Buy Tax</h3>
                  <h3>2% RESERVE</h3>
                  <h3>1% BURN</h3>
                </div>
                
              </div>
        </div>
        
        <div className="right__body">
        <div className='img__container swing'>
        <img src={Cat} alt=""  style={{width:450 , height: 450 ,position:"relative" , top:30 }} />
        </div>
        <div className="green__container flex_container">
        <img src={GreenGrass} alt=""  />
        </div>
        <div className="whole"> <div className="soon">
          <img src={ComingSoon} alt="" />
        </div>

        <div className="content">
          <p>This is a strict Whitelist Presale Allocations for the Kuppy Clans 
            Community,
           to whitelist for this Pre-Sale, we encourage you to stake 100,000 Canine Master
            $CM for 90 days. 10% of raised BUSDs would be used to Buy Back $CM.</p>
        </div></div>
       
        </div>
    </div>

    </>
  )
}

export default Lower