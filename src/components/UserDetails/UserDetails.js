import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
    const {userId} = useParams()
    const [mainUser, setMainUser] =  useState({})
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments/${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setMainUser(data))
    },[])
    const styleForMainDiv ={border: '1px solid black',backgroundColor: 'gray',color: 'white',padding:'20px',margin: '20px',borderRadius:'5px'}
    const styleForState= {marginLeft: '150px'}
    const styleForId={}
    return (
  
        <div style={styleForMainDiv}>
            <p style={styleForMainDiv}>User Id No: {userId}</p>
           <p style={styleForState}> friend name : {mainUser.name}</p>
            <p style={styleForState}>person's E-mail address:{mainUser.email}</p>
            <p style={styleForState}>Comments : {mainUser.body}</p>
        </div>
    );
};

export default UserDetails;