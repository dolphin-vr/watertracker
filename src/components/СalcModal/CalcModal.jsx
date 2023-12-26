import React, { useState } from 'react';

const CalcModal = ({ onClose }) => {
  const [result, setResult] = useState(1.5);
  const [values, setValues] = useState({
    gender: 'girl',
    weight: 0,
    time: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [rate, setRate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('request daily rate', rate);
    // Dispatch (addWaterThunk)
    
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleRate = e => {
    setRate(e.target.value);
  };

  const handleBlur = () => {
    calculate(values.gender, values.weight, values.time);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const calculate = (gender, weight = 0, time = 0) => {
    let calculatedResult = 0;
    switch (gender) {
      case 'girl':
        if (weight >= 0 && time >= 0) {
          calculatedResult = weight * 0.03 + time * 0.4;
        }
        break;
      case 'man':
        if (weight >= 0 && time >= 0) {
          calculatedResult = weight * 0.04 + time * 0.6;
        }
        break;
      default:
        break;
    }
    setResult(calculatedResult.toFixed(1));
  };

  return (
    isModalOpen && (
      <div>
        <div>
          <p>My daily norma</p>

          <button type="button" onClick={handleClose}>
            <svg
              xmlns="x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#407BFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <ul>
            <li>
              <p>
                For girl:
                <span>V=(M*0.03)+(T*0.4)</span>
              </p>
            </li>
            <li>
              <p>
                For man:
                <span>V=(M*0.04)+(T*0.6)</span>
              </p>
            </li>
          </ul>

          <p>
            <span>*</span>V is the volume of the water
            norm in liters per day, M is your body weight, T is the time of
            active sports, or another type of activity commensurate in terms of
            loads (in the absence of these, you must set 0)
          </p>

          <p>Calculate your rate:</p>
          <div>
            <div>
              <input
                type="radio"
                value="girl"
                name="gender"
              />
              <label htmlFor="Woman">For girl</label>
            </div>
            <div>
              <input
                type="radio"
                value="man"
                name="gender"
              />
              <label htmlFor="Man">For man</label>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Your weight in kilograms:</label>
              <input
                onBlur={handleBlur}
                type="number"
                name="weight"
                value={values.weight}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>
                The time of active participation in sports or other activities
                with a high physical. load:
              </label>
              <input
                onBlur={handleBlur}
                type="number"
                name="time"
                value={values.time}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>
                The required amount of water in liters per day:
              </p>
              <p>{result}L</p>
            </div>

            <div>
              <label>
                The required amount of water in liters per day:
              </label>
              <input
                type="number"
                id="water"
                name="rate"
                onChange={handleRate}
                onBlur={handleBlur}
                value={rate}
              />
            </div>
            <button type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default CalcModal;