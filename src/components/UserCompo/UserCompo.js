import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const UserCompo = (props) => {
    const {id,title} = props.user
    const styleForUser = {margin:'40px',border: '1px solid lightgray',padding: '20px',backgroundColor:'#202333',color: 'white', borderRadius: '8px',}
    const styleForLink = {textDecoration: 'none'}
    return (
        <div style={styleForUser}>
            <h4>The Person Who Was Commented here Id No: {id}</h4>
            <p>This Person's title comment : {title}</p>
            <br/>
            <p><Link style={styleForLink} to= {`/about/${id}`}><Button style={{backgroundColor:'white'}}>Click For More {id}</Button></Link> </p>
        </div>

    );
};

export default UserCompo;