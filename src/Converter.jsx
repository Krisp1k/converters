import { React, useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"

import Downloader from "./Downloader"

function InputBar({ shortSocial }) {

    const [inputValue, setInputValue] = useState("")
    const text = `Paste your ${shortSocial} link here`

    useEffect(() => {
        const cookieValue = getCookie(shortSocial);
        console.log('Cookie Value:', cookieValue); // Debugging line
        if (cookieValue !== null) {
            setInputValue(cookieValue);
        }
    }, [shortSocial]);

    const getCookie = (cookieName) => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(cookieName + '=')) {
                return cookie.substring(cookieName.length + 1);
            }
        }
        return null;
    }

    const handleInputChange = (e) => {
        const value = e.target.value
        setInputValue(value)
        document.cookie = `socialCookie=${value}; expires=Thu, 01 Jan 2990 00:00:00 UTC; path=/convert/${shortSocial};`;

        const updatedCookieValue = getCookie(shortSocial);
        if (updatedCookieValue !== null) {
            setInputValue(updatedCookieValue);
        }
    };

    const download = () => {
        switch (shortSocial) {
            case "facebook":
                Downloader.downloadFacebook(inputValue)
                break;
            case "tiktok":
                Downloader.downloadTiktok(inputValue)
                break;
            case "instagram":
                Downloader.downloadInstagram(inputValue)
                break;
            case "twitter":
                Downloader.downloadTwitter(inputValue)
                break;
        }
    }

    return ( 
        <div className="input-bar" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <input 
                type="text" 
                placeholder={text} 
                style={{
                    height: "30px",
                    width: "250px",
                    padding: "5px 10px",
                    margin: "10px 25px"
                }}
                onChange={handleInputChange}
                value={inputValue}
            />
            <button 
                style={{
                    maxWidth: "120px"
                }} 
                onClick={download}
            >
                Download
            </button>
        </div>
    )
}

export default function Converter() {

    const [headingText, setHeadingText] = useState("")
    const { social } = useParams() 

    useEffect(() => {
        switch(social) {
            case "facebook":
                setHeadingText("Facebook converter")
                break;
            case "tiktok":
                setHeadingText("TikTok converter")
                break;
            case "instagram":
                setHeadingText("Instagram converter")
                break;
            case "twitter":
                setHeadingText("Twitter converter")
                break;
            default:
                setHeadingText(""); // Handle any other cases or set a default value
                break;
        }
    }, [social])
    
    return (
        <div className="container" style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px auto",
            width: "100%"
        }}>
            <header>
                <Link className='link' to="/">Back</Link>
                <h1 className='converter-heading'>{headingText}</h1>
            </header>
            <main>
                <InputBar shortSocial={social}/>
            </main>
        </div>
    )
}