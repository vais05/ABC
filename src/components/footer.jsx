import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">

          <div className="footer-top">

            <div className="footer-brand">

              <a href="#" className="logo">REA</a>

              <p className="section-text">
                RAJA EDUCATIONAL ACADEMY<br />
                REA<br />
                ...the raising wise<br />
              </p>

              <ul className="social-list">

                <li>
                  <a href="https://www.facebook.com/people/RAJ-EDUCATIONAL-ACADEMY/100048616584578/" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/rajushendre28/" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

              </ul>

            </div>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Explore</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">About Us</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Upcoming Events</span>
                </a>
              </li>

            </ul>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Contact Us</span>
                </a>
              </li>


              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Popular Courses</span>
                </a>
              </li>

            </ul>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Contact Info</p>
              </li>

              <li className="footer-item">
                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

                <address className="footer-link">
                  # 40-27-12, First Floor,Beside Vijayawada Service Station Pinnamaneni Care Hospital Road, Gayathri Nagar,VIJAYAWADA.Krishna Dist.,A.P
                </address>
              </li>

              <li className="footer-item">
                <ion-icon name="call" aria-hidden="true"></ion-icon>

                <a href="tel:+13647657839" className="footer-link">9912450699</a>
              </li>

              <li className="footer-item">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <a href="mailto:contact@REA.com" className="footer-link">rajaeduacademy@gmail.com</a>
              </li>

            </ul>

          </div>

          <div className="footer-bottom">
            <p className="copyright">
              Copyright 2024 REA. All Rights Reserved <a href="#" className="copyright-link"></a>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
