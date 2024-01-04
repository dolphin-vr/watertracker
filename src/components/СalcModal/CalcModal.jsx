import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateWaterNorma } from '../../redux/user/userOperations';
import { Container,Title,Backdrop } from './CalcModal.styled';

const CalcModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [result, setResult] = useState(2);
  const [values, setValues] = useState({
    gender: 'girl',
    weight: 0,
    time: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [rate, setRate] = useState('');

  const handleSubmit = (e) => {
   
    e.preventDefault();
    dispatch(updateWaterNorma());

    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleRate = (e) => {
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
    <Modal
    isOpen={true} 
    onRequestClose={handleClose}
    contentLabel="CalcModal"
  >
    <Backdrop>
      <Container>
         <Title>My Daily Norma</Title>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        
        <ul>
          <li>
            For girl: <span>V=(M*0.03)+(T*0.4)</span>
          </li>
          <li>
            For man: <span>V=(M*0.04)+(T*0.6)</span>
          </li>
        </ul>

        <p>
          <span>*</span>V is the volume of the water norm in liters per day, M is
          your body weight, T is the time of active sports, or another type of
          activity commensurate in terms of loads (in the absence of these, you
          must set 0)
        </p>

        <h3>Calculate Your Rate:</h3>
        <div>
          <div>
            <input type="radio" value="girl" name="gender" />
            <label htmlFor="Woman">For girl</label>
          </div>
          <div>
            <input type="radio" value="man" name="gender" />
            <label htmlFor="Man">For man</label>
          </div>
        </div>

        <form>
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
              The time of active participation in sports or other activities with
              a high physical load:
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
            <div>The required amount of water in liters per day:</div>
            <div>{result}L</div>
          </div>

          <div>
            <label>Write down how much water you will drink:</label>
            <input
              type="number"
              id="water"
              name="rate"
              onChange={handleRate}
              onBlur={handleBlur}
              value={rate}
            />
          </div>
          <button type="submit" onSubmit={handleSubmit}>Save</button>
        </form>
      </Container>
      </Backdrop>
      </Modal>
  
  );
};

export default CalcModal;
