import React from 'react'
// import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import '../css/navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" style={{ height: "6.5vw" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ marginLeft: "2.6w" }}>
            <img src={Logo} alt="Logo" className='logoimage' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown mx-5">
                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className='dropDownHead'>Organic Growth</span>
                </a>
                <ul className="dropdown-menu dropdown-menu1">
                  <div className='mainContainer'>
                    <div className="box box1">
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/website-seo.svg" alt="" /> Website SEO</h3>
                      <li className="items"> <a href="/"> SEO Service</a></li>
                      <li className="items"> <a href="/"> SEO Audit</a></li>
                      <li className="items"> <a href="/"> Local SEO</a></li>
                      <li className="items"> <a href="/"> National SEO</a></li>
                      <li className="items"> <a href="/"> International SEO</a></li>
                      <li className="items"> <a href="/"> Techenical SEO</a></li>
                      <li className="items"> <a href="/"> E-Commerce SEO</a></li>
                      <li className="items"> <a href="/"> Enterprise SEO</a></li>
                    </div>
                    <div className="box box2">
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/cms-besed-seo.svg" alt="" /> CMS Based SEO</h3>
                      <li className="items"> <a href="/"> Wordpress SEO</a></li>
                      <li className="items"> <a href="/"> Squarespace SEO</a></li>
                      <li className="items"> <a href="/"> Wix SEO</a></li>
                    </div>
                    <div className="box box3">
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/social-media.svg" alt="" style={{ marginRight: "0.4vw" }} />Social Media</h3>
                      <li className="items"> <a href="/"> Social Media Optmisation</a></li>
                      <li className="items"> <a href="/"> Facbook Managment</a></li>
                      <li className="items"> <a href="/"> Instagram Managment</a></li>
                      <li className="items"> <a href="/"> Twitter Managment</a></li>
                      <li className="items"> <a href="/"> Linkdin Managment</a></li>
                      <li className="items"> <a href="/"> Pinterest Managment</a></li>
                    </div>
                    <div className="box box4">
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/youtube.svg" alt="" style={{ marginRight: "1vw" }} /> YouTube</h3>
                      <li className="items"> <a href="/"> YouTube SEO</a></li>
                      <li className="items"> <a href="/"> YouTube Managment</a></li>
                    </div>
                    <div className="box box5" style={{ width: "22vw" }}>
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/casestudy.svg" alt="" style={{ marginRight: "1vw" }} />Case Studies</h3>
                      <li className="items"> <a href="/"> Driving Cutting-Edge PPC Results With Improve Digitally</a></li>
                      <li className="items"> <a href="/"> SEO Provides New Users, Traffic Increase And Top Rankings</a></li>
                      <li className="items"> <a href="/"> Indigenous Organic Growth To History Of Soccer</a></li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className='dropDownHead'>Marketing</span>
                </a>
                <ul className="dropdown-menu dropdown-menu2">
                  <div className='mainContainer'>
                    <div className="box box1">
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/Website-Advertising.svg" alt="" style={{ marginRight: "1vw" }} /> Website Advertising</h3>
                      <li className="items"> <a href="/"> Search Engine Marketing</a></li>
                      <li className="items"> <a href="/">PPC Advertising</a></li>
                      <li className="items"> <a href="/">Google Ads</a></li>
                      <li className="items"> <a href="/">Amazon Ads</a></li>
                      <li className="items"> <a href="/">Shoping Ads</a></li>
                      <li className="items"> <a href="/">Video Ads</a></li>
                      <li className="items"> <a href="/">Remarketing Advertising</a></li>
                    </div>
                    <div className="box box2">
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/Social-Media-Marketing.svg" alt="" style={{ marginRight: "1vw" }} />Social Media Marketing</h3>
                      <li className="items"> <a href="/"> Social Media Marketing</a></li>
                      <li className="items"> <a href="/">Facebook Ads</a></li>
                      <li className="items"> <a href="/">Instagram Ads</a></li>
                      <li className="items"> <a href="/">Twitter Ads</a></li>
                      <li className="items"> <a href="/">Linkdin Ads</a></li>
                      <li className="items"> <a href="/">Pinterest Ads</a></li>
                      <li className="items"> <a href="/">YouTube Ads</a></li>
                    </div>
                    <div className="box box3">
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/Email-Marketing.svg" alt="" style={{ marginRight: "1vw" }} />Email Marketing</h3>
                      <li className="items"> <a href="/"> Email Marketing Services</a></li>
                      <li className="items"> <a href="/"> Mailchimp Email Marketing</a></li>
                      <li className="items"> <a href="/"> HubSpot Email Marketing</a></li>
                      <li className="items"> <a href="/"> Aweber Email Marketing</a></li>
                      <li className="items"> <a href="/"> ConvertKit Email Marketing</a></li>
                      <li className="items"> <a href="/"> Active Campaign Email Marketing</a></li>
                    </div>
                    <div className="box box4" style={{ width: "21vw", marginRight: "1vw" }}>
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/Content-Marketing.svg" alt="" style={{ marginRight: "1vw" }} />
                        Content Market</h3>
                      <li className="items"> <a href="/"> Content Writing</a></li>
                      <li className="items"> <a href="/"> Copy Writing</a></li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown mx-5">
                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className='dropDownHead'>Web Development</span>
                </a>
                <ul className="dropdown-menu dropdown-menu3">
                  <div className='mainContainer'>
                    <div className="box box1" >
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/Website-Development.svg" alt="" style={{ marginRight: "1vw" }} /> Website Development</h3>
                      <li className="items"> <a href="/"> WordPress Development</a></li>
                      <li className="items"> <a href="/"> Shopify Development</a></li>
                      <li className="items"> <a href="/"> Squarespace Development</a></li>
                      <li className="items"> <a href="/"> Wix site Development</a></li>
                      <li className="items"> <a href="/"> PHP web Development</a></li>
                      <li className="items"> <a href="/"> React Web Development</a></li>
                    </div>
                    <div className="box box2" style={{ width: "28vw" }}>
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/cms-besed-seo.svg" alt="" style={{ marginRight: "2vw" }} />Web Design</h3>
                      <li className="items"> <a href="/"> Wordpress SEO</a></li>
                      <li className="items"> <a href="/"> Squarespace SEO</a></li>
                      <li className="items"> <a href="/"> Wix SEO</a></li>
                    </div>
                    <div className="box box5" style={{ width: "39vw" }}>
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/Web-Design.svg" alt="" style={{ marginRight: "2vw" }} />Case Studies</h3>
                      <li className="items"> <a href="/"> Driving Cutting-Edge PPC Results With Improve Digitally</a></li>
                      <li className="items"> <a href="/"> SEO Provides New Users, Traffic Increase And Top Rankings</a></li>
                      <li className="items"> <a href="/"> Indigenous Organic Growth To History Of Soccer</a></li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className='dropDownHead'>Company</span>
                </a>
                <ul className="dropdown-menu dropdown-menu4">
                  <div className='mainContainer'>
                    <div className="box box1" >
                      <h4><img src="https://improvedigitally.com/wp-content/uploads/2022/08/Who-We-Are.svg" alt="" style={{ marginRight: "2vw" }} /> Who We Are</h4>
                      <li className="items"> <a href="/"> About us</a></li>
                      <li className="items"> <a href="/">Portfolio</a></li>
                      <li className="items"> <a href="/"> Consulting</a></li>
                      <li className="items"> <a href="/">Patner with us</a></li>
                      <li className="items"> <a href="/">Case Studies</a></li>
                      <li className="items"> <a href="/">Blogs</a></li>
                      <li className="items"> <a href="/">Xareers</a></li>
                      <li className="items"> <a href="/">Contact us</a></li>
                    </div>
                    <div className="box box5">
                      <h3><img src="https://improvedigitally.com/wp-content/uploads/2022/08/Blog-Icon.svg" alt="" style={{ marginRight: "2vw" }} />Blogs</h3>
                      <div className='mainCard'>
                        <div className="card">
                          <img src="https://improvedigitally.com/wp-content/uploads/2022/10/10-reasons-why-your-website-is-not-showing-up-on-google.webp" className="card-img-top" alt="" />
                          <div className="card-body">
                            <h5 className="card-title my-3">10 Reasons Why Your Website Isn’t Showing Up On Google (and How to Fix It)</h5>
                            <a href="/" className="btn btn-danger my-2">Learn More</a>
                          </div>
                        </div>
                        <div className="card">
                          <img src="https://improvedigitally.com/wp-content/uploads/2022/10/learn-diy-seo-strategy.webp" className="card-img-top" alt="" />
                          <div className="card-body">
                            <h5 className="card-title my-3">DIY SEO: Learn to Do it Yourself SEO In 6 Easy Steps</h5>
                            <a href="/" className="btn btn-danger my-2">Learn More</a>
                          </div>
                        </div>
                        <div className="card">
                          <img src="https://improvedigitally.com/wp-content/uploads/2018/09/3-3.png" className="card-img-top" alt="" />
                          <div className="card-body">
                            <h5 className="card-title my-3">DHow to Get to the Top of Google Search Results</h5>
                            <a href="/" className="btn btn-danger my-2">Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
            <div className="tele" style={{ fontWeight: "500", marginRight: "6vw", fontSize:"19px" }}>
              <a href='tel:9871232887' style={{textDecoration:"none", color:"black"}}><i class="fa-solid fa-phone-volume"></i> +91 9871232887</a>
            </div>
          </div>
          <a href="/"><button type="button" class="btn btn-secondary propsal">Get A Proposal</button></a>
        </div>
      </nav>
    </div>
  )
}
