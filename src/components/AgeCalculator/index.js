// App.js
import React, { useState } from 'react';
import './index.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState(null);
  const [errorMessage, setMessage] = useState('')

  const calculateAge = () => {
    if(birthDate && birthMonth && birthYear){
        const currentDate = new Date();
        const enteredDate = new Date(`${birthYear}-${birthMonth}-${birthDate}`);
        const ageInMilliseconds = currentDate - enteredDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
        setAge(ageInYears);
        setMessage('')
        setBirthDate('')
        setBirthMonth('')
        setBirthYear('')
        
    }
    else{
        setMessage('please give all the fields')
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className='another'>
        <label>Date of Birth:</label>
        <div className="input-group">
            <input
            type="number"
            placeholder="Date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            />
            <input
            type="number"
            placeholder="Month"
            value={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
            />
            <input
            type="number"
            placeholder="Year"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            />
        </div>
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
      <p className='error-msg'>{errorMessage}</p>
    </div>
  );
};

export default AgeCalculator;
