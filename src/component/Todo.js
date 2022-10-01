 

import React, { useEffect, useState } from "react"
 import {db } from "../firebase"
 import { useNavigate } from "react-router-dom"

let unsubscribe=()=>{
    
}
 

  export default function Todo({user}){

    const [newtext ,settext] = useState("")
    const [mytodos , settodos] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
      
        if(user){
        const docRef = db.collection("todos").doc(user.uid)
     var unsubscribe=  docRef.onSnapshot(docSnap=>{
            if(docSnap.exists){
                console.log(docSnap.data().todos)
                settodos(docSnap.data().todos)
            }else{
                console.log("no docs")
            }
        })
    }else{
        navigate("/login")
      return()=>{
        unsubscribe()
      }
    }
// eslint-disable-next-line
    },[])
     
    const addTodo = ()=>{
        db.collection("todos","inprogress").doc(user.uid).set({
            todos:[...mytodos,newtext],
          
            
          
        })

    }
    

    const deletetodo = (deletetodo)=>{
        const docRef = db.collection("todos").doc(user.uid)
        docRef.get().then(docSnap=>{
          const result =  docSnap.data().todos.filter(todo=>todo!== deletetodo)
            docRef.update({
                todos: result
            })
        })
    }

   



    return(
        <>
       
<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans" >
	<div className="rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg bg-blue-100">
        <div className="mb-4">
            <h1 className="font-bold text-5xl text-center  p-2 m-3">Todo List</h1>
            <div class="flex mt-4">
                <input  type ="text "value ={newtext} onChange={(e)=>settext(e.target.value)}className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
               <button type="submit" onClick={()=>addTodo()} className="font-bold text-2xl text-center">Add</button>
            </div>
        </div>
        <div>
           
                <ul>{
                    mytodos.map(todo=>{
                        return<li className="bg-blue-200 mt-4 p-2 rounded shadow space-x-20 flex justify-between text-2xl">{todo}
                        <button type= "submit"onClick={()=>deletetodo(todo)}>Remove</button>
                        
                        </li>
                    })
                    }

                </ul>
               
                
           
          	
        </div>
    </div>
</div>
        </>

    )
  }




