import { createContext, useContext, useMemo, useState } from "react";
import { useExam } from "./ExamStaticProvider";

export const SessionContext = createContext();

export const ExamDynamicProvider = ({attemptId,children})=>{
        const {flatSequence,total} = useExam();
        const [currentIndex,setCurrentIndex] = useState(0);
        const value = useMemo(()=>({
            currentIndex:currentIndex+1,
            currentItem:flatSequence[currentIndex],
            next:()=>currentIndex<total-1&&setCurrentIndex(i=>i+1),
            prev:()=>currentIndex>0&&setCurrentIndex(i=>i-1)
        }),[currentIndex,flatSequence,total]);
        return <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
}
export const useSession = ()=>useContext(SessionContext);
