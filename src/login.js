import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
 
class NewComponent extends React.Component{ 
  render(){
    return(
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="login.css" />
        <form action="/action_page.php">
          <div className="container">
            <h1>Enter Details</h1>
            <p>Please fill in this form to confirm your flight booking</p>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />
            <label htmlFor="phno"><b>Mobile Number</b></label>
            <input type="number" placeholder="Enter Mobile Number" name="phno" id="phno" required />
            <label htmlFor="Name"><b>Full Name</b></label>
            <input type="name" placeholder="Enter Name" name="Name" id="Name" required />
            <hr />
            <p>By confirming your booking you agree to our <a href="https://policies.google.com/privacy?hl=en-US">Terms &amp; Privacy</a>.</p>
           <Link to="/booking"> <button type="submit" className="confirm">Proceed to booking</button></Link>
          </div>
        </form>
      </div>
    
    )}
  };

export default NewComponent;