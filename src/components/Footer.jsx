import React from 'react';
import { Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row" className="m-0">
          <div className="social-media">
            <div className="box-icon">
              <a href="https://www.twitter.com/">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <div className="box-icon">
              <a href="https://www.linkedin.com/">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="box-icon">
              <a href="https://www.facebook.com/">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <div className="nav-footer">
            <Nav>
              <Nav.Item>
                <Nav.Link href="#">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">For Business</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Suggestion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Help & FAQs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Pricing</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <div className="copy-right">
            <div className="copy">
              &copy; 2020 Social Network. All Rights Reserved.
            </div>
            <Nav>
              <Nav.Item>
                <Nav.Link href="#">Privacy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Terms</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
