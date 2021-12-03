import React from 'react'
import { useState, useEffect } from 'react'

function Home() {
    const [data, setData] = useState([]);
    const loadUser = () => 
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
    
        useEffect(() =>{
            loadUser().then((data) =>{
                // console.log("======data=>", data);
                setData(data);
            })
        }, [])

    return (
        <div>
            <h1 style={{ marginLeft:'270px' }}>Welcome To Home Page</h1>
            <h2 style={{ marginLeft:'270px' }}>Blow data is comming from Api------</h2>
            {data.map((post) =>{
                console.log("postdata", post);
                return (
                    <p style={{ marginLeft:'270px' }} key={post.id}>{post.name}</p>
                );
            })}
        </div>
    );
}

export default Home;
