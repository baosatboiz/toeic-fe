import { useState } from "react";
import QuestionChoice from "../QuestionChoice";
const questionListData = [
  {
    id: 102,
    text: "Please submit your travel reimbursement requests _______ the end of the work week.",
    options: [
      { label: "A", content: "by" },
      { label: "B", content: "on" },
      { label: "C", content: "to" },
      { label: "D", content: "at" }
    ]
  },
  {
    id: 103,
    text: "What is indicated about the new cafeteria menu?",
    options: [
      { label: "A", content: "It will change every month." },
      { label: "B", content: "It offers more vegetarian choices." },
      { label: "C", content: "It is more expensive than the old one." },
      { label: "D", content: "It was designed by a famous chef." }
    ]
  }
];
export default function QuestionGroup ({questionData=questionListData}){
    const [selected,setSelected] = useState({});
    const handleClick = ({id,label})=>{
        setSelected(prev=>({...prev,[id]:label}))
    }
    return (
        <div>
        {questionData&&questionData.map(({id,text,options})=>(
            <div key={id}>
                <p className="fw-bold p-3">{id}. {text}</p>
                {options.map(({label,content})=>(
                    <QuestionChoice 
                    key={`${id}-${label}`}
                    label={label} 
                    content={content} 
                    isSelected={selected[id]===label}
                    onClick={()=>handleClick({id,label})}></QuestionChoice>
                ))}
            </div>
        ))}
        </div>
    )
}