import { useEffect, useState } from "react";

export default function ExamHeader({title="TOEIC TEST",part="Part 1",onSubmit,remaining=120}){
    const[timeLeft,setTimeLeft] = useState(remaining*60);
    const beautify = ()=>{
        const hours = Math.floor(timeLeft/3600);
        const minute = Math.floor((timeLeft%3600)/60);
        const second = timeLeft%60;
        return `${hours.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
    }
    useEffect(()=>{
        if(timeLeft<=0){
            onSubmit();
            return;
        }
        const timer = setInterval(()=>
            setTimeLeft(prev=>prev-1),1000);
        return ()=>clearInterval(timer);
    },[timeLeft,onSubmit])
    return(
        <header className="bg-primary d-flex justify-content-between px-sm-3 px-1 py-1">
            <div className="d-flex gap-3 align-items-center p-sm-3 p-sm-1 fs-4 me-2">
                <h5 className="m-0 text-white fw-bold">{title}</h5>     
                <div className="d-flex flex-column flex-sm-row gap-2 align-items-center">
                <span className="badge rounded-pill bg-white text-primary">{part}</span> 
                <button 
                    className="btn btn-sm btn-light text-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '32px', height: '32px', transition: 'all 0.2s' }}
                    onClick={() => console.log("Mở menu Part")}
                >
                    <i className="bi bi-list-ul fs-5"></i>
                </button>
                </div>
            </div>
            <div className="d-flex gap-4 align-items-center">
                <span className="text-white">Remaining Time: {beautify()}</span>
                <button onClick={onSubmit} className="btn btn-success pe-0 pe-sm-3">Submit</button>
            </div>
        </header>
    )
}