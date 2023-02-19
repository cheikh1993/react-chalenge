import React from 'react'
import { data, images } from '../contents'
import '../styles/home.css'
console.log(data)
const Home = () => {
  return (
    <div className='home'>
      <div className="homeContainer">
         <div className="left">

        <img src={images.imageWeb3Dest} alt="web" />
        <div className="containerInfo">
          <div className="containerTitle">
          <span className='title'>the brigth future of web 3.0?</span>

          </div>
          <div className="containerText">

          <p  className='info'> amet consectetur adipisicing elit. Commodi quaerat eaque non itaque eligendi harum debitis vitae eveniet iure nobis fuga mollitia, perferendis esse repudiandae ratione maxime obcaecati repellat nam!</p>
          <button onClick={() => console.log("Read More")}  className="button">
            Read More
          </button>
          </div>
        </div>
       </div>
       <div className="right">
        <div className="new">
          <h4 className='newtitle'>New</h4>
          <span className='car'>Hydrogen VS Electric Cars</span>
          <p className="paragraph">will hydrogen-fueled car ever catch up to Evs?</p>
        </div>
        <div className="line"/>
        <div className="downside">
           <h4 className='downsidetitle'>The Downsides of all Artisty</h4>
          <p className="paragraph">Whet we are the possible adverse affects of on demand AI image gereration</p>
        </div>
                <div className="line"/>

        <div className="vc">
           <span className='car'>Hydrogen VS Electric Cars</span>
          <p className="paragraph">will hydrogen-fueled car ever catch up to Evs?</p>
        </div>
       </div>
      </div>
      <div className="footer">
        <div className="footerContainer">
         
          {
            data.map((item, index) => {
              return(
                 <div className="item" key={item.id}>
            <img src={item.img} className="img" alt="image" />
            <div className="footerInfo">
              <span className='number'>{item.id}</span>
            <h3 className='footertitle'>{item.title}</h3>
            <p className='footerContent'>{item.content}</p>
            </div>
          </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default Home