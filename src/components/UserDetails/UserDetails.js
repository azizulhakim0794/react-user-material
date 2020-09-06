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
    },[]);

    const styleForMainDiv ={border: '1px solid black',backgroundColor: 'gray',color: 'white',padding:'20px',margin: '20px',borderRadius:'5px'}
    const styleForState= {marginLeft: '165px'}
    const styleForEmil ={marginLeft: '165px',marginBottom:'-37px'}
    return (
  
        <div style={styleForMainDiv}>
            <div className="">
            <p style={styleForMainDiv}>User Id No: {userId}</p>
            </div>
            <div className="">
                
           <p style={styleForState}> Person's name : {mainUser.name}</p>
           
            <p style={styleForEmil}>person's E-mail address : {mainUser.email}</p>
            <u><p style={{width:'147px'}}>Image is not Defined</p></u>
            <p style={styleForState}>Comments : {mainUser.body}</p>
            </div>
            </div>
    );
};

export default UserDetails;