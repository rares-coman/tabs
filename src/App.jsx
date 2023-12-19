import React, {useState, useEffect} from 'react'

const url = "https://course-api.com/react-tabs-project";
import JobInfo from "./JobInfo.jsx";
import BtnContainer from "./BtnContainer.jsx";

const App = () => {
    const [jobs, setJobs] = useState([]);
    const [currentItem, setCurrentItem] = useState(1);
    const [isLoading, setIsLoading] = useState(true)
    const fetchData = async() => {
        try {
            const response = await fetch(url);
            const newJobs = await response.json()
            setJobs(newJobs)
            setIsLoading(false)
        }catch (error){
            console.log("Oops, something went wrong", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(isLoading){
        return <section className='jobs-center'>
            <div className='loading'>

            </div>
        </section>
    }

    return (
        <section className='jobs-center'>
            <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
            <JobInfo jobs={jobs} currentItem={currentItem}/>
        </section>
    )
}

export default App