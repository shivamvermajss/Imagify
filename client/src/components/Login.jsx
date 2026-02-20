import { assets } from '../assets/assets'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {motion} from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login = () => {
  const [state,setState] = useState('login') 
  const {setShowLogin,backendURL,setToken,setUser} = useContext(AppContext)

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState(''); 


  const onSubmitHandler =  async(e) => {
    e.preventDefault();
    try {
      if(state === 'login'){
         const {data} = await axios.post(backendURL + '/api/user/login', {email,password})
          if(data.success){

            setToken(data.token); 
            setUser(data.user);
            localStorage.setItem('token',data.token);
            setShowLogin(false);
          } else {
            toast.error(data.message)
          } 
      } else {
        const {data} = await axios.post(backendURL + '/api/user/register', {name,email,password})
          if(data.success){

            setToken(data.token); 
            setUser(data.user);
            localStorage.setItem('token',data.token);
            setShowLogin(false);
          } else {
            toast.error(data.message)
          } 
        }
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
        console.log(error);
      } 
  }  



  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  },[])  




  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex justify-center items-center">
      
      <motion.form  onSubmit={onSubmitHandler} className="relative bg-white w-[90%] sm:w-96 p-8 rounded-xl shadow-xl text-slate-600"initial={{opacity:0.2,y:50}} transition={{duration:0.3}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        
        <h1 className="text-center text-2xl font-semibold text-neutral-800 mb-2">
          {state}
        </h1>

        <p className="text-sm text-center text-gray-500 mb-6">
          Welcome back! Please sign in to continue
        </p>

      { state!=='login' && <div className="border border-gray-300 px-5 py-2 flex items-center gap-3 rounded-full">
          <img src={assets.profile_icon} alt="" className="w-4" />
          <input
            onChange={e=> setName(e.target.value)} value={name}
            className="outline-none text-sm w-full"
            type="text"
            placeholder="Full Name"
            required
          />
        </div>}
        <div className="border mt-2 border-gray-300 px-5 py-2 flex items-center gap-3 rounded-full">
          <img src={assets.email_icon} alt="" className="w-4" />
          <input
            onChange={e=> setEmail(e.target.value)} value={email}
            className="outline-none text-sm w-full"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="border border-gray-300 px-5 mt-2 py-2 flex items-center gap-3 rounded-full">
          <img src={assets.lock_icon} alt="" className="w-4" />
          <input
            onChange={e=> setPassword(e.target.value)} value={password}
            className="outline-none text-sm w-full"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <p className='text-sm text-blue-600 my-4 cursor-pointer'> Forgot Password</p>
        <button className='bg-blue-600 w-full text-white py-2 cursor-pointer rounded-full'>{state === 'login' ? 'Login' : 'create account'}</button>
      {state=='login'? <p className='mt-5 text-center'> Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
        :
        <p className='mt-5 text-center'> Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('login')}>Login</span></p>}
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className="absolute top-5 right-5 cursor-pointer" />
      

      </motion.form>
    </div>
  )
}


export default Login
