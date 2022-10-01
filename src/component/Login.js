import { useState } from "react"
import { Link } from "react-router-dom"
import {auth} from  "../firebase"
import  { useNavigate } from "react-router-dom"


export default function Login(){

    const [email ,setvalue] = useState()
    const [pass ,setpass] = useState()
    const navigate = useNavigate()
     const handlesubmit=async (e)=>{
        e.preventDefault()
        setpass("")
        setvalue("")
       

        try{
            const result =  await auth.signInWithEmailAndPassword(email,pass)
         navigate("/")
                window.M.toast({html:`${result.user.email}`,classes:"green"})
          
              } 
             
              catch(err){
                window.M.toast({html:err.message,classes:"green"})
                 
              }
      


     }
    


    return(
       <div>
       <section className="h-screen">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Sample image"
        />
      </div>
     
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 bg-blue-200 p-10 rounded-2xl">
        <h1 className="font-bold text-5xl text-center   p-2 m-3">login!</h1>

        <form onSubmit={(e)=>handlesubmit(e)}>
         
          <div className="mb-6 bg-white">
            <input
              onChange={(e)=>setvalue(e.target.value)}
              
              type="email"
              className="form-control block w-full px-4 py-2 text-xl "
               value = {email}
              placeholder="Email address"
            />
          </div>

         
          <div className="mb-6 bg-white">
            <input
            onChange={(e)=>setpass(e.target.value)}
           
              type="password"
              class="form-control block w-full px-4 py-2 text-xl "
               value ={pass}
              placeholder="Password"
            />
          </div>


          <div className="text-center lg:text-left">
            <button
              
              type="submit"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
             
              <Link className="text-xl" to ="/signup">Signup</Link>
             
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
       </div>

    )
}
