import React from 'react'
import {assets} from '../assets/assets'
import {motion} from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if(user){
      navigate('/result');
    }else{
      setShowLogin(true);
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>  
      <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500' initial={{opacity:0,y:-20}} transition={{delay:0.2 ,duration:2}} animate={{opacity:1,y:0}}>
        <p>Best Text to image generator</p>
        <img src={assets.star_icon} alt="Star Icon"  />
      </motion.div>
      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center' initial={{opacity:0}} transition={{delay:0.4 ,duration:2}} animate={{opacity:1}}>Create Stunning <span className='text-blue-600'>Images</span> with AI</motion.h1>

      <motion.p className='text-center max-w-xl mx-auto mt-5' initial={{opacity:0,y:20}} transition={{delay:0.6 ,duration:0.8}} animate={{opacity:1,y:0}}>Unleash your creativity with our powerful AI image generation tool turn your ideas into stunning visuals.</motion.p>  

      <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center  gap-2 rounded-full' initial={{opacity:0}} transition={{default:{duration:0.5}, opacity:{delay:0.8,duration:1}}} animate={{opacity:1}}whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Generate Images <img className='h-6' src={assets.star_group} alt="" /></motion.button> 

      <motion.div className=' flex flex-wrap justify-center mt-16 gap-3'initial={{opacity:0}} transition={{delay:1 ,duration:1}} animate={{opacity:1}}>
        {Array(6).fill('').map((item,index)=>(
            <motion.img 
              key={index} 
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
              alt="Sample Image" 
              width={70} 
              whileHover={{ scale: 1.05 }} 
              className='rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 mx-2 my-2 shadow-md'
            />
        ))}
         
      </motion.div>
      <motion.p className='text-neutral-600 mt-2'initial={{opacity:0}} transition={{delay:1.2 ,duration:0.8}} animate={{opacity:1}}>Generated images from imagify</motion.p>

    </motion.div>
  )
}

export default Header
 