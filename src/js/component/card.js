import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export function MyCard(props){
    return (
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="..." alt="Card image cap">
          <div className="card-body">
            <h5 className="card-title">{title.prop}</h5>
            <p className="card-text">{text.prop}</p>
            <a href="#" className="btn btn-primary">{Image.prop}</a>
          </div>
        </div>
    );
}

card.PropTypes = {
title: PropTypes.string
text: PropTypes.string
image: PropTypes.string
};

