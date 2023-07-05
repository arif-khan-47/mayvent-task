import Image from "next/image";
import React from "react";
import Facebook from "./svgs/Facebook";
import Twitter from "./svgs/Twitter";
import Linkedin from "./svgs/Linkedin";

function AboutSection() {
  const icons = [
    {
      link: "www.facebook.com",
      icon: <Facebook />,
    },
    {
      link: "www.twitter.com",
      icon: <Twitter />,
    },
    {
      link: "www.linkedin.com",
      icon: <Linkedin />,
    },
  ];
  return (
    <div className="m-auto container py-10 lg:px-56 text-white">
      <p
        data-aos="fade-down"
        className="mb-10 lg:text-5xl text-3xl font-semibold mx-5 lg:mx-0 text-center"
      >
        About Us
      </p>
      <div data-aos="fade-down" className="mb-10 lg:text-xl mx-5 lg:mx-0">
        Mayvent has been specializing in providing end-to-end cost-effective
        solutions for recruitments and HR practices since 2020. Catering to
        esteemed clients from diverse industries in India and abroad, Mayvent
        has grown into a highly successful consultancy, delivering quick and
        quality solutions to recruitment challenges in both IT and non-IT
        segments. Our services generate value and create a significant business
        impact for our clients. <br />
        <br />
        Our dedicated and competent professional team makes Mayvent one of the
        top consultants for providing both permanent and contract employment.
        Our valuable experience, combined with a meticulous and process-oriented
        approach, sets us apart from the competition. We work closely with our
        clients to understand their complexities, corporate culture, and
        business growth objectives. Our commitment to excellent client service,
        supported by cutting-edge technology, consistently yields remarkable
        results. Ultimately, we strive to create success stories for our
        client&apos;s businesses through effective partnerships.
      </div>

      <div data-aos="zoom-in">
        <div className="bg-white hover:scale-110 duration-500 cursor-pointer w-[15rem] mb-16 mt-24 relative rounded-3xl mx-auto">
          <div className="absolute -top-[70px] rounded-full border-4 border-blue-500 left-1/2 transform -translate-x-1/2">
            <div className="h-28 w-28 relative mx-auto bg-white rounded-full">
              <Image
                src="https://res.cloudinary.com/dgyudczza/image/upload/v1688402995/mayvent/reshma_lpwhqv.png"
                objectFit="contain"
                layout="fill"
                className="w-fit h-fit rounded-full"
                alt="img"
              />
            </div>
          </div>
          <div className="text-gray-700 text-center">
            <div className="text-2xl pt-20 font-semibold">Reshma Ambre</div>
            <div className="text-center pt-2 text-gray-500">Director</div>
          </div>

          <div className="justify-center gap-5 flex mt-6 flex-wrap pb-5">
            {icons.map((item, index) => (
              <div key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
