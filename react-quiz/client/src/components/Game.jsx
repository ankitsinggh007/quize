import {useState,useRef,useEffect} from 'react'
import Start from './Start'
import Timer from './Timer'
import Trivia from './Trivia'
import {FaLock ,FaLockOpen} from 'react-icons/fa'
import Popup from 'reactjs-popup';
import Login from "../assets/Logo.png"

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


function Game({username,setUsername,timeOut,moneyPyramid,questionNumber,earned,setTimeOut,data,setQuestionNumber}) {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
      const afterHovered={
        background: 'rgb(28,48,81)',
        position:'absolute',
        top:"50px",

        opacity:"1",
        left:'10px',

        background:'linear-gradient(59deg, rgba(28,48,81,1) 0%, rgba(0,0,0,1) 100%)'
      }
      const beforeHovered={
        background: 'rgb(28,48,81)',
        position:'absolute',
        top:"50px",
        left:'10px',
        background:'linear-gradient(59deg, rgba(28,48,81,1) 0%, rgba(0,0,0,1) 100%)'
      }
      const boxClassName = isHovered ? afterHovered : beforeHovered;
      const navigate=useNavigate();
      const logout=()=>{
        setTimeOut(false);
        localStorage.removeItem('username');

        navigate('/');
        window.location.reload();
        
      }
      useEffect(() => {
        setHeight(confetiRef.current.clientHeight);
        setWidth(confetiRef.current.clientWidth);
      }, []);



    return (
    <div className="app confettie-wrap" ref={confetiRef}>
       {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <div className='loose gradient-custom-2'>
                <img src={Login} width='100px' alt="logo" />
                <br/>
                <span className='btt'>Lose</span>
                           <br/>
                <h1 className="endText">You earned:{earned}</h1>
              </div>
            ) : (
              <>
             {
            questionNumber==16? <div><Confetti numberOfPieces={150} width={width} height={height} />
    <div className='loose gradient-custom-2'>
                <img src={Login} width='100px' alt="logo" />
                <br/>
    <h1 style={{color:'#22c55e'}}>Congratulations!</h1>
<br/>
                <span className='win'>Win</span>
                <br/>
    <p style={{fontSize:'24px',lineHeight:'1.6'}}>You won the game!</p>

                           <br/>
                <h1 className="endText">You earned:{earned}</h1>
              </div>
           
           
            </div>:
            <>
                 <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                 </div>
            </>
             }
               </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) =>{
                console.log(m,m)
                return (
                  <li
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                  }
                  style={(m?.level!==undefined)?m.id<questionNumber?{ background: 'linear-gradient(to bottom, rgba(34, 197, 94, 1), rgba(34, 197, 94, 0.2),rgba(255, 255, 255, 0.1) )'}:{ background: 'linear-gradient(to bottom, rgba(192, 165, 80, 1), rgba(192, 165, 80, 0.2),rgba(255, 255, 255, 0.1) )'}:{}}
                  
                  >
                    <span className="moneyListItemAmount">{m.amount}</span>
                    {(m?.level!==undefined &&m.id<questionNumber ) &&<div style={{position:"absolute",right:'45px',display:'flex',justifyContent:"center",alignItems:"center"}}><FaLockOpen fill="black" /><span style={{color:'black'}}>&nbsp;LV-{m.level}</span> </div>}
                    {(m?.level!==undefined &&m.id>questionNumber ) &&<div style={{position:"absolute",right:'45px',display:'flex',justifyContent:"center",alignItems:"center"}}><FaLock fill='black' /><span style={{color:'black'}}>&nbsp;LV-{m.level}</span> </div>}
                  </li>
                )
              } 
              )}
             </ul>
           </div>
           <MDBBtn outline className='' style={boxClassName}  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      onClick={logout}
      
      >
                Log out
              </MDBBtn>
              <p style={{position:"absolute",left:"10px",top:"10px",fontSize:"1.5rem"}}>Hi ,{username}</p>
         </>
       )}
                </div>
  )
}

export default Game