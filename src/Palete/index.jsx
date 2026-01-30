export default function Palete({totalQuestion=200}){
    const question = Array.from({length:totalQuestion},(_,i)=>i+1);
    return (
        <div className="container mt-2 py-2 border border-secondary shadow-sm" style={{maxWidth:"340px"}}>
            <div className="row row-cols-5 g-2 overflow-auto" style={{maxHeight:"400px"}}>
           {question.map(num=>(
            <div className="col">
                <button key={num} className="text-center w-100 btn btn-outline-secondary" style={{aspectRatio: "1/1",}}>{num}</button>
                </div>
           ))}
        </div>
        <div className="mt-3 pt-2 border-top d-flex gap-3 small text-muted">
        <div className="d-flex align-items-center gap-1">
          <span className="badge bg-success" style={{ width: "12px", height: "12px", padding: 0 }}> </span> 
          <span>Done</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <span className="badge bg-white border border-secondary" style={{ width: "12px", height: "12px", padding: 0 }}> </span> 
          <span>Empty</span>
        </div>
      </div>
        </div>
    )
}