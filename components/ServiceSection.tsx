import services from '@/data/Services'
import React from 'react'
import ServiceCard from './Cards/ServiceCard'

function ServiceSection() {
  return (
    <div className="m-auto container -mt-10">
          <p data-aos="fade-down" className="mb-10 lg:text-5xl text-3xl font-semibold mx-5 lg:mx-0 text-center">
            Welcome to Mayvent Management
          </p>
          <div data-aos="fade-down" className="mb-20 lg:text-xl mx-5 lg:mx-0 text-center">
            Mayvent Management is a trusted, one-stop solution provider for HR
            services in India. We are committed to driving your business growth
            by enhancing essential HR processes. Our offerings include business
            planning, designing organization structures for sustainability,
            manpower planning, recruitment, payroll management, statutory
            compliance, performance management, employee engagement, and
            grievance handling. <br />
            <br />
            Our customized and comprehensive suite of services caters to your
            unique business needs, ensuring seamless and efficient operations.
            With an experienced team of professionals at the helm, we provide
            unmatched quality and efficiency to help you achieve your goals.
          </div>

          <div>
            <div data-aos="fade-down" className="text-center text-3xl font-semibold mb-10">
              Our Services
            </div>

            <div data-aos="zoom-in" className="grid lg:grid-cols-5 grid-cols-1 mb-10 mx-10 lg:mx-20 gap-4 lg:gap-10">
              {services.map((item, index) => (
                <div key={index} className="col-span-1"><ServiceCard data={item}/></div>
              ))}
            </div>

            <div data-aos="fade-down" className="text-center md:text-2xl mx-5 lg:mx-0 mb-10 text-gray-600">
              We are <span className="font-bold">dedicated</span> to providing
              exceptional service with a relentless focus on achieving total
              customer satisfaction.
            </div>
          </div>
        </div>
  )
}

export default ServiceSection
