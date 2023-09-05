import { React, useState } from 'react'
import axios from "axios"
import puppeteer from "puppeteer"

export default class Downloader {

    // https://www.instagram.com/reel/CumfYrtqtNQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==
    static async downloadInstagram(postUrl) {
        console.log("Preparing for download...", postUrl, " social: instagram")

        const extractInstagramUrl = async (url) => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url);

            const video = await page.querySelector('video');
            const videoUrl = await video.getAttribute('src');
            await browser.close();

            return videoUrl;
        }

        const videoUrl = await extractVideoUrl(postUrl);
        console.log(videoUrl);
    }

    static async downloadTiktok(url) {
        console.log("Preparing for download...", url, " social: tiktok")

        
    }

    static async downloadFacebook(url) {
        console.log("Preparing for download...", url, " social: facebook")
    }

    static async downloadTwitter(url) {
        console.log("Preparing for download...", url, " social: twitter")
    }
}