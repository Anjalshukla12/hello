
import React, { useEffect , useState} from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Todo from "./component/Todo";
import Navbar from "./component/Navbar";
import {auth } from "./firebase"



export default  function App(){
      const [user, setuser] = useState(null)
      useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged(user=>{
          if(user) setuser(user)
          else setuser(null)
        })
        return()=>{
          unsubscribe()
        }

      }, [])

  return(
    <>
    <Navbar user ={user}></Navbar>
    <Routes>
      <Route  exact path ="/" element ={<Todo user = {user}/>}/>
      <Route  path ="/login" element ={<Login/>}/>
      <Route   path ="/signup" element ={<Signup/>}/>

     
    </Routes>
   


   
   

   
    </>


  )
};