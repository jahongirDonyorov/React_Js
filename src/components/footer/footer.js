import React from "react";
import './footer.css'
const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__logo">LOGO</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Voluptatum necessitatibus ratione ipsam nam 
          tempora molestiastemporibus tenetur accusantium 
          debitis omnis!
        </p>
      </div>
      <ul className="footer__minu">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
      </ul>
      <ul className="footer__minu">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
      </ul>
    </footer>
  )
}

export default Footer