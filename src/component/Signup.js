
import { useState } from "react"
import {auth} from  "../firebase"
import  { useNavigate } from "react-router-dom"



 export default function Signup(){

    const [email ,setvalue] = useState("")
    const [pass ,setpass] = useState("")
    const navigate = useNavigate()


     const handlesubmit= async (e)=>{
        e.preventDefault()
        setpass("")
        setvalue("")
        try{
      const result =  await auth.createUserWithEmailAndPassword(email,pass)
      navigate("/")
      window.M.toast({html:`${result.user.email}`,classes:"green"})

   
      
        } 
       
        catch(err){

          Window.M.toast({html:err.message,classes:"green"})
        }

     }
    return(
     
      

<>

 
<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      
    </div>
    <form className="mt-8 space-y-6" onSubmit={(e)=>handlesubmit(e)}>
     
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input   onChange={(e)=>setvalue(e.target.value)}  type="email" autocomplete="email"  value = {email}required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <input   onChange={(e)=>setpass(e.target.value)} type="password" value = {pass} autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
        </div>

      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3"/>
        
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>

</>   
    )
 }