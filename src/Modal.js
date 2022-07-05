import React from 'react'
import { useGlobalContext } from './context'
import SetForm from './SetForm'
import { useNavigate } from 'react-router-dom'

const Modal = () => {

  const {isModalOpen, user, correct, exam, setIsModalOpen, setCorrect} = useGlobalContext()
 const navigate = useNavigate();

  const closeModal = () =>{
       setIsModalOpen(false)
       setCorrect(0)
      navigate('/')
  }

  return (
    <div className={`${isModalOpen ? 'modal-container isOpen': 'modal-container'}`}>
        
        <div className='modal-content'>
           <h2>congrats <span className='span-name'>{user?.name}</span>!</h2>
           <p>You answered <span className='span-score'>{((correct/exam.length)*100).toFixed(0)}%</span> of questions correctly</p>
           <p>Please screenshot your result and send it to me on Whatsapp</p>
           <p>Need my Whatsapp number? <span className='number'>08082223243</span></p>
           <button className='close-btn' onClick={closeModal}>play again</button>
        </div>
      
    </div>
  )
}

export default Modal
