import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#251d58' }}>
            <div className="container text-white p-3">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <i className="fas fa-map-marker"></i> Malibag,Dhaka Bangladesh
                </div>
                    <div className="col-lg-2 col-md-2">
                        <h4>Company</h4>
                        <p><a className="text-decoration-nonex text-white" href="">About</a></p>
                        <p><a className="text-decoration-none text-white" href="#ourWorks">Projects</a></p>
                        <p><a className="text-decoration-none text-white" href="">Portfolio</a></p>
                        <p><a className="text-decoration-none text-white" href="">Our Team</a></p>
                        <p><a className="text-decoration-none text-white" href="">Terms And Conditions</a></p>

                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h4>Quick Links</h4>
                        <p><a className="text-decoration-none text-white" href="">Quick Links</a></p>
                        <p><a className="text-decoration-none text-white" href="">Freelancers</a></p>
                        <p><a className="text-decoration-none text-white" href="">Rates</a></p>
                        <p><a className="text-decoration-none text-white" href="">Contact</a></p>
                        <p><a className="text-decoration-none text-white" href="">Our Blog</a></p>
                    </div>
                    <div className="col-lg-4 col-md-4 ">
                        <h4>About Us</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nihil, a repudiandae eius modi eligendi exercitationem expedita fugit excepturi molestias? Soluta perspiciatis modi porro voluptates.</p>
                    </div>
                </div>
                <h6 className="text-center py-5">©️ Developed by <a href="https://taibislamdipu.netlify.app/" target="_blank">Shafi Imam</a> {new Date().getFullYear()}</h6>
            </div>
        </footer>
    );
};

export default Footer;