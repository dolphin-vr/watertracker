import React, { useState } from 'react';

const DailyNormaModal = () => {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [result, setResult] = useState(null);
  const [userWaterInput, setUserWaterInput] = useState('');

  const calculateNorma = () => {
    const M = parseFloat(weight) || 0;
    const T = parseFloat(activityTime) || 0;

    let V;

    if (gender === 'man') {
      V = (M * 0.04) + (T * 0.6);
    } else {
      V = (M * 0.03) + (T * 0.4);
    }

    setResult(V);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    calculateNorma();
  };

  const handleActivityTimeChange = (e) => {
    setActivityTime(e.target.value);
    calculateNorma();
  };

  const handleUserWaterInputChange = (e) => {
    setUserWaterInput(e.target.value);
  };

  return (
    <div className="modal">
      <h2>Daily Norma Modal</h2>
      
        <label>
          <input
            type="radio"
            value="man"
            checked={gender === 'man'}
            onChange={() => setGender('man')}
          />
          Man
        </label>
        <label>
          <input
            type="radio"
            value="woman"
            checked={gender === 'woman'}
            onChange={() => setGender('woman')}
          />
          Woman
        </label>
     
         <label>
          Your weight in kilograms:
          <input type="number" value={weight} onChange={handleWeightChange} />
        </label>
     
      
        <label>
          The time of active participation in sports or other activities with a high physical load:
          <input type="number" value={activityTime} onChange={handleActivityTimeChange} />
        </label>
      
      
        <label>
          Write down how much water you will drink:
          <input type="number" value={userWaterInput} onChange={handleUserWaterInputChange} />
        </label>
      
     
      <p>Your daily water norm is: {userWaterInput || result.toFixed(2)} L</p>
      <button type='button'>Save</button>
       
      
    </div>
  );
};

export default CalcModal;