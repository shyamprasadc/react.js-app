import React from 'react'; 
import './Home.css';
import Welcome from './Welcome';
import Counter from './Counter';

 


function Contact(props) { 
    return(
        <div className="test" >
        <Welcome name="Welcome"/>
            <h1>{props.name} Details {props.id.name} {props.id.age}</h1> 
            <Counter/>
            <label>Email Address</label>
            <input type="text"/>
            <br/>
            <label>Message</label> 
            <button>Send</button>
        </div>
    )
} 

export default Contact;