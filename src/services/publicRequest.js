import React,{useState,useEffect} from 'react'

export default function PublicApi(publicURL,method){
    
    console.log('APIrequest : ', publicURL)
    return fetch(`${publicURL}`).then(resp => resp.json()
        .then((res) => {
            var data = {
                status: 200,
                body: res
            }
            // console.log('APIresponse : ', JSON.stringify(data))

            return data

        }))
        .catch((e) => {
            console.log(e)
            return { body: { status: 400, Message: 'Sorry, something went wrong, please try again in sometime.' } }
        });
}