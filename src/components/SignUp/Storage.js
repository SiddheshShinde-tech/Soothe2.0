import React,{useState,useEffect} from 'react';
import firebase from "../../firebase";
import { db } from "../../firebase";
import {userEmail} from "./Login";

function Storage() {
    const [bios,setBios]=useState([])
    const fetchBios=async()=>{
      const response=db.collection('volunteers');
      const data=await response.get();
    //   console.log(data.docs);
      data.docs.forEach(item=>{
        console.log(item.data().email);
          
        setBios([...bios,item.data()])
      })
    }
    useEffect(() => {
      fetchBios();
    }, [])
    return (
        <div className="">
        {
          bios.map(bio=>{
            return(
              <div className="">
                <h1>Siddhesh Shinde here</h1>
                <h4>{bio.name}</h4>
                <p>{bio.email}</p>
                <p>{bio.contact}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
  
export default Storage;
// function Storage()
// {
//     db.collection('volunteers').then((snapshot) => {
//         console.log(snapshot.docs);
//     })
// }
