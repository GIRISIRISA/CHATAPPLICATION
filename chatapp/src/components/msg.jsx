import { useState } from "react"
import dots from "./images/dots.png"
import dog from "./images/dog.webp"
import aud from "./images/phone-call.png"
import Vid from "./images/video.png"
const MsgDiv=()=>{
    const[Show,setShow]=useState(false);
    return(
        <>
        <div className="chat-container">
        <div className="left-chat">
            <div className="nav">
                <nav>
                    <h1>Keep in Touch</h1>
                    <button id="set"><img src={dots} alt="" width="40px" onClick={()=>{setShow(!Show)}}/></button>
                </nav>
            </div>
            <div className="list">
            <div className="cont">
                <img src={dog} alt="" />
            </div>
            <div className="name"><span><h2>Subramani</h2></span></div>
            </div><hr />
            <div className="hiddensetings">
                        {Show && <ul>
                            <li><span>Create Group</span></li><hr />
                            <li>Settings</li>
                        </ul>}
                    </div>
        </div>
        <div className="right-chat">
            <div className="container">
            <div className="navR">
                <div className="prop">
                <div className="profIm">
                        <img src={dog} alt="" id="prof" width="50px"/>
                    </div>
                    <div className="name"><span><h2 id="name" color="black">Subramani</h2></span></div>
                </div>  
            </div>
             <div className="contact">
                <button id="aud"><img src={aud} alt="" width="30px"/></button>
                <button id="vid"><img src={Vid} alt="" width="30px"/></button>
             </div> 
            </div>
            <div className="input-container">
                <input type="text" 
                className="input-field" 
                id="messageInput" 
                placeholder="Type a message..."

                />
                <button className="send-button" onclick="sendMessage()">Send</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default MsgDiv;