import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // import
import 'react-toastify/dist/ReactToastify.css'; //  import styles

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [file, setFile] = useState(null); // File state
  const [success, setSuccess] = useState(false); 


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    if (file) formDataToSend.append('file', file);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
      const response = await axios.post(`${backendUrl}/api/contact`, formDataToSend);
  
      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        toast.success('Thank you for contacting me!');
        setFormData({ name: '', email: '', message: '' });
        setFile(null);
      }
      
      } catch (error) {
        console.error('Error sending message:', error.response || error);
        toast.error('Something went wrong. Please try again!');
      }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', color: '#000' }}>
      <h1>Contact Me</h1>
      <p>So we can create creative projects together</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email here"
          style={{
            display: 'block',
            marginBottom: '10px',
          }}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message here"
          style={{
            display: 'block',
            marginBottom: '10px',
            resize: 'none',
          }}
        />
        <label>Upload File (Optional)</label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          style={{
            display: 'block',
            outline: 'none',
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '15px',
          }}
        />
        <button
          type="submit"
          style={{ backgroundColor: '#f39c12', border: 'none', padding: '10px' }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#c27b08';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#f39c12';
            e.target.style.color = 'black';
          }}
        >
          Submit
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Contact;
