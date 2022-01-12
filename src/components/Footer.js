import React from 'react'

import { FooterStyled } from './styled/Footer.styled'

import { Link, Router } from 'components/Router'

export default function Footer(){
return(
    <FooterStyled>
        <div>
            {/* <img  src="#" alt="LOGO" /> */}
            <h2>Joko</h2>
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/dynamic">Dynamic</Link>
        </div>
        <div>
            <ul>
                <li><a href="#"/>Github</li>
                <li><a href="#"/>linkedIn</li>
                <li><a href="#"/>instagram</li>
                <li><a href="#"/>stackoverflow</li>
            </ul>
        </div>
 </FooterStyled>
    
)
}


