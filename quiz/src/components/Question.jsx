import React, {useState, useContext} from 'react';
import { Progress } from './Main';

const Question = ({q,a,c}) => {
    const [correctAnswer, setCorrectAnswer] = useState("not-answered")
    const ctx = useContext(Progress)
    const setProgress = ctx.setProgress
    const setAnsweredQuestions  = ctx.setAnsweredQuestions

    function checkQuestion(A){
        setAnsweredQuestions(questions => questions +1)
        if (A === c) {
            setCorrectAnswer("true")
            setProgress(progress => progress + 1) 
           
        } else {
            setCorrectAnswer("false")
        }
    }
    return (
        <>
            <h2>{q}</h2>
            {
                correctAnswer === "not-answered" ?
                 a.map(A => (
                    <button onClick={() => checkQuestion(A)}>{A}</button>
                 ))
              :
              correctAnswer === "true" ? (<p>Correct</p>) : (<p>Wrong</p>)
            }
        </>
    )
}

export default Question