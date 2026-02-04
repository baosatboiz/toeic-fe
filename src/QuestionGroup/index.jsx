import { useState } from "react";
import QuestionChoice from "../QuestionChoice";
import { useSession } from "../ExamDynamicProvider";
export default function QuestionGroup (){
    const {currentItem} = useSession();
    const questionData = currentItem.questions;
    const [selected,setSelected] = useState({});
    const handleClick = ({index,key})=>{
        setSelected(prev=>({...prev,[index]:key}))
    }
    return (
        <div>
        {questionData&&questionData.map(({content,choices},index)=>(
            <div>
                <p className="fw-bold p-3">{content}</p>
                {choices.map(({key,content},i)=>(
                    <QuestionChoice 
                    key={key}
                    label={key} 
                    content={content} 
                    isSelected={selected[index]===key}
                    onClick={()=>handleClick({index,key})}></QuestionChoice>
                ))}
            </div>
        ))}
        </div>
    )
}