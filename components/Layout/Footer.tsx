import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const services = [
    { name: "About Us", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "Partners", link: "/" },
  ];
  const quickLinks = [
    { name: "In The News", link: "/" },
    { name: "Our Team", link: "/" },
    { name: "Privacy Policy", link: "/" },
    { name: "Terms & Conditions", link: "/" },
  ];

  function SVG() {
    return (
      <>
        <div>
          <svg className="w-4 pt-[3px] mr-2 fill-helper2" viewBox="0 0 512 512">
            <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z"></path>
          </svg>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pt-[74.4px] bg-[#2C2C2C]">
        <div className="container m-auto text-white">
          <div data-aos="fade-down" className="text-center text-[23.61px] lg:text-[48px] lg:w-[537px] m-auto font-extralight">
            If You are Interested For Virtual Meeting
          </div>

          <div data-aos="zoom-in" className="lg:mt-[43px] mt-[22.43px] lg:text-[16px] text-[7.87px] border-2 mb-[55px] lg:mb-[144px] hover:bg-white hover:text-gray-800 font-semibold duration-500 hover:scale-105 w-fit m-auto py-[10px] lg:py-[21px] lg:px-[51px] px-[25px] cursor-pointer">
            Schedule Meeting Now
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 mb-[42px]">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/">
                <div className="relative h-16 w-24 cursor-pointer mx-auto lg:mx-0 lg:mb-0 mb-[23px]">
                  <Image
                    src="https://res.cloudinary.com/dgyudczza/image/upload/v1688402995/mayvent/m_nitssu.png"
                    objectFit="contain"
                    layout="fill"
                    className="w-fit h-fit"
                    alt="logo"
                  />
                </div>
              </Link>
              <div className="mx-5 lg:mx-0 text-center lg:text-left text-opacity-[80%] text-[17px] font-thin mb-[53px] lg:mb-0">
                Our experienced team offers SMM, Designing, Google Ads, Facebook
                Ads, Lead Generation, Web & App Development, and OTT Platform
                development. All designed to give your venture an edge on the
                competition and propel it towards success.
              </div>
              <div></div>
            </div>

            <div className="col-span-1 mx-auto">
              <div className="text-white font-bold mb-[15px] lg:mb-[30px]">
                Links
              </div>
              {services.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div className="text-white w-fit font-extralight mb-[15px] lg:mb-[30px]">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className="col-span-1 mx-auto">
              <div className="text-white font-bold mb-[15px] lg:mb-[30px]">
                Company
              </div>
              {quickLinks.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div className="text-white w-fit font-extralight mb-[15px] lg:mb-[30px]">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className="col-span-2 mt-[96px] lg:mt-0 lg:col-span-1 mx-auto">
              <div className="text-white text-[24px] lg:text-base font-bold mb-[30px] lg:text-left text-center">
                Get in touch
              </div>

              <div className="text-white text-[16.24px] lg:text-left text-center lg:text-[16px] w-fit font-extralight">
                Mayvent Management (Pvt.) Limited Crystal Plaza, Unit no 101,
                next to Orange Hospital, Bhayandar East, Maharashtra 401105.
              </div>
              <div className="text-white text-[16px] font-extralight lg:text-left text-center">
                +91 9090909090
              </div>
              <div className="text-white text-[16px] font-extralight lg:text-left text-center">
                hello@mayvent.com
              </div>
            </div>
          </div>
          <div className="text-white text-[13px] lg:text-[16px] w-fit mx-auto font-extralight py-5">
            &#169; {new Date().getFullYear()} Mayvent. All Right Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
