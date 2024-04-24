import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footerHolder'>
        <div className='footerContainer'>

          <div className='ThelogoContainer'>
            <img src='/NavLogo.svg' alt='' style={{
              width: '200px',
              height: '70px',
              margin: '0'
            }}/>
            <p>Generalizing aid from home </p>
            <ul>
              <li>
                <img src="/SocialMedia/Facebook.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/Instagram.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/LinkedIn.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/Twitter.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/YouTube.svg"></img>
              </li>
            </ul>
          </div>

          <div className="footerContacts">
            <p className="footerGreen">Contact Us</p>
            <span>
              <span>
                <img src="/Contacts/Email.svg"></img>
              </span>
              <span>shreyaaarov.com</span>
            </span>
            <span>
              <span>
                <img src="/Contacts/Phone.svg"></img>
              </span>
              <span>+91 9696461081</span>
            </span>
            <span>
              <span>
                <img src="/Contacts/Mark.svg"></img>
              </span>
              <span>Graphic Era University,Dehradun,Uttrakhand</span>
            </span>
          </div>
        </div>

          <div>
            <hr className="divLine"></hr>
          </div>
        <div className='footerBottom'>
          <p>© 2024 All Rights Reserved | Privacy Policy

          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
