import React from "react";
import "./contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="my-12 md:flex md:h-screen">
        {/* text part  */}
        <div className="contact-bg-img bg-fixed bg-contain  w-full md:w-1/3  py-12 px-4">
          <div className="max-w-3xl mx-auto ">
            <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
            <p className=" mb-8">
              I'm always open to new opportunities and collaborations. Whether
              you have a project idea, a question, or just want to say hello,
              feel free to reach out to me using the contact information below.
            </p>

            <div className=" space-y-4 ">
              <a
                href="tel:+8801798658445"
                className="flex items-center gap-x-2"
              >
                <FaPhoneAlt className="text-cyan-700"></FaPhoneAlt>
                <span className="hover:text-blue-600"> +8801798658445</span>
              </a>

              <a
                href="mailto:shifa.mbstu@gmail.com"
                className=" flex items-center gap-x-2"
              >
                <FaEnvelope className="text-cyan-700"></FaEnvelope>
                <span className=" hover:text-blue-600">
                  shifa.mbstu@gmail.com
                </span>
              </a>
              <p className="flex items-center gap-x-2">
                <FaMapMarkerAlt className="text-cyan-700"></FaMapMarkerAlt>
                <span className="hover:text-blue-600">Tangail, Bangladesh</span>
              </p>
            </div>
          </div>
        </div>

        {/* form  */}
        <div className="w-full md:w-2/3 mx-auto lg:w-[500px] drop-shadow-lg bg-white">
          <form className="p-12">
            {/* <h1 className="backdrop-blur-sm text-4xl pb-8">Say Something</h1> */}
            <div className="space-y-5">
              {/* email  */}
              <div className="space-y-2">
                <label htmlFor="email" className="block">
                  Email*
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                  />
                </div>
              </div>

              {/* subject */}
              <div className="space-y-2">
                <label htmlFor="password" className="block">
                  Subject*
                </label>
                <div className="relative">
                  <input
                    id="subject"
                    type="text"
                    placeholder="which subject you talk....?"
                    className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                  />
                </div>
              </div>
              {/* message */}
              <div className="space-y-2">
                <label htmlFor="password" className="block">
                  Message*
                </label>
                <div className="relative">
                  <textarea
                    type="text"
                    placeholder="what about you say....?"
                    className=" p-3 block w-full pl-10 drop-shadow-lg outline-none"
                    rows={3}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button className=" bg-cyan-700  mb-4 md:mb-0 text-white mx-auto h-[50px] w-[150px] overflow-hidden rounded-md shadow-md duration-300 hover:scale-95 hover:shadow-lg shadow-slate-800">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
