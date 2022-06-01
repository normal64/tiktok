import React from 'react';
import "./components/css/MainPage.css"

const MainPage = () => {
    return (
        <div className="ui container  center aligned ">
                <div className="ui segment column ten wide">
                <h2 className="ui header">NieTikTok</h2>
                <h3 className="screen-text">Come on. stop tiktoking</h3>
            <img  src="https://miro.medium.com/max/470/1*H9c4IRMVTzl71Wxvy92Mjw.png" />
            </div>
            <div className="ui segment column ten wide">
            <button className="massive ui button">
             <a href="https://www.freecodecamp.org/">Stop wasting time</a>
            </button>
            </div>

        </div>
    )
}

export default MainPage
