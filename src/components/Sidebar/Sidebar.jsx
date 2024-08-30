import React, { useContext, useState } from 'react';
import './sidebar.css';
import { Context } from '../../context/Contet'; 

function Sidebar() {
    const [extended, setExtended] = useState(false);

    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt= async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <i 
                    onClick={() => setExtended(!extended)} 
                    className="fa-solid fa-bars fa-2xl my-3 mx-2 menu"
                ></i>
                <div className="new-chat" onClick={()=>{newChat()}}>
                    <i className="fa-solid fa-plus fa-2xl mx-2"></i>
                    {extended ? <p className='my-2'>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {previousPrompt.length > 0 ? (
                            previousPrompt.map((item, index) => (
                                <div key={index} className="recent-entry" onClick={()=>{loadPrompt(item)}}>
                                    <i className="fa-regular fa-message fa-2xl mx-2"></i>
                                    <p className='msg'>{item.slice(0,18)}...</p>
                                </div>
                            ))
                        ) : (
                            <p>No recent prompts</p>
                        )}
                    </div> : null}
            </div>
            <div className="bottom">
                <div className={`bottom-item recent-entry ${extended ? 'notextended' : 'extended'}`}>
                    <i className="fa-solid fa-question fa-2xl mx-2"></i>
                    {extended ? <p>Help</p> : null}
                </div>
                <div className={`bottom-item recent-entry ${extended ? 'notextended' : 'extended'}`}>
                    <i className="fa-solid fa-clock-rotate-left fa-2xl mx-2"></i>
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className={`bottom-item recent-entry ${extended ? 'notextended' : 'extended'}`}>
                    <i className="fa-solid fa-gear fa-2xl mx-2"></i>
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
