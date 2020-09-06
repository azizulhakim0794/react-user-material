import React,{useEffect, useState} from 'react';
import UserCompo from '../UserCompo/UserCompo';
const HomePage = () => {
    const [userData,setUserData] = useState([])
    useEffect(() =>{
        const userURL ='https://jsonplaceholder.typicode.com/posts'
        fetch(userURL)
        .then(res => res.json())
        .then(data =>setUserData(data))
    },[])
    return (
        <div>
            {
                userData.map(user =><UserCompo user={user}></UserCompo>)
            }   
        </div>
    );
};

export default HomePage;