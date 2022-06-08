import React from "react";
import TypeWriter from "react-typewriter";
import {FaStethoscope} from "react-icons/fa";
import styled from "styled-components";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
        <li className="current">
        <FaStethoscope />
        
          </li>
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Doctor
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Certification
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `${name}.` : null}</TypeWriter>
          </h1>
         
          <h2>Services Offered in A Central Dispensary</h2>
              <ul>A central dispensary is a small designated area built specifically for medical purposes at {city}. People tend to visit us to seek medical attention from well-qualified doctor.</ul>
            <h3 style={{fontWeight :"bolder"}}>Medical Treatment</h3>
            <ul>When people fall sick, they tend to search for medical services which are necessary for their well-being. The medical services provided in the central dispensary which a patient receives include testing or diagnosis and then the administering of relevant drugs.</ul>
            <h3 style={{fontWeight :"bolder"}}>Guidance and Counselling</h3>
            <ul>At Central Dispensary, all of our treatment plans and routines are designed with the goal of restoring a full range of motion. We provide the roadmap that shows you how we will get you out of pain and guide you to where you want to be.</ul>
            {/* <h3 style={{fontWeight :"bolder"}}>Medical Check-Up</h3>
            <ul>It is not every time a person visits the  our dispensary that they require medical assistance. Today, most people visit our Central dispensary for medical checkups. The check-ups are meant to keep a regular tab on the health progress of the patient. They are essential in the prevention of diseases transforming from a bad situation to a worse one.</ul> */}

        
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
