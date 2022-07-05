import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react' 

const table = {
  animals: 27,
  history: 23,
  sports: 24,
}


const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = 'https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple'

const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'


const AppContext = React.createContext()


const AppProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [waiting, setWaiting] = useState(false)
    const [loading, setLoading] = useState(false)
    const [exam, setExam] = useState([])
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [error, setError] = useState(false)
    const [start, setStart] = useState(false)
    const [quiz, setQuiz] = useState({
        amount: 20,
        category: 'sports',
        difficulty: 'easy'

    })
   const [isModalOpen, setIsModalOpen] = useState(false)

   const fetchQuestions = async ()  =>{
    setLoading(false)
    setWaiting(false);

      const response = await fetch(url);
      const data = await response.json()
  
      const allQuestions = data.results;
       setExam(allQuestions)
       console.log(allQuestions)

      

       
     
    // const response = await axios(url).catch((err)=> console.log (err))
    // if(response){
    //    const data = response.data.results
    //   if(data.length > 0){
    //     setQuestions(data)
    //     setLoading(false)
    //     setWaiting(false)
    //     setError(false)
    //   }else{
    //     setWaiting(true)
    //     setError(true)
    //   }
    // }else{
    //     setWaiting(true)
    // }
   }

   useEffect(()=>{
     fetchQuestions()
   },[])

  

   
  const  handleChange =(e) =>{
    const  name = e.target.name
 const value = e.target.value
 setQuiz({...quiz, [name]: value})

   }

   

   
  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const {amount, category, difficulty, type} = quiz
  //   const tempUrl = 
  //  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

  // //  const url = `${API_ENDPOINT}amount=${amount}$difficulty=${difficulty}&category=${table[category]}&type=multiple`
  //     const url ='https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
          //  fetchQuestions(tempUrl)
  //         console.log(questions)
    // }
   
   const nextQuestion = () => {

    console.log('hello')
    setIndex((oldIndex)=>{
      const index = oldIndex + 1
      if(index > exam.length - 1) {
        setIsModalOpen(true)
         return 0
        
      }
      else{
       return index
      }
     
    })
   }
 
   const checkAnswer = (value) =>{
    if(value){
      setCorrect((oldState)=> oldState + 1)
    }
    nextQuestion()
   }

  //  const openModal = () =>{
  //   setIsOpenModal(true)
  //  }



    return(
        <AppContext.Provider
        value={{
            waiting,
            loading,
            exam,
            index,
            correct,
            setCorrect,
            error,
            quiz,
            isModalOpen,
            name,
            email,
            setName,
            setEmail,
            user,
            setUser,
            handleChange,
            // handleSubmit,
            setWaiting,
            nextQuestion,
           checkAnswer,
           setIsModalOpen,
           url,
           fetchQuestions,
           API_ENDPOINT,
           table,
          
          

          
           
        }}
        >
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}