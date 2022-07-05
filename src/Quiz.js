import React,{useState, useEffect} from 'react'
import { useGlobalContext } from './context'
import Modal from './Modal'
import Clock from './Clock'

const Quiz = () => {





    const {name, user, exam,correct, index, nextQuestion,checkAnswer} = useGlobalContext()

  
const {question, incorrect_answers, correct_answer} = exam[index]
console.log(question)
   

//    const answers = [...incorrect_answers, correct_answer] 
let answers = [...incorrect_answers]
 const tempIndex = Math.floor(Math.random() * 4)
 if(tempIndex === 3){
    answers.push(correct_answer)
} else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
 }
// const {question, incorrect_answers, correct_answer} = exam[0]
// const answers = [...incorrect_answers, correct_answer]

  return <main className='quiz-center'>

   <div>
          <Clock  />
        </div>

   <p className='name'>Name: <span className='span-name'> {user?.name}</span></p>
   <p className='email'>Email: <span className='span-name'>{user?.email}</span> </p>     
    
      <Modal/>

     <section>

       

     <article className='question-area'>
       <h2 className='question' dangerouslySetInnerHTML={{__html: question}}/>
    
  
      <div className='btn-container'>
        {answers.map((answer,index)=>{
          return <button key={index} className='answer-btn' onClick={()=>checkAnswer(correct_answer=== answer)} dangerouslySetInnerHTML={{__html: answer}}/>
        })}
        </div> 
     </article>
     <button className='next-question' onClick={nextQuestion}>
        next question
     </button>
</section>

  </main>
}

export default Quiz
