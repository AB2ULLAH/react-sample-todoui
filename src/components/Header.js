import React from 'react';
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { BsInbox } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import mondayLogo from '../media/monday-logo-header.png';
import userPhoto from '../media/user-photo-header.png';

export default function Header() {
  return (
    <header className="container h-12 flex justify-between items-center">
{/* Left Side */}
      <div className='lefts-side flex items-center'>
        <svg viewBox="0 0 47 32" fill="currentColor" width="25" height="25" aria-hidden="true" class="icon_89f9330058" data-testid="topbar-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3242 4.66502C17.3242 2.0886 19.4128 0 21.9892 0C30.6704 0 37.7049 7.03448 37.7049 15.7157C37.7049 24.3969 30.6704 31.4314 21.9892 31.4314H4.66502C2.0886 31.4314 0 29.3428 0 26.7664C0 24.19 2.0886 22.1014 4.66502 22.1014H21.9892C25.5176 22.1014 28.3749 19.2441 28.3749 15.7157C28.3749 12.1873 25.5176 9.33005 21.9892 9.33005C19.4128 9.33005 17.3242 7.24145 17.3242 4.66502Z" fill="url(#paint0_linear_2766_276158)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2457 0C13.5645 0 6.53003 7.03448 6.53003 15.7157C6.53003 24.3969 13.5645 31.4314 22.2457 31.4314H41.2991C41.6984 31.4454 42.1086 31.3079 42.441 30.9774L45.5369 27.8986C46.1589 27.28 46.1589 26.2735 45.5369 25.6549L42.441 22.5762C42.1353 22.2722 41.7236 22.1014 41.3955 22.1052L41.2627 22.1014H22.2457C18.7174 22.1014 15.8601 19.2441 15.8601 15.7157C15.8601 12.1873 18.7174 9.33005 22.2457 9.33005C24.8222 9.33005 26.9108 7.24145 26.9108 4.66502C26.9108 2.0886 24.8222 0 22.2457 0Z" fill="#00CA72"></path><defs><linearGradient id="paint0_linear_2766_276158" x1="28.5869" y1="10.5269" x2="25.7865" y2="23.5486" gradientUnits="userSpaceOnUse"><stop stop-color="#00CA72"></stop><stop offset="0.905957" stop-color="#00CA72" stop-opacity="0.6"></stop></linearGradient></defs></svg>
        <h1 className='site-title mr-3 ml-2 font-light'>
          <strong className='font-bold mr-1 text-md text-xl'>monday</strong> <span className='text-lg'>dev</span>
        </h1>
        <button className='border border-main text-sm font-medium text-main px-2 py-1 rounded-[4px] flex gap-2 hover:bg-btnHover hover:text-white hover:border-white'>
          <span><IoDiamondOutline className="mt-1" /></span>
          <span>See plans</span>
        </button>
      </div>

{/* Right Side */}
      <div className="right-side flex items-center gap-2">
        <div className="group hover:bg-[#D6E3DB] cursor-pointer p-2 rounded-normal text-nowrap z-40">
          <div className="relative">
            <figure>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
                className="icon_89f9330058 noFocusStyle_54b981792c"
                data-testid="icon"
              >
                <FaRegBell />
              </svg>
            </figure>
            <div className="absolute -bottom-14 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100">
              Notification
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]"></span>
            </div>
          </div>
        </div>
        <div className="group hover:bg-[#D6E3DB] cursor-pointer p-2 rounded-normal text-nowrap z-40">
          <div className="relative">
            <span className="absolute -top-2.5 -right-2.5 bg-white rounded-full px-1.5 text-xs flex justify-center items-center">1</span>
            <figure>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
                className="icon_89f9330058 noFocusStyle_54b981792c"
                data-testid="icon"
              >
                <BsInbox />
              </svg>
            </figure>
            <div className="absolute -bottom-14 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100">
              Inbox
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]"></span>
            </div>
          </div>
        </div>
        <div className="group hover:bg-[#D6E3DB] cursor-pointer p-2 rounded-normal text-nowrap z-40">
          <div className="relative">
            <figure>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
                className="icon_89f9330058 noFocusStyle_54b981792c"
                data-testid="icon"
              >
                <IoPersonAddOutline />
              </svg>
            </figure>
            <div className="absolute -bottom-14 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]"></span>
              Invite Members
            </div>
          </div>
        </div>
        <div className="group hover:bg-[#D6E3DB] cursor-pointer p-2 rounded-normal text-nowrap z-40">
          <div className="relative">
            <figure>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
                className="icon_89f9330058 noFocusStyle_54b981792c"
                data-testid="icon"
              >
                <IoExtensionPuzzleOutline />
              </svg>
            </figure>
            <div className="absolute -bottom-14 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]"></span>
              Monday Marketplace
            </div>
          </div>
        </div>
        <div className="group hover:bg-[#D6E3DB] cursor-pointer p-2 rounded-normal text-nowrap z-40">
          <div className="relative">
            <figure>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
                className="icon_89f9330058 noFocusStyle_54b981792c"
                data-testid="icon"
              >
                <IoSearchOutline />
              </svg>
            </figure>
            <div className="absolute -bottom-14 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]"></span>
              Search Everything
            </div>
          </div>
        </div>
        <div className="group hover:bg-[#D6E3DB] cursor-pointer p-2 rounded-normal text-nowrap z-40">
          <div className="relative">
            <span className="absolute -top-2.5 -right-2.5 bg-white rounded-full h-2.5 w-2.5 flex justify-center items-center">
              <span className="inline-block h-2 w-2 bg-[#d83a52] rounded-full"></span>
            </span>
            <figure>
              <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img" aria-hidden="true">
                <MdQuestionMark />
              </svg>
            </figure>
            <div className="absolute -bottom-14 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100">
              Help
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]"></span>
            </div>
          </div>
        </div>
        <div class="divider h-5 w-[1px] bg-[#d0d4e4]"></div>

        <div className="group hover:bg-[#D6E3DB] cursor-pointer p-2 rounded-normal text-nowrap z-40">
          <div className="relative">
            <figure>
              <svg
                viewBox="0 0 16 17"
                fill="currentColor"
                width="20"
                height="20"
                aria-hidden="true"
                className="icon_89f9330058 noFocusStyle_54b981792c"
                data-testid="icon"
              >
                <g fill="currentColor" clipPath="url(#clip0_1898_40324)">
                  <TbGridDots />
                </g>
                <defs>
                  <clipPath id="clip0_1898_40324">
                    <path transform="translate(.211 .974)" d="M0 0H15.053V15.053H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </figure>
            <div className="absolute -bottom-14 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100">
              Products switcher
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]"></span>
            </div>
          </div>
        </div>
        <figure className="flex items-center gap-2 bg-[#ffffff90] pl-1.5 rounded-l-normal">
          <img
            alt="Logo"
            loading="lazy"
            width="24"
            height="14"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            srcSet={`${mondayLogo} 1x, ${mondayLogo} 2x`} // Use the imported variable
            src={mondayLogo}
          />
          <img
            alt="User Placeholder Photo"
            loading="lazy"
            width="32"
            height="16"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            srcSet={`${userPhoto} 1x, ${userPhoto} 2x`} // Use the imported variable
            src={userPhoto}
          />
        </figure>
      </div>
    </header>
  );
}

