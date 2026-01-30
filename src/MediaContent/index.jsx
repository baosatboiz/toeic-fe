import "./index.css";
const MOCK_MEDIA_DATA = {
  // --- PART 1: PHOTO (Có cả Ảnh và Audio) ---
  part1: {
    id: "p1_01",
    type: "listening_image",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Thay bằng link audio thật của bạn
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    passage: null
  },

  // --- PART 3 & 4: CONVERSATION/TALK (Chỉ có Audio) ---
  part3: {
    id: "p3_01",
    type: "listening_only",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    imageUrl: null,
    passage: null
  },

  // --- PART 7: READING PASSAGE (Chỉ có đoạn văn bản) ---
  part7: {
    id: "p7_01",
    type: "reading_passage",
    audioUrl: null,
    imageUrl: null,
    passage: `To: All Marketing Staff
From: Sarah Jenkins, Regional Manager
Date: October 12
Subject: Upcoming Project Deadline

Dear Team,

This is a reminder that the final draft of the 'Autumn Campaign' proposal is due by 5:00 PM this Friday. Please ensure all budget spreadsheets are attached to your final report.

We will have a brief meeting in the main conference room on Monday at 9:00 AM to discuss the next steps. Attendance is mandatory for all senior consultants.

Best regards,
Sarah Jenkins`
  },

  // --- PART 5: INCOMPLETE SENTENCE (Không có media) ---
  part5: {
    id: "p5_01",
    type: "grammar",
    audioUrl: null,
    imageUrl: null,
    passage: null
  }
};
export default function MediaContent({data=MOCK_MEDIA_DATA.part7}){
    if(!data) 
        return(
    <div className="d-flex gap-3 justify-content-center">
        <div className="spinner-border"></div>
        <span>Loading</span>
    </div>)
    return (
        <div className="custom-scroll overflow-auto h-100 p-4 shadow-sm">
        <div className="p-3">
            {data.imageUrl&&
            <div className="p-3">
            <img src={data.imageUrl} className="img-fluid object-fit-contain" style={{maxHeight:"300px"}}/>
            </div>}
            {data.audioUrl&&
            <div className="p-3">
            <audio controls src={data.audioUrl}></audio>
            </div>}
        {data.passage&&
        <div className="" style={{whiteSpace:"pre-line",fontSize:"1.1 rem",lineHeight:"1.8"}}>
            {data.passage}
        </div>}
        </div>
        </div>
    )
}