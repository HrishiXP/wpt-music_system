import React from 'react';

const ContactUs = () => {
    const containerStyle = {
        backgroundColor: '#333',  // Light black background
        color: '#f0f0f0',         // Light grey text for contrast
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '600px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
        fontSize: '2em',
        marginBottom: '10px',
    };

    const paragraphStyle = {
        fontSize: '1em',
        lineHeight: '1.5',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const inputStyle = {
        padding: '10px',
        margin: '5px 0',
        borderRadius: '3px',
        border: '1px solid #555',
        backgroundColor: '#444',
        color: '#f0f0f0',
    };

    const buttonStyle = {
        padding: '10px',
        marginTop: '10px',
        borderRadius: '3px',
        border: 'none',
        backgroundColor: '#555',
        color: '#f0f0f0',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Contact Us</h1>
            <p style={paragraphStyle}>
                If you have any questions, feel free to reach out to us using the form below.
            </p>
            <form style={formStyle}>
                <input type="text" placeholder="Your Name" style={inputStyle} />
                <input type="email" placeholder="Your Email" style={inputStyle} />
                <textarea placeholder="Your Message" rows="5" style={inputStyle}></textarea>
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
