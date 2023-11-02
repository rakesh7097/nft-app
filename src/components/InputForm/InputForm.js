import React, { useState } from 'react';

// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


import './InputForm.css'

const InputForm = () => {
  const [formData, setFormData] = useState({
    resourceName: '',
    tps: '',
    responseTime: '',
    duration: '',
    httpMethod: '',
    requestBody:'',
  });

  const [showInputBox, setShowInputBox] = useState(false);

  const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleHttpMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setFormData({ ...formData, httpMethod: selectedMethod });

    // Set showInputBox to true when "POST" or "PUT" is selected
    setShowInputBox(selectedMethod === 'POST' || selectedMethod === 'PUT');
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setInputValue(''); // Clear the input when the option changes
  };

  const handleSubmit = async () => {
    console.log('entering api');
    try {
      // Send the data to the Spring Boot application
      await fetch('http://your-spring-boot-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      // Reset the form after successful submission
      setFormData({
        resourceName: '',
        tps: '',
        responseTime: '',
        duration: '',
        httpMethod: '',
        requestBody:'',
      });

    } catch (error) {
      console.error('Error:', error);
      console.log("ye idher aarha");
    }
  };

  return (
    <div className='Header'>
      <h2>JMX Input Form</h2>
      <form>
        <div>
          <label>Resource Name:</label>
          <input className='inputfild'
            type="text"
            name="resourceName"
            value={formData.resourceName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>TPS:</label>
          <input className='tps inputfild'
            type="number"
            name="tps"
            value={formData.tps}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Response Time:</label>
          <input className='inputfild'
            type="number"
            name="responseTime"
            value={formData.responseTime}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Duration:</label>
          <input className='inputfild'
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>HTTP Method:</label>
          <div>
            <select name="httpMethod" onChange={handleHttpMethodChange}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>
        </div>
        {showInputBox && (
          <div>
            <label>Request Body:</label>
            <input
              type="text"
              name="requestBody"
              value={formData.requestBody}
              onChange={handleInputChange}
            />
          </div>
        )}
      </form>
      <div className='input-button'>
        <button className="button n-button" onClick={handleSubmit}>Submit</button>
      </div>
      {/* <Button variant="contained" onClick={handleSubmit} >Submit</Button> */}
    </div>
  );
};

export default InputForm;