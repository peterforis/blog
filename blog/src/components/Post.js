import React from 'react';

export default function Post(props){
    return (
        <div>
            <h3>Post { props.id }</h3>
            <p>{ props.text }</p>
        </div>
    );
}