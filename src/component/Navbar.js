import { Link } from "react-router-dom"
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom"


export default function Navbar({user}){
    const navigate  = useNavigate()
    return(
        <>
        <nav className ="bg-blue-300  ">
         <div className="flex justify-absolute space-x-8 flex " >{
            
            
              user?
            
            
             <button onClick={()=>{
                auth.signOut()
                
                navigate("/login")
             }}   className="font-bold text-3xl text-center   rounded p-2 m-2">logout
             </button>
             :
             <>
            
             <Link to ="/login" className="font-bold text-3xl text-center  rounded p-2 m-2">Login</Link>
             <Link to ="/signup"  className="font-bold text-3xl text-center rounded p-2 m-2">Signup</Link>
             <Link to ="/"  className="font-bold text-3xl text-center rounded p-2 m-2">Back</Link>
            </>
}

          </div>

 
 
 
       </nav>

</>
       
    )
}