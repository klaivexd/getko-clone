import React from 'react'
import styles, { layout } from '../style'
import googleplay from "../assets/svg/googleplay.svg";
import appstore from "../assets/svg/apple.svg";
import mockup from "../assets/cta/mockup.svg";

const CTA = () => {
  return (
    <>
      <section className={`${layout.section} container p4`}>
        <div className={`${layout.sectionInfo} p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center bg-color-7 rounded-3xl text-white`}>
          <div className="p-5">
            <h1 className="h5">Download our mobile app</h1>
            <br className='sm:block hidden' />
            <p className={`${styles.paragraph} max-w-[740px] mt-5 md:mt-0 font-extralight`}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
            <div className='flex gap-4 mx-auto'>
              <div className='mt-5 flex items-center'> {/* Adjusted flex container */}
                <button type='button' className={`rounded-full py-2 px-6 bg-black font-medium text-[15px] text-white outline-none flex items-center space-x-2 ${styles}`}>
                  <img src={googleplay} alt='googleplay' className='w-6 h-6'/> {/* Adjusted size for icon */}
                  <span>Download from Google Play</span>
                </button>
              </div>
              <div className='mt-5 flex items-center'> {/* Adjusted flex container */}
                <button type='button' className={`rounded-full py-2 px-6 w-auto bg-black font-medium text-[15px] text-white outline-none flex items-center space-x-2 ${styles}`}>
                  <img src={appstore} alt='appstore' className='w-6 h-6'/> {/* Assuming 'appstore' variable for App Store logo */}
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

    </>
  )
}

export default CTA