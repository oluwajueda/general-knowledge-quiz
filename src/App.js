import React from 'react';
import Login from './Login';
import SetForm from './SetForm'
import Loading from './Loading';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useGlobalContext } from './context';
import Modal from './Modal.js'
import Quiz from './Quiz.js'
function App() {

  // const {waiting,loading,questions,index,correct} = useGlobalContext()

  // if(loading){
  //    return <Loading/>}
  // if(waiting){
  //   <SetForm/>
  // }if(!loading || !waiting){
  // console.log(questions[0])

  // const {question, incorrect_answers, correct_answer}=questions[0]

  // const answers = [...incorrect_answers, correct_answer];


//   return<main>
//       {/* <Modal/> */}
//       <section>
//         <p>correct answers: {correct}/{index}</p>
//         <article>
//       <h2>{question}</h2>
//         </article>
//       </section>
   
// </main>
// }


//   console.log(questions[1])

//   const {question,incorrect_answers,correct_answer} = questions[0]
//     const answers = [...incorrect_answers, correct_answer];
  
//     if(!loading || !waiting){
   
//  return<main>
     
//         {/* <Modal/> */}
//         <section>
//           <p>
//             correct answers: {correct}/{index}
//           </p>
//           <article>
//             <h2 dangerouslySetInnerHTML={{__html:question}}/>
//             <div>
//               {
//                 answers.map((answer,index)=>{
//                   return <button key={index} className='answer-btn'
//                    dangerouslySetInnerHTML={{__html:answer}}
//                   />
//                 })
//               }
//             </div>
//           </article>
//           <button>next question</button>
//         </section>
        
//       </main>
  
   
//     }
 
  return<div>


 <BrowserRouter>
    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='quiz-choice' element={<SetForm/>}/>
      <Route path='quiz' element={<Quiz/>}/>
      <Route path='result' element={<Modal/>}/>

    </Routes>
    
    </BrowserRouter>
 </div>

}

export default App;
