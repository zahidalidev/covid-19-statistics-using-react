import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/main.css";

const SearcBox = ({onValue, onAutoFocus, onSearch}) => {
    return ( 
        
        <form  className="form-input form-inline active-cyan-4 col-sm-12">
            <i style={{color: "#00122f", paddingRight: 20, fontSize: 20}} className="fa fa-search" aria-hidden="true"></i>
            <input 
                className="form-control form-control-sm mr-3 w-75"
                style={{ boxShadow: "2px 2px 2px 2px #00122f", padding: 20}} 
                value={onValue}
                type="text" 
                name="search"
                autoFocus = {onAutoFocus}
                placeholder="Enter any Country..."
                onChange={onSearch}
            />
            
        </form>
        
     );
}
 

export default SearcBox;