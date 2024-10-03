import React from 'react';
import Sidebar from './Sidebar';
import { IoIosArrowDown } from "react-icons/io";
import { PiPlugBold } from "react-icons/pi";
import slackIcon from "../media/slack-icon-one.png"
import jiraIcon from "../media/jira-icon.png";
import { GoDependabot } from "react-icons/go";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuFilter } from "react-icons/lu";
import { BiSortAlt2 } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { FaNewspaper } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
export default function Main() {
  return (
    <div className='flex justify-between gap-3'>
      {/* SideBar */}
      <Sidebar />
      {/* Main Content */}
      <main className='flex-1 h-full bg-white rounded-tl-lg overflow-auto'>
        <div className='fixed-vertical sticky top-0 left-0 z-30 bg-white pt-4'>
          {/* 1st col */}
          <div className='flex mb-2 mx-10 justify-between items-center'>
            <h2 className='flex gap-1.5 text-2xl font-light justify-between items-center'>
              Happy Day
              <span>
                <IoIosArrowDown />
              </span>
            </h2>

            <ul className='flex items-center justify-between gap-3 cursor-pointer'>
              <li className='flex items-center justify-between gap-1.5 text-sm hover:bg-hoverItem rounded px-1 h-8'>
                <PiPlugBold />
                <span>Integrate</span>
                <div class="flex">
                  <figure class="relative flex justify-center items-center opacity-40 -mr-2">
                    <svg fill="#000000" width="32" height="32" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                      <path d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Zm0-205.60889a4.00152,4.00152,0,0,0-1.96814.51465l-84,47.47827A4.00672,4.00672,0,0,0,40,80.66772v94.66456a4.00658,4.00658,0,0,0,2.032,3.48242L126.03186,226.293a4.0215,4.0215,0,0,0,3.93628,0l84-47.47827A4.00672,4.00672,0,0,0,216,175.33228V80.66772a4.00658,4.00658,0,0,0-2.032-3.48242L129.96814,29.707A4.00152,4.00152,0,0,0,128,29.19238Z">
                      </path>
                    </svg>
                    <img alt="Slack Icon" loading="lazy" width="15" height="15" decoding="async" data-nimg="1" class="absolute" srcset={`${slackIcon} 1x, ${slackIcon.replace('.png', '@2x.png')} 2x`} src={slackIcon} />
                  </figure>
                  <figure class="relative flex justify-center items-center opacity-40">
                    <svg fill="#000000" width="32" height="32" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M128,234.80127a12.00322,12.00322,0,0,1-5.90466-1.54395l-84-47.47827A12.01881,12.01881,0,0,1,32,175.33228V80.66772A12.019,12.019,0,0,1,38.09521,70.221l84.00013-47.47827a12.06282,12.06282,0,0,1,11.80932,0l84,47.47827A12.01881,12.01881,0,0,1,224,80.66772v94.66456a12.019,12.019,0,0,1-6.09521,10.44677l-84.00013,47.47827A12.00322,12.00322,0,0,1,128,234.80127Zm0-205.60889a4.00152,4.00152,0,0,0-1.96814.51465l-84,47.47827A4.00672,4.00672,0,0,0,40,80.66772v94.66456a4.00658,4.00658,0,0,0,2.032,3.48242L126.03186,226.293a4.0215,4.0215,0,0,0,3.93628,0l84-47.47827A4.00672,4.00672,0,0,0,216,175.33228V80.66772a4.00658,4.00658,0,0,0-2.032-3.48242L129.96814,29.707A4.00152,4.00152,0,0,0,128,29.19238Z">
                    </path>
                    </svg>
                    <img alt="jira Icon" loading="lazy" width="15" height="15" decoding="async" data-nimg="1" class="absolute" srcset={`${jiraIcon} 1x, ${jiraIcon.replace('.png', '@2x.png')} 2x`} src={jiraIcon} />
                  </figure>
                </div>
              </li>

              <li className='flex items-center justify-between gap-1.5 text-sm hover:bg-hoverItem rounded px-1 h-8'>
                <GoDependabot />
                <span>
                  Automate / 1
                </span>
              </li>

              <li className='flex items-center justify-between gap-1.5 text-sm border hover:bg-hoverItem rounded px-2 h-8'>
                <button>
                  <span>
                    Invite / 1</span>
                </button>
              </li>

              <li className='flex items-center justify-between gap-1.5 text-sm hover:bg-hoverItem rounded px-2 h-8'>
                <div class="relative group">
                  <button class="flex items-center p-2 bg-transparent border-none cursor-pointer">
                    <BiDotsHorizontalRounded className="text-gray-600 hover:text-gray-800" />
                  </button>
                  <div className="absolute -bottom-10 right-1/2 transform translate-x-1/2 rounded-lg text-sm bg-gray-800 text-white py-2 px-3 transition-transform duration-200 scale-0 group-hover:scale-100">
                    Options
                    <span className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-800"></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* 2nd col */}
          <ul class="flex border-b mb-4 mx-10">
            <li class="group relative flex gap-1 transition justify-center items-center text-sm py-1.5 cursor-pointer rounded-normal px-6 hover:bg-hoverItem">
              <div class="flex gap-1 transition delay-100 group-hover:-translate-x-3.5">
                <span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true" class="icon_a2927e1dcf noFocusStyle_a4081a0d1e w-4 h-4" data-testid="icon">
                    <path d="M9.56992 2.1408C9.82591 1.95307 10.1741 1.95307 10.4301 2.1408L17.7028 7.47413C17.8896 7.61113 18 7.82894 18 8.06061V16.7879C18 17.1895 17.6744 17.5152 17.2727 17.5152H11.9394C11.5377 17.5152 11.2121 17.1895 11.2121 16.7879V13.1515H8.78788V16.7879C8.78788 17.1895 8.46227 17.5152 8.06061 17.5152H2.72727C2.32561 17.5152 2 17.1895 2 16.7879V8.06061C2 7.82894 2.11037 7.61113 2.29719 7.47413L9.56992 2.1408ZM3.45455 8.42914V16.0606H7.33333V12.4242C7.33333 12.0226 7.65894 11.697 8.06061 11.697H11.9394C12.3411 11.697 12.6667 12.0226 12.6667 12.4242V16.0606H16.5455V8.42914L10 3.62914L3.45455 8.42914Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span>All Sprints</span>
              </div>
              <span class="absolute right-2 opacity-0 transition rounded-normal p-0.5 hover:bg-gray-300 group-hover:opacity-100">
                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img" aria-hidden="true" class="w-4 h-4">
                  <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor"></path>
                </svg>
              </span>
            </li>

            <li class="group relative flex gap-1 transition justify-center items-center text-sm py-1.5 cursor-pointer rounded-normal px-6 hover:bg-hoverItem">
              <div class="flex gap-1 transition delay-100 group-hover:-translate-x-3.5">
                <span>Main Table</span>
              </div>
              <span class="absolute right-2 opacity-0 transition rounded-normal p-0.5 hover:bg-gray-300 group-hover:opacity-100">
                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img" aria-hidden="true" class="w-4 h-4">
                  <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor"></path>
                </svg>
              </span>
            </li>

            <li class="group relative flex gap-1 transition justify-center items-center text-sm py-1.5 cursor-pointer rounded-normal px-6 hover:bg-hoverItem">
              <div class="flex gap-1 transition delay-100 group-hover:-translate-x-3.5">
                <span>Kanban</span>
              </div>
              <span class="absolute right-2 opacity-0 transition rounded-normal p-0.5 hover:bg-gray-300 group-hover:opacity-100">
                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img" aria-hidden="true" class="w-4 h-4">
                  <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor"></path>
                </svg>
              </span>
            </li>

            <li class="group relative flex gap-1 transition justify-center items-center text-sm py-1.5 cursor-pointer rounded-normal px-6 hover:bg-hoverItem">
              <div class="flex gap-1 transition delay-100 group-hover:-translate-x-3.5">
                <span>Active Sprint</span>
              </div>
              <span class="absolute right-2 opacity-0 transition rounded-normal p-0.5 hover:bg-gray-300 group-hover:opacity-100">
                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img" aria-hidden="true" class="w-4 h-4">
                  <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor"></path>
                </svg>
              </span>
            </li>
          </ul>


          <ul class="flex gap-2 items-center mb-4 px-10">
            <li class="mr-3">
              <button class="bg-[#00854D] flex items-center text-white rounded-normal text-sm overflow-hidden">
                <span class="py-1.5 px-2 border-r border-r-slate-700 hover:bg-btnHover">New Task</span>
                <span class="py-1.5 px-1 hover:bg-btnHover">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true" class="icon_a2927e1dcf bar6H noFocusStyle_a4081a0d1e undefined" data-testid="icon">
                    <path d="M10.5303 12.5303L10 12L9.46967 12.5303C9.76256 12.8232 10.2374 12.8232 10.5303 12.5303ZM10 10.9393L6.53033 7.46967C6.23744 7.17678 5.76256 7.17678 5.46967 7.46967C5.17678 7.76256 5.17678 8.23744 5.46967 8.53033L9.46967 12.5303L10 12L10.5303 12.5303L14.5303 8.53033C14.8232 8.23744 14.8232 7.76256 14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967L10 10.9393Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </button>
            </li>
            <li class="cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal hover:bg-hoverItem">

              <FaSearch />
              <span>Search</span>
            </li>

            <li class="group relative cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal hover:bg-hoverItem">

              <CgProfile />
              <span>Person</span>
              <div class="absolute -top-12 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100 whitespace-nowrap">
                Filter board by person
                <span class="absolute left-1/2 -translate-x-1/2 w-0 h-0 -bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#333333]"></span>
              </div>
            </li>

            <li class="group relative">
              <button class="flex items-center rounded-normal text-sm overflow-hidden hover:bg-hoverItem">
                <LuFilter className='pl-1' />
                <span class="py-1.5 pr-2 pl-1 hover:border-r hoverborder-r-white">Filter</span>
                <IoIosArrowDown />
              </button>
              <div class="absolute -top-12 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100 whitespace-nowrap">
                Filter board by anything
                <span class="absolute left-1/2 -translate-x-1/2 w-0 h-0 -bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#333333]"></span>
              </div>
            </li>

            <li class="group relative cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal hover:bg-hoverItem">
              <BiSortAlt2 />
              <span>Sort</span>
              <div class="absolute -top-12 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100 whitespace-nowrap">
                Sort board by any column
                <span class="absolute left-1/2 -translate-x-1/2 w-0 h-0 -bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#333333]"></span>
              </div>
            </li>

            <li class="group relative cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal bg-background">

              <BiHide className="pl-1" />
              <span>Hide / 2</span>
              <div class="absolute -top-12 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100 whitespace-nowrap">
                Hidden column
                <span class="absolute left-1/2 -translate-x-1/2 w-0 h-0 -bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#333333]"></span>
              </div>
            </li>

            <li class="group relative cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal bg-background">
              <FaNewspaper className='pl-1' />
              <span>Group by / 2</span>
              <div class="absolute -top-12 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100 whitespace-nowrap">
                Group item by columns
                <span class="absolute left-1/2 -translate-x-1/2 w-0 h-0 -bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#333333]"></span>
              </div>
            </li>
            <li class="cursor-pointer flex gap-1 items-center text-sm p-1.5 rounded-normal hover:bg-hoverItem">
              <BiDotsHorizontalRounded />

            </li>
          </ul>


          <div class="group/parent px-10 heading-row relative flex justify-between items-center">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 hidden group-hover/parent:inline-block">
              <BiDotsHorizontalRounded />
            </span>
            <div class="group/sub flex-1 flex gap-2 items-center px-3">
              <IoIosArrowDown />
              <h3 class="text-[#00854D] text-lg __className_f11989">Sprint 1</h3>
              <span class="text-sm hidden group-hover/sub:inline-block">4 Tasks</span>
            </div>
            <div class="btn-group flex gap-2 text-sm justify-between items-center mb-1 *:p-2 *:rounded-normal">
              <button class="flex gap-1 hover:bg-hoverItem">Jan 2,'23 - Jan 15,'23</button>
              <button class="flex gap-1 border opacity-50" disabled="">Burndown</button>
              <button class="flex gap-2 border hover:bg-hoverItem">
                <span>
                  <svg viewBox="0 0 15.81 12.45" fill="transparent" width="20" height="20" aria-hidden="true" class="icon_3a7b5e0d63 leftIcon_6c94251e33 noFocusStyle_2e4989587e undefined" data-testid="icon">
                    <path fill="currentColor" d="M1.5,4.93c0-1.89,1.53-3.43,3.43-3.43s3.43,1.53,3.43,3.43c0,.41,.34,.75,.75,.75s.75-.34,.75-.75C9.85,2.21,7.65,0,4.93,0S0,2.21,0,4.93s2.03,4.75,4.6,4.91c.04,0,.08,.01,.13,.01H13.28l-1.32,1.32c-.29,.29-.29,.77,0,1.06s.77,.29,1.06,0l2.57-2.57c.29-.29,.29-.77,0-1.06l-2.57-2.57c-.29-.29-.77-.29-1.06,0s-.29,.77,0,1.06l1.25,1.25H4.93c-1.89,0-3.43-1.53-3.43-3.43Z" id="Layer_1-2" class="cls-1" fill-rule="evenodd"></path>
                  </svg>
                </span>
                <span>Start</span>
              </button>
              <button class="inline-block hover:bg-hoverItem">
                <BiDotsHorizontalRounded />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}

        <div className="main-table pb-8">
          <ul className="table-head text-sm rounded-tl-md flex h-9 bg-white sticky top-[12.2rem] z-30">
            <li className="bg-white h-full min-w-10 sticky left-0 z-30" />
            <li className="flex rounded-tl-md border border-l-[6px] border-l-green-800 sticky left-10 min-w-[24rem] bg-white z-30">
              <div tabIndex={0} className="p-2 flex justify-center items-center">
                <input type="checkbox" className="w-2 md:w-3.5" />
              </div>
              <div tabIndex={1} className="flex flex-1 border-l">
                <div className="group/head relative p-2 flex-1 flex justify-center items-center">
                  <h6>
                    Task
                  </h6>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/head:flex hover:bg-btnHover group/sort">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="-mb-2 group-hover/sort:fill-white">
                      <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="group-hover/sort:fill-white">
                      <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </li>
            <li className="flex">
              <ul className="flex *:border-y *:[&:not(:last-child)]:border-r bg-white">
                <li className="tab-cell group/item relative p-1.5 flex justify-center items-center hover:bg-[#f5f6f8] w-24">
                  <h6 className="peer transition group-hover/item:-translate-x-2 whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text ">
                    Owner
                  </h6>
                  <span className="absolute right-2 opacity-0 transition rounded-normal p-0.5 cursor-pointer hover:bg-gray-300 group-hover/item:opacity-100 peer-focus:hidden">

                    <BiDotsHorizontalRounded />
                  </span>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/item:flex hover:bg-btnHover group/sort peer-focus:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="-mb-2 group-hover/sort:fill-white">
                      <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="group-hover/sort:fill-white">
                      <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
              <ul className="flex *:border-y *:[&:not(:last-child)]:border-r bg-white">
                <li className="tab-cell group/item relative p-1.5 flex justify-center items-center hover:bg-[#f5f6f8] w-36">
                  <h6 className="peer transition  whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text ">
                    Status
                  </h6>
                  <span className="absolute right-2 opacity-0 transition rounded-normal p-0.5 cursor-pointer hover:bg-gray-300 group-hover/item:opacity-100 peer-focus:hidden">
                    <BiDotsHorizontalRounded />                 </span>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/item:flex hover:bg-btnHover group/sort peer-focus:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="-mb-2 group-hover/sort:fill-white">
                      <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="group-hover/sort:fill-white">
                      <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
              <ul className="flex *:border-y *:[&:not(:last-child)]:border-r bg-white">
                <li className="tab-cell group/item relative p-1.5 flex justify-center items-center hover:bg-[#f5f6f8] w-36">
                  <h6 className="peer transition  whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text ">
                    Priority
                  </h6>
                  <span className="absolute right-2 opacity-0 transition rounded-normal p-0.5 cursor-pointer hover:bg-gray-300 group-hover/item:opacity-100 peer-focus:hidden">
                  <BiDotsHorizontalRounded/> 
                  </span>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/item:flex hover:bg-btnHover group/sort peer-focus:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="-mb-2 group-hover/sort:fill-white">
                      <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="group-hover/sort:fill-white">
                      <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
              <ul className="flex *:border-y *:[&:not(:last-child)]:border-r bg-white">
                <li className="tab-cell group/item relative p-1.5 flex justify-center items-center hover:bg-[#f5f6f8] w-36">
                  <h6 className="peer transition  whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text ">
                    Type
                  </h6>
                  <span className="absolute right-2 opacity-0 transition rounded-normal p-0.5 cursor-pointer hover:bg-gray-300 group-hover/item:opacity-100 peer-focus:hidden">
                  <BiDotsHorizontalRounded/> 
                  </span>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/item:flex hover:bg-btnHover group/sort peer-focus:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="-mb-2 group-hover/sort:fill-white">
                      <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="group-hover/sort:fill-white">
                      <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
              <ul className="flex *:border-y *:[&:not(:last-child)]:border-r bg-white">
                <li className="tab-cell group/item relative p-1.5 flex justify-center items-center hover:bg-[#f5f6f8] w-36">
                  <h6 className="peer transition  whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text ">
                    Estimated SP
                  </h6>
                  <span className="absolute right-2 opacity-0 transition rounded-normal p-0.5 cursor-pointer hover:bg-gray-300 group-hover/item:opacity-100 peer-focus:hidden">
                  <BiDotsHorizontalRounded/> 
                  </span>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/item:flex hover:bg-btnHover group/sort peer-focus:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="-mb-2 group-hover/sort:fill-white">
                      <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="group-hover/sort:fill-white">
                      <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
              <ul className="flex *:border-y *:[&:not(:last-child)]:border-r bg-white">
                <li className="tab-cell group/item relative p-1.5 flex justify-center items-center hover:bg-[#f5f6f8] w-36">
                  <h6 className="peer transition  whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text ">
                    Actual SP
                  </h6>
                  <span className="absolute right-2 opacity-0 transition rounded-normal p-0.5 cursor-pointer hover:bg-gray-300 group-hover/item:opacity-100 peer-focus:hidden">
                  <BiDotsHorizontalRounded/> 
                  </span>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/item:flex hover:bg-btnHover group/sort peer-focus:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="-mb-2 group-hover/sort:fill-white">
                      <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={10}
                      height={10} className="group-hover/sort:fill-white">
                      <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </li>
            <li className="min-w-20 p-1.5 flex items-center hover:bg-[#f5f6f8] border border-r-0 relative bg-white">
              <span className="p-0.5 hover:bg-hoverItem cursor-pointer rounded">
              <FaPlus/>
              </span>
            </li>
          </ul>
          <div className="sprint-table">
            <ul className="group/row relative text-sm flex h-9 cursor-pointer">
              <li className="bg-white h-full min-w-10 sticky left-0 top-10 z-10 flex justify-center items-center">
                <span className="absolute hidden group-hover/row:inline-block">
                  <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20} role="img"
                    aria-hidden="true">
                    <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z"
                      fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li className="flex border-b border-r border-l-green-800 border-l-[6px] sticky left-10 bg-white z-10 min-w-[24rem] overflow-hidden">
                <div tabIndex={0} className="px-2 flex justify-center items-center">
                  <input type="checkbox" className="w-2 md:w-3.5" />
                </div>
                <div tabIndex={0} className="group/parent flex-1 border-l flex">
                  <div className="group/head relative flex-1 flex items-center pl-2 h-full">
                    <span className="opacity-0 group-hover/head:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={12}
                        height={12} className="fill-slate-400 w-1.5">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        />
                      </svg>
                    </span>
                    <div className="flex-1 ml-2 flex items-center border-r h-full w-1 pr-2">
                      <h6 className="peer transition  whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text undefined">
                        Create new dashboard
                      </h6>
                    </div>
                    <span className="px-4">
                      <FaPlus/>
                    </span>
                  </div>
                </div>
              </li>
              <li className="group relative flex justify-center items-center min-w-24 px-2 border-r border-b">
                <span className="absolute left-2.5 bg-btnHover h-3 w-3 rounded-full items-center justify-center text-md text-white hidden group-hover:flex cursor-pointer">
                  +
                </span>
                <figure className>
                  <CgProfile/>
                </figure>
              </li>
              <li tabIndex={2} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(33, 110, 223)' }}>
                <h3 className="p-2">
                  Ready to start
                </h3>
              </li>
              <li tabIndex={3} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(33, 110, 223)' }}>
                <h3 className="p-2">
                  Critical
                </h3>
              </li>
              <li tabIndex={4} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(253, 171, 61)' }}>
                <h3 className="p-2">
                  Feature
                </h3>
              </li>
              <li className="group/parent px-1 flex justify-center items-center min-w-36 text-sm border-r border-b">
                <div className="group/sub border rounded w-full relative justify-center items-center hidden">
                  <input type="number" className="w-full rounded p-1 focus:outline-none focus:ring-1 text-center text-sm"
                    defaultValue />
                  <span className="absolute bg-btnHover h-3 w-3 text-white hidden justify-center items-center rounded-full">
                    +
                  </span>
                </div>
              </li>
              <li className="group/parent px-1 flex justify-center items-center min-w-36 text-sm border-r border-b">
                <div className="group/sub border rounded w-full relative justify-center items-center hidden">
                  <input type="number" className="w-full rounded p-1 focus:outline-none focus:ring-1 text-center text-sm"
                    defaultValue />
                  <span className="absolute bg-btnHover h-3 w-3 text-white hidden justify-center items-center rounded-full">
                    +
                  </span>
                </div>
              </li>
              <li className="group/parent relative flex justify-center items-center min-w-20 border-r-0 border-b">
                <div className="p-2" />
              </li>
            </ul>
            <ul className="group/row relative text-sm flex h-9 cursor-pointer">
              <li className="bg-white h-full min-w-10 sticky left-0 top-10 z-10 flex justify-center items-center">
                <span className="absolute hidden group-hover/row:inline-block">
                  <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20} role="img"
                    aria-hidden="true">
                    <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z"
                      fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li className="flex border-b border-r border-l-green-800 border-l-[6px] sticky left-10 bg-white z-10 min-w-[24rem] overflow-hidden">
                <div tabIndex={0} className="px-2 flex justify-center items-center">
                  <input type="checkbox" className="w-2 md:w-3.5" />
                </div>
                <div tabIndex={0} className="group/parent flex-1 border-l flex">
                  <div className="group/head relative flex-1 flex items-center pl-2 h-full">
                    <span className="opacity-0 group-hover/head:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={12}
                        height={12} className="fill-slate-400 w-1.5">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        />
                      </svg>
                    </span>
                    <div className="flex-1 ml-2 flex items-center border-r h-full w-1 pr-2">
                      <h6 className="peer transition  whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text undefined">
                        Apply styles
                      </h6>
                    </div>
                    <span className="px-4">
                      <FaPlus/>
                    </span>
                  </div>
                </div>
              </li>
              <li className="group relative flex justify-center items-center min-w-24 px-2 border-r border-b">
                <span className="absolute left-2.5 bg-btnHover h-3 w-3 rounded-full items-center justify-center text-md text-white hidden group-hover:flex cursor-pointer">
                  +
                </span>
                <figure className>
                  <CgProfile/>
                </figure>
              </li>
              <li tabIndex={2} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(253, 171, 61)' }}>
                <h3 className="p-2">
                  In progress
                </h3>
              </li>
              <li tabIndex={3} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(253, 171, 61)' }}>
                <h3 className="p-2">
                  High
                </h3>
              </li>
              <li tabIndex={4} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(127, 83, 71)' }}>
                <h3 className="p-2">
                  Test
                </h3>
              </li>
              <li className="group/parent px-1 flex justify-center items-center min-w-36 text-sm border-r border-b">
                <div className="group/sub border rounded w-full relative justify-center items-center hidden">
                  <input type="number" className="w-full rounded p-1 focus:outline-none focus:ring-1 text-center text-sm"
                    defaultValue />
                  <span className="absolute bg-btnHover h-3 w-3 text-white hidden justify-center items-center rounded-full">
                    +
                  </span>
                </div>
              </li>
              <li className="group/parent px-1 flex justify-center items-center min-w-36 text-sm border-r border-b">
                <div className="group/sub border rounded w-full relative justify-center items-center hidden">
                  <input type="number" className="w-full rounded p-1 focus:outline-none focus:ring-1 text-center text-sm"
                    defaultValue />
                  <span className="absolute bg-btnHover h-3 w-3 text-white hidden justify-center items-center rounded-full">
                    +
                  </span>
                </div>
              </li>
              <li className="group/parent relative flex justify-center items-center min-w-20 border-r-0 border-b">
                <div className="p-2" />
              </li>
            </ul>
            <ul className="group/row relative text-sm flex h-9 cursor-pointer">
              <li className="bg-white h-full min-w-10 sticky left-0 top-10 z-10 flex justify-center items-center">
                <span className="absolute hidden group-hover/row:inline-block">
                  <svg viewBox="0 0 20 20" fill="currentColor" width={20} height={20} role="img"
                    aria-hidden="true">
                    <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z"
                      fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li className="flex border-b border-r border-l-green-800 border-l-[6px] sticky left-10 bg-white z-10 min-w-[24rem] overflow-hidden">
                <div tabIndex={0} className="px-2 flex justify-center items-center">
                  <input type="checkbox" className="w-2 md:w-3.5" />
                </div>
                <div tabIndex={0} className="group/parent flex-1 border-l flex">
                  <div className="group/head relative flex-1 flex items-center pl-2 h-full">
                    <span className="opacity-0 group-hover/head:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={12}
                        height={12} className="fill-slate-400 w-1.5">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        />
                      </svg>
                    </span>
                    <div className="flex-1 ml-2 flex items-center border-r h-full w-1 pr-2">
                      <h6 className="peer transition  whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 cursor-text undefined">
                        Make responsive
                      </h6>
                    </div>
                    <span className="px-4">
                      <FaPlus/>
                    </span>
                  </div>
                </div>
              </li>
              <li className="group relative flex justify-center items-center min-w-24 px-2 border-r border-b">
                <span className="absolute left-2.5 bg-btnHover h-3 w-3 rounded-full items-center justify-center text-md text-white hidden group-hover:flex cursor-pointer">
                  +
                </span>
                <figure className>
                  <CgProfile/>
                </figure>
              </li>
              <li tabIndex={2} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(127, 83, 71)' }}>
                <h3 className="p-2">
                  Pending deploy
                </h3>
              </li>
              <li tabIndex={3} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(127, 83, 71)' }}>
                <h3 className="p-2">
                  Low
                </h3>
              </li>
              <li tabIndex={4} className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
                style={{ backgroundColor: 'rgb(223, 47, 74)' }}>
                <h3 className="p-2" />
              </li>
              <li className="group/parent px-1 flex justify-center items-center min-w-36 text-sm border-r border-b">
                <div className="group/sub border rounded w-full relative justify-center items-center hidden">
                  <input type="number" className="w-full rounded p-1 focus:outline-none focus:ring-1 text-center text-sm"
                    defaultValue />
                  <span className="absolute bg-btnHover h-3 w-3 text-white hidden justify-center items-center rounded-full">
                    +
                  </span>
                </div>
              </li>
              <li className="group/parent px-1 flex justify-center items-center min-w-36 text-sm border-r border-b">
                <div className="group/sub border rounded w-full relative justify-center items-center hidden">
                  <input type="number" className="w-full rounded p-1 focus:outline-none focus:ring-1 text-center text-sm"
                    defaultValue />
                  <span className="absolute bg-btnHover h-3 w-3 text-white hidden justify-center items-center rounded-full">
                    +
                  </span>
                </div>
              </li>
              <li className="group/parent relative flex justify-center items-center min-w-20 border-r-0 border-b">
                <div className="p-2" />
              </li>
            </ul>
            <ul className="tab-row text-sm h-9 flex hover:bg-hoverItem bg-white">
              <li className="bg-white min-w-10 sticky left-0 top-10 z-20 -mt-1 h-10"
              />
              <li className="flex rounded-bl-md border-l-[6px] hover:border-l-green-800 sticky left-10 z-10 min-w-[24rem]">
                <div className="px-2 flex justify-center items-center">
                  <input type="checkbox" className="w-2 md:w-3.5" disabled />
                </div>
                <div className="flex min-w-36 bg-transparent">
                  <div className="group border-l pl-1 flex items-center">
                    <form className="w-[20rem]">
                      <input type="text" placeholder="+ Add Task" className="w-full outline-none pl-5 py-0.5 group-hover:border rounded-md bg-transparent"
                        defaultValue />
                    </form>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="tab-footer flex h-9">
              <li className="bg-white h-full min-w-10 sticky left-0 top-10 z-20" />
              <li className="sticky left-10 bg-white z-10 min-w-[24rem] border-t rounded-tl-md"
              />
              <li className="flex">
                <div className="p-1.5 flex justify-center first:rounded-bl-md items-center border-y border-r-0 border-l hover:bg-[#f5f6f8] w-24"
                />
                <div className="p-1.5 flex justify-center first:rounded-bl-md items-center border-y border-r-0 border-l hover:bg-[#f5f6f8] w-36"
                />
                <div className="p-1.5 flex justify-center first:rounded-bl-md items-center border-y border-r-0 border-l hover:bg-[#f5f6f8] w-36"
                />
                <div className="p-1.5 flex justify-center first:rounded-bl-md items-center border-y border-r-0 border-l hover:bg-[#f5f6f8] w-36"
                />
                <div className="p-1.5 flex justify-center first:rounded-bl-md items-center border-y border-r-0 border-l hover:bg-[#f5f6f8] w-36"
                />
                <div className="p-1.5 flex justify-center first:rounded-bl-md items-center border-y border-r-0 border-l hover:bg-[#f5f6f8] w-36"
                />
              </li>
              <li className="sticky left-10 bg-white z-10 min-w-20 border-l border-y"
              />
            </ul>
          </div>
        </div>



      </main>
    </div>
  );
}
