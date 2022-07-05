import React from 'react'
import { useGlobalContext } from './context'
import { useNavigate } from 'react-router-dom'

const SetForm = () => {
    const { quiz, handleChange,  error,user } = useGlobalContext()
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello')
        navigate('/quiz')
       
    }

     

    
  return <div className='quiz-section'>
  
      
   <h3>Welcome to the quiz section <span className='span-name'>{user?.name}</span> </h3>

    <form>

    <p>Please make sure to click your answer before proceeding to the next question.</p>
         
    <p>Please kindly click on the start button to start.</p>
        <div className='single-form'>
            <label htmlFor='amount' className='form-label'>number of questions</label>
            <input type='number' name='amount' id='amount' value={quiz.amount}
            className='setform-input'
            min={1}
            max={50}
            />

        </div>
        <div className='single-form'>
            <label htmlFor='category' className='form-label'>category</label>
            <select name='category' id='category'
         
            className='form-select'
            >
                 <option value='sport'>General Knowledge</option>
           

            </select>    

        </div>
        <div className='single-form'>
            <label htmlFor='difficulty' className='form-label'>difficulty</label>
            <select name='difficulty' id='difficulty'
            onChange={handleChange}
            className='form-select'
            >

                
            <option value='medium'>medium</option>
           

            </select>    
          

        </div>
       
        {error && <p className='error'>can't generate questions, please try a different options</p>}
        <button type='submit' onClick={handleSubmit} className='setform-btn'>start</button>

    </form>
    </div>


}

export default SetForm
