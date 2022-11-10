import React ,{useState} from "react";

function App(){

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [occupation,setOccupation] = useState('');
  const [company,setCompany] = useState('');

  const handleChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "date"){
      setDate(value);
    }
    if(id === "occupation"){
      setOccupation(value);
    }
    if(id === "company"){
      setCompany(value);
    }

}


  function onSubmit(e){
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('date', date);
        localStorage.setItem('occupation',occupation);
        localStorage.setItem('company', company);
  }

  function getData() {
    console.log(localStorage.getItem('firstName'));
    console.log(localStorage.getItem('lastName'));
    console.log(localStorage.getItem('date'));
    console.log(localStorage.getItem('occupation'));
    console.log(localStorage.getItem('company'));
}

    return (
        <div className="container">
          <form onSubmit={onSubmit}>
          <input
          type="text" 
          placeholder="First name" value={firstName} onChange = {(e) => handleChange(e)} id="firstName" />
           <input
          type="text" 
          placeholder="Last name" value={lastName} onChange = {(e) => handleChange(e)} id="lastName" />
           <input
          type="date" value={date} onChange = {(e) => handleChange(e)} id="date" />
           <input
          type="text" 
          placeholder="Occupation" value={occupation} onChange = {(e) => handleChange(e)} id="occupation"/>
           <input
          type="text" 
          placeholder="Company" value={company} onChange = {(e) => handleChange(e)} id="company" />
          <button className="button1" type = "submit" >Submit</button><br></br>
          <button className="button2" onClick={getData} type = "button" >Get Data</button>
          </form>
        </div>
      );
}

export default App;

