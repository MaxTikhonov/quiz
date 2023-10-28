import { Link } from 'react-router-dom';
import React from 'react';
const Navbar = ({ onClickDiscipline }) => {
 const discilpines = [{ url: '/englishquiz', title: 'English' }, { url: '/mathemquiz', title: 'Математика' }, { url: '/russianquiz', title: 'Русский' }]
 return (
  <nav>
   <ul>
    {discilpines.map((item, index) => {
     return <li key={index}><Link to={item.url} onClick={() => onClickDiscipline(index)}>{item.title}</Link></li>
    })}
   </ul>
  </nav>
 )
}

export default Navbar;