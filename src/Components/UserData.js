import {useState} from 'react'; 
import "./UserData.css";

function UserData(props){
   const [fullName, setFullName] = useState("");
   const [email, setEmail]=useState("");
   const [Phoneno, setPhoneno]= useState("");
   const [websie, setwebSite]=useState("");
   const [message, setMessage]=useState("");

    const fullnameChangeHandler=(event)=>{
      setFullName(event.target.value);
    };

    const emailChangeHandler=(event)=>{
      setEmail(event.target.value);
    };

    const phonenoChangeHandler=(event)=>{
      setPhoneno(event.target.value);
    };

    const websiteChangeHandler=(event)=>{
      setwebSite(event.target.value);
    };
    const messageChangeHandler=(event)=>{
      setMessage(event.target.value);
    };

    const submitHandler=(event)=>{
      event.preventDefault();

      const newUserData = {
        name:fullName,
        email:email,
        Phoneno:Phoneno,
        website:websie,
        message:message,
      }
      // console.log("newUserData::::",newUserData);
      props.onChange(newUserData);

      setFullName("");
      setEmail("");
      setPhoneno("");
      setwebSite("");
      setMessage("");

    };
    return(
        <div className="maindiv">
          
     
          <form onSubmit={submitHandler}>
             <div className="container">
                <p id="heading">Contact Us</p>
                
                
                <input type="text" id="name" className="input" placeholder="Full name"  onChange={fullnameChangeHandler} value={fullName}/>

                 
                
                <input type="email" id="email" className="input" placeholder="Email"   onChange={emailChangeHandler} value={email}/>

                 
                
                <input type="tel" id="phn" className="input" placeholder="Phone number"   onChange={phonenoChangeHandler} value={Phoneno}/>

                 
                
                <input type="text" id="website" className="input" placeholder="Website"  onChange={websiteChangeHandler} value={websie}/>
                <p id="message">Message</p>
                <textarea rows="5" cols="3" className="input" onChange={messageChangeHandler} value={message}></textarea>

                <button type="submit" className="button" > submit</button>
             
             </div>

           </form>
       </div>

    )
}

export default UserData;
