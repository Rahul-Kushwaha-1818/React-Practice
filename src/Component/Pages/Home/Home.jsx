    import React, { useEffect, useState } from 'react'
    import axios from 'axios';

    export const Home = () => {
        const [post,setPost]=useState([]);
        const [newpost,setNewpost]=useState([]);

        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>response.json() )
            .then((data)=>setPost(data))
            .catch((error)=>console.log("error",error));
        })

        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{setNewpost(response.data)}).catch((error)=>{
                console.error('Error', error);
            });
        },[]);

    return (
        <>
        <div style={{backgroundColor:'lightblue',width:'100%',display:'flex',justifyContent:'center'}}>
            <div style={{backgroundColor:'red',width:'50%'}}>
                {post.map((userData)=>(
                    <>
                    <div style={{backgroundColor:'yellow',width:'90%',margin:'15px'}} key={userData.id}>
                        <h1>{userData.title}</h1>
                        <p>{userData.body}</p>

                    </div>
                    </>
                ))}
            
            </div>
            <div style={{backgroundColor:'blue',width:'50%'}}>
                {newpost.map((newdata)=>(
                    <div key={newdata.id} style={{backgroundColor:'yellow',width:'90%',margin:'15px'}}>
                        <h1>{newdata.title}</h1>
                        <p>{newdata.body}</p>
                    </div>
                ))}
            
            </div>
        </div>
        </>
    )
    }
