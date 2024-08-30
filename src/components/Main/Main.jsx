import React, { useContext } from 'react';
import { Context } from '../../context/Contet';
import './main.css';

function Main() {
    const { onSent, recentPrompt, showResult, loading, setInput, input, resultData } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <i className="fa-solid fa-user fa-2xl my-3"></i>
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Pankti.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="cardes" onClick={() => onSent('Suggest beautiful places to see on an upcoming road trip.')}>
                                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                                <i className="fa-solid fa-compass fa-2xl"></i>
                            </div>
                            <div className="cardes" onClick={() => onSent('Briefly summarize this concept: urban planning')}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <i className="fa-solid fa-lightbulb fa-2xl"></i>
                            </div>
                            <div className="cardes" onClick={() => onSent('Brainstorm team bonding activities for our work retreat')}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <i className="fa-solid fa-message fa-2xl"></i>
                            </div>
                            <div className="cardes" onClick={() => onSent('Improve the readability of the following code')}>
                                <p>Improve the readability of the following code</p>
                                <i className="fa-solid fa-code fa-2xl"></i>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <i className="fa-solid fa-user fa-2xl"></i>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s" alt="" />
                            {loading ? (
                                <div>
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <i className="fa-solid fa-upload fa-2xl"></i>
                            <i className="fa-solid fa-microphone fa-2xl"></i>
                            {input && (
                                <i onClick={() => onSent()} className="fa-solid fa-arrow-right fa-2xl"></i>
                            )}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini App.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
