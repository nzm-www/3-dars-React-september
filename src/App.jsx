import React, { useState } from 'react';
import Header from './components/Header/header';
import './App.css';
function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ firstName: '', lastName: '', email: '', imageUrl: '' });
  }


  return (
    <div className="App">
      <div className="container">
        <Header />
        <br /><br /><br />
        <form className='form' onSubmit={handleSubmit}>
          <div className='name'>
            <label>Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='surnam'>
            <label>SurName:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='email'>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='image'>
            <label>Img URL:</label> { }
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Yuborish</button>
        </form>
        <div className='containerrrr'>
          <div className='wraper'>

            {submittedData.map((data, index) => (
              <div key={index} className="card">
                {data.imageUrl && <img className='imga' src={data.imageUrl} alt="User" />}
                <p><strong>Name:</strong> {data.firstName}</p>
                <p><strong>SurName:</strong> {data.lastName}</p>
                <p><strong>Email:</strong> {data.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;