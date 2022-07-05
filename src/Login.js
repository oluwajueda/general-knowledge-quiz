import React from 'react'
import { useGlobalContext } from './context'
import {useNavigate} from 'react-router-dom';
import SetForm from './SetForm';


const Login = () => {
     
    
    const {email,name,setEmail,setName, setUser} = useGlobalContext();
     const navigate = useNavigate();

     const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !email) return;
        setUser({name:name,email:email})
        navigate('/quiz-choice')
     }
     
    
  return <div>
      <div className='form-center'>
    <h3>Hello, Participant! Welcome to the quiz</h3>
    <h5>Win a cash Gift by answering all questions correctly</h5>

    <div className='form-area'>
      <form className='form' onSubmit={handleSubmit}>
        <p>Please enter your name and email to get started</p>
       
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleSubmit} className='btn'>
          Sign in
        </button>
      </form>
    </div>

      </div>
    </div>
  
}

export default Login
