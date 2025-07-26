import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets/assets'
import { Context } from '../../context/Context';

const Main = () => {

   const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context); 
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user} alt="" />    
        </div>
        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb} alt="" />
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for our workretreat</p>
                    <img src={assets.message} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code} alt="" />
                </div>
            </div>
            </>
            : <div className="result">
                <div className="result-title">
                    <img src={assets.user} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini} alt="" />
                    {loading
                    ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                        </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
                </div>
            }
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) =>setInput(e.target.value)} value={input}  type="text" placeholder='Enter a promt here'/>
                    <div>
                        <img src={assets.gallery1} alt="" />
                        <img src={assets.mic} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini can make mistakes, so double-check it.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main