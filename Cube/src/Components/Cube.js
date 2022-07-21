import React from 'react'
import "./Cube.css"
import ish from '../assets/ish.JPG'
import isho from '../assets/isho.JPG'
import isho1 from '../assets/isho1.JPG'
function Cube() {
  return (
    <>
    <div className='container' style={{marginLeft:"-345px"}}>
      <div className='box'>
        <div className='card' id="front"></div>
        <div className='card' id="back"></div>
        <div className='card' id="left"></div>
        <div className='card' id="right"></div>
        <div className='card' id="top"> 
        <img src= {ish} style={{ marginTop:"44px", marginLeft:'109px'}}/>
        </div>
        <div className='card' id="bottom"></div>
      </div>
    </div>


    <div className='container' style={{marginLeft:"300px"}}>
      <div className='box'>
        <div className='card' id="front">
        <img src= {ish} style={{ marginTop:"-74px", marginLeft:'-109px'}}/>
        </div>
        <div className='card' id="back"></div>
        <div className='card' id="left"></div>
        <div className='card' id="right"></div>
        <div className='card' id="top"> 
        </div>
        <div className='card' id="bottom"></div>
      </div>
    </div>


    <div className='container' style={{marginTop:"545px", marginLeft:'-345px'}}>
      <div className='box'>
        <div className='card' id="front"> 
        <img src= {ish} style={{ marginTop:"34px", marginLeft:'-109px'}}/>
        </div>
        <div className='card' id="back"></div>
        <div className='card' id="left"></div>
        <div className='card' id="right"> 
        
        </div>
        <div className='card' id="top"> </div>
        <div className='card' id="bottom"></div>
      </div>
    </div>


    <div className='container' style={{ marginTop:"545px", marginLeft:"300px"}}>
      <div className='box'>
        <div className='card' id="front"></div>
        <div className='card' id="back"></div>
        <div className='card' id="left"></div>
        <div className='card' id="right"> 
        <img src={isho1}  style={{width:"20px", height:'40px', marginTop:"-234px", marginLeft:'47px', padding:'74px'}}/></div>
        <div className='card' id="top"> 
        <img src={isho} style={{marginLeft:'175px', marginTop:'-66px'}} />
        </div>
        <div className='card' id="bottom"></div>
      </div>
    </div>


    <div className='container' style={{marginTop:"1050px"}}>
      <div className='box'>
        <div className='card' id="front"> 
        <img src= {isho} style={{ marginTop:"54px", marginLeft:'-177px'}}/>
        </div>
        <div className='card' id="back"></div>
        <div className='card' id="left">
          <img src={isho1} style={{ marginTop:"59px", marginLeft:'203px'}}/>
        </div>
        <div className='card' id="right"> 
        </div>
        <div className='card' id="top"> </div>
        <div className='card' id="bottom"></div>
      </div>
    </div>

    </>
  )
}

export default Cube