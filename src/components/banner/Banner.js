import React from 'react';
import banner from '../../images/banner-image.jpg';
import avatar from '../../images/avatar.png';

const Banner = () => {
    return (
        <div className="">
            <img src={banner} alt="banner" className='w-full max-h-[192px]'></img>
            <div className=" flex flex-col md:flex-row items-center md:items-end justify-between px-9">
              <div className="h-[64px] flex items-end">
                <img src={avatar} alt="avatar" className="object-cover h-[128px]" />
                <h3 className="text-gray-900 font-bold text-2xl">Ricardo Cooper</h3></div>
              <div className="flex items-center mt-3 md:mt-0">
                <a href="/#" className="flex items-center bg-white shadow-sm border border-gray-300 rounded-md py-2 px-3"> 
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0016 4.19497 16.5104 3.99991 16 4H4C3.48958 3.99991 2.99845 4.19497 2.62718 4.54523C2.25591 4.89549 2.0326 5.37444 2.003 5.884Z" fill="#9CA3AF"/>
                  <path d="M18 8.118L10 12.118L2 8.118V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.118Z" fill="#9CA3AF"/>
                  </svg>
                  <p className='ml-2 text-gray-700 text-sm'>Message</p>
                </a>
                <a href="/#" className="flex items-center bg-white shadow-sm border border-gray-300 rounded-md py-2 px-3 ml-6"> 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1C0 0.447715 0.447715 0 1 0H3.15287C3.64171 0 4.0589 0.353413 4.13927 0.835601L4.87858 5.27147C4.95075 5.70451 4.73206 6.13397 4.3394 6.3303L2.79126 7.10437C3.90756 9.87832 6.12168 12.0924 8.89563 13.2087L9.6697 11.6606C9.86603 11.2679 10.2955 11.0492 10.7285 11.1214L15.1644 11.8607C15.6466 11.9411 16 12.3583 16 12.8471V15C16 15.5523 15.5523 16 15 16H13C5.8203 16 0 10.1797 0 3V1Z" fill="#9CA3AF"/>
                  </svg>
                  <p className='ml-2 text-gray-700 text-sm'>Call</p>
                </a>
              </div>
            </div>
        </div>
  );
};

export default Banner;