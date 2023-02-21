    import { data } from './data'
    import Question from './Question'
    import React, {useState, createContext, useEffect} from 'react'
    import Stats from './Stats' 

    export const Progress = createContext()

    const Main = () => {
    const [progress, setProgress] = useState(0)    
    const [answeredQuestions, setAnsweredQuestions] = useState(0)
    const [finished, setFinished] = useState(false)

    useEffect(() =>{
        if(answeredQuestions === data.length) {
            setFinished(true)
        }
    }, [answeredQuestions])

    return (
            <>
            {
                answeredQuestions 
            }
            {   
                finished ?
                (
                    <Stats progress={progress} length={data.length} />
                ) 
                :
                (
                <Progress.Provider value={{setProgress, setAnsweredQuestions}}>
                {
                        data.map(e => (
                            <Question q={e.q} a={e.a} c={e.c} />
                        ))
                        }
                        </Progress.Provider>
            )
        }
            </>
        )
    }

    export default Main