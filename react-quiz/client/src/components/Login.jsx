import React ,{useState}from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import axios from "axios";
import './Login.css'
import Login from "../assets/Logo.png"
import { Link, useNavigate } from 'react-router-dom';

function App({authentication,setAuthentication,setMessage,setUsername,username}) {

  const [emailError, setemail] = useState(false);
  const [passwordError, setpassword] = useState(false);
  const [submitted,setSubmitted]=useState(false);

  const navigate=useNavigate();
  
  const Loggedin=async(authentication)=>{
      try {
        const {email,password}=authentication;
        const {data} = await axios.post(`http://localhost:3002/login`, {email,password},{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });       
             setUsername(data?.response?.name);
            setMessage(data.message);
            if(data.response.name){
              navigate('/game');}
          }
       catch (error) {
        const {response}=error;
        const {data}=response;
        setMessage(data.message);
      }
      setAuthentication({});
      
      
    }
   
   


  const  SubmitHandler=(e)=>{
    const email = "example@example.com";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const isValidEmail = emailRegex.test(authentication.email);

if(!(isValidEmail)){
  setemail(true);
}
if(authentication?.password===""||authentication?.password?.length<5){
  setpassword(true);  

}
if(isValidEmail&&authentication?.password?.length>=5){
  Loggedin(authentication);
  setSubmitted(true);
}

  }
  


  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={Login}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Who Wants To Be A Millionaire</h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mt-4' label='Email address' id='form1'onChange={(e)=>{setemail(false);setAuthentication({...authentication,email:e.target.value})}} type='email'/>
            {
              emailError &&
              <span style={{color:"red",fontSize:"0.7rem"}}>email is invalid </span>

            }
            <MDBInput wrapperClass='mt-4' label='Password' id='form2' onChange={(e)=>{setpassword(false);setAuthentication({...authentication,password:e.target.value})}} type='password'/>
            {
              passwordError &&
              <span style={{color:"red",fontSize:"0.7rem"}}>password must contain atleast 5 character </span>

            }

            <div className="text-center pt-1 mt-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={SubmitHandler}>Sign in</MDBBtn>
            </div>
            <Link to="/game">
            <MDBBtn  outline style={{margin:"auto" ,background: 'rgb(28,48,81)',color:"white",padding:"5px 7px 5px 7px" ,background: 'linear-gradient(59deg, rgba(28,48,81,1) 0%, rgba(0,0,0,1) 100%)'}} >Play as Guest</MDBBtn>

            </Link>
<br/>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              
              
              
              <Link to='/signup'>
              <MDBBtn outline className='mx-2' style={{background: 'rgb(28,48,81)' ,background: 'linear-gradient(59deg, rgba(28,48,81,1) 0%, rgba(0,0,0,1) 100%)'}}>
                Create New
              </MDBBtn>
              </Link>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">Who Wants to be a Millionaire</h4>
              <p class="small mb-0">Experience the excitement of the iconic game show from the comfort of your device. Test your knowledge, challenge friends, and strive to become a virtual millionaire. Get ready for thrilling trivia, lifelines, and big wins
              </p>
              <p style={{marginTop:"5rem"}}>Developed By :-Komal and Shraddha</p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;