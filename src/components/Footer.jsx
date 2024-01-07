import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="flex md:items-center justify-center flex-col border-2 border-solid py-20 px-3 sm:flex-start">
        <div>
          <img
            src={"/images/Herologo.png"}
            alt="Example"
            className="ml-0 mr-500"
          />
        </div>
        <div className=" flex items-center  font-inter font-medium text-wrap text-[#5A6475] pt-5 text-[16px] ">
          Mode UI is a comprehensive design system that empowers
        </div>
        <div className=" flex items-center  font-inter font-medium text-wrap text-[#5A6475]  text-[16px]  ">
          designers and developers to create cohesive and visually stunning
        </div>
        <div className=" flex items-center  font-inter font-medium  text-wrap text-[#5A6475]   text-[16px] ">
          user interfaces across various platforms and devices
        </div>
      </div>

      <div className="flex items-center justify-center flex-row py-20">
        <div className="px-20">
          <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="px-20">
          <ul>
            <li>Product</li>
            <li>Figma Design System</li>
            <li>Ios Kit</li>
            <li>Android Kit</li>
            <li>Wireframe</li>
          </ul>
        </div>
        <div className="px-20">
          <ul>
            <li>Resources</li>
            <li>Templates</li>
            <li>Landing Pages</li>
            <li>Documentation</li>
            <li>Comp Library</li>
          </ul>
        </div>
        <div className="px-20">
          <ul>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li> Disclaimer</li>
            <li>Affiliate Programs</li>
          </ul>
        </div>
        <div className="px-20">
          <ul>
            <li>Support</li>
            <li>Help Centre</li>
            <li>Raise Ticket</li>
            <li>Report</li>
            <li>Refund</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer