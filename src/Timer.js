import React, {Fragment, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './context'


const Timer = () => {
  const [timerMinutes, setTimerMinutes] = useState(9)
    const [timerSeconds, setTimerSeconds] = useState(59)
  // let interval;

  const {setIsModalOpen} = useGlobalContext()
  const navigate = useNavigate()

  
   useEffect(()=>{

    let timer;
    
 
     timer= setInterval(()=>{
      setTimerSeconds(timerSeconds -1)
      if(timerSeconds===0){
        setTimerMinutes(timerMinutes-1)
        setTimerSeconds(59)
      }
     },1000)

     return () => clearInterval(timer);
     

   })

   if(timerMinutes === 0 & timerSeconds === 0){

   setIsModalOpen(true)
   }else{

  return <Fragment>
    <section className='timer-container'>

        <section className='timer'>
          <div className='clock'>
            <section>
                <p className='timer'>Timer: {timerMinutes < 10 ? '0' + timerMinutes : timerMinutes}: {timerSeconds < 10? '0' + timerSeconds : timerSeconds} </p>
               
             </section>
             
          </div>
        </section>
       
    </section>
  </Fragment>
}
}

export default Timer
