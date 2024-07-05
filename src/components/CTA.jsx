import React from 'react'
import styles, { layout } from '../style'
import googleplay from "../assets/svg/googleplay.svg";
import appstore from "../assets/svg/apple.svg";
import mockup from "../assets/cta/mockup.svg";
import { useState } from 'react';

const CTA = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      {/* CTA CARD */}
      <section className={`${layout.section} container p4`}>
        <div className={`${layout.sectionInfo} bg-[url('src/assets/cta/cta1.png')] bg-opacity-95
          p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center bg-color-7 
          rounded-3xl text-[#0A1117]`}>
          <div className="p-5">
            <h1 className="h5">Download our mobile app</h1>
            <br className='sm:block hidden' />
            <p className={`${styles.paragraph} max-w-[740px] mt-5 md:mt-0 font-`}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
            <div className='flex gap-4 mx-auto'>
              <div className='mt-5 flex items-center'>
                <button type='button' className={`rounded-full py-2 px-6 bg-black font-medium text-[15px] text-white outline-none flex items-center space-x-2 ${styles}`}>
                  <img src={googleplay} alt='googleplay' className='w-6 h-6'/>
                  <span>Download from Google Play</span>
                </button>
              </div>
              <div className='mt-5 flex items-center'>
                <button type='button' className={`rounded-full py-2 px-6 w-auto bg-black font-medium text-[15px] text-white outline-none flex items-center space-x-2 ${styles}`}>
                  <img src={appstore} alt='appstore' className='w-6 h-6'/>
                  <span>Download from App Store</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex -translate-y-12"> {/* Hidden on small screens, visible on medium and larger screens */}
            <img src={mockup} alt="Image" className="w-auto h-[400px] rounded-full" />
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS CARD */}
      <section className={`${layout.section} container p4`}>
        <div className={`${layout.sectionInfo}
          p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center bg-slate-900
          rounded-3xl text-white`}>
          <div className="p-5">
            <h1 className="h5">Frequently asked Questions</h1>
            <br className='sm:block hidden' />
            <p className={`${styles.paragraph} max-w-[740px] mt-5 md:mt-0 font-`}>
            If you have other questions to us, let us know and send us a message by 
            clicking the send message button below. Were happy to serve you.
            </p>

            {/* SEND MESSAGE BUTTON */}
            <div className='flex gap-4 mx-auto w-full'>
              <div className='flex-1 mt-5'>
                <button type='button' className={`w-full rounded-full py-2 px-6
                  font-medium text-[15px] text-white outline-none flex items-center
                  bg-gradient-to-r from-[#FF7431] to-[#FF6943]
                  justify-center space-x-2 ${styles}`}>
                  <span className=''>Send Message</span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex w-full bg-white p-3 rounded-3xl"> {/* Hidden on small screens, visible on medium and larger screens */}
            <div className='w-full py-2 text-[#192025]'>
                <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
                  <span>How to return wrong items?</span>
                  {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}

                  <svg
                    className="fill-[#FF762F] shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                      }`}
                    />
                  </svg>
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out
                  text-slate-600 text-sm 
                  ${accordionOpen 
                  ? 'grid-rows-[1fr] opacity-100' 
                  : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className='overflow-hidden'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                  It is a long established fact that a reader will be distracted.
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default CTA