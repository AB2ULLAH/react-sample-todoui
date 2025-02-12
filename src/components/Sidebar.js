import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Sidebar() {
    return (
        <aside className='sidebar bg-[#F7FBF8] w-64 rounded-tr-lg pt-1 pb-2 h-full text-primary'>
            <nav className='h-full relative'>
                <ul className='h-full flex flex-col'>
                    <li className="px-3">
                        <a className="flex gap-2 h-8 pl-1.5 pr-2 items-center text-sm rounded-normal mb-1 hover:bg-[#EBEDED]" href="/home">
                            <span>
                                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true" class="icon_a2927e1dcf noFocusStyle_a4081a0d1e undefined" data-testid="icon">
                                    <path d="M9.56992 2.1408C9.82591 1.95307 10.1741 1.95307 10.4301 2.1408L17.7028 7.47413C17.8896 7.61113 18 7.82894 18 8.06061V16.7879C18 17.1895 17.6744 17.5152 17.2727 17.5152H11.9394C11.5377 17.5152 11.2121 17.1895 11.2121 16.7879V13.1515H8.78788V16.7879C8.78788 17.1895 8.46227 17.5152 8.06061 17.5152H2.72727C2.32561 17.5152 2 17.1895 2 16.7879V8.06061C2 7.82894 2.11037 7.61113 2.29719 7.47413L9.56992 2.1408ZM3.45455 8.42914V16.0606H7.33333V12.4242C7.33333 12.0226 7.65894 11.697 8.06061 11.697H11.9394C12.3411 11.697 12.6667 12.0226 12.6667 12.4242V16.0606H16.5455V8.42914L10 3.62914L3.45455 8.42914Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span>Home</span>
                        </a>
                    </li>

                    <li className="px-3">
                        <a className="flex gap-2 h-8 pl-1.5 pr-2 items-center text-sm rounded-normal mb-1 hover:bg-[#EBEDED]" href="/home">
                            <span>
                                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true" class="icon_a2927e1dcf noFocusStyle_a4081a0d1e" data-testid="icon">
                                    <path d="M5.99986 1.82129C6.41407 1.82129 6.74986 2.15708 6.74986 2.57129V4.10701H13.2499V2.57129C13.2499 2.15708 13.5856 1.82129 13.9999 1.82129C14.4141 1.82129 14.7499 2.15708 14.7499 2.57129V4.107H16.2856C16.7876 4.107 17.269 4.30643 17.624 4.66141C17.979 5.01639 18.1784 5.49784 18.1784 5.99986V16.2856C18.1784 16.7876 17.979 17.269 17.624 17.624C17.269 17.979 16.7876 18.1784 16.2856 18.1784H3.71415C3.21213 18.1784 2.73067 17.979 2.37569 17.624C2.02071 17.269 1.82129 16.7876 1.82129 16.2856V5.99986C1.82129 5.49784 2.02071 5.01639 2.37569 4.66141C2.73067 4.30643 3.21213 4.107 3.71415 4.107C3.763 4.107 3.81077 4.11168 3.85702 4.1206C3.90326 4.11168 3.95102 4.10701 3.99986 4.10701H5.24986V2.57129C5.24986 2.15708 5.58565 1.82129 5.99986 1.82129ZM5.24986 7.14272V5.60701H3.99986C3.95101 5.60701 3.90324 5.60234 3.85699 5.59342C3.81075 5.60233 3.76299 5.607 3.71415 5.607C3.60995 5.607 3.51003 5.64839 3.43635 5.72207C3.36268 5.79574 3.32129 5.89567 3.32129 5.99986V16.2856C3.32129 16.3898 3.36268 16.4897 3.43635 16.5634C3.51003 16.637 3.60995 16.6784 3.71415 16.6784H16.2856C16.3898 16.6784 16.4897 16.637 16.5634 16.5634C16.637 16.4897 16.6784 16.3898 16.6784 16.2856V5.99986C16.6784 5.89567 16.637 5.79574 16.5634 5.72207C16.4897 5.64839 16.3898 5.607 16.2856 5.607H14.7499V7.14272C14.7499 7.55693 14.4141 7.89272 13.9999 7.89272C13.5856 7.89272 13.2499 7.55693 13.2499 7.14272V5.60701H6.74986V7.14272C6.74986 7.55693 6.41407 7.89272 5.99986 7.89272C5.58565 7.89272 5.24986 7.55693 5.24986 7.14272ZM13.4214 9.92231C13.6942 9.61058 13.6626 9.13676 13.3509 8.864C13.0392 8.59124 12.5653 8.62283 12.2926 8.93455L8.75058 12.9825L7.02129 11.6856C6.68992 11.437 6.21982 11.5042 5.97129 11.8356C5.72276 12.1669 5.78992 12.637 6.12129 12.8856L8.407 14.5999C8.72086 14.8353 9.16309 14.789 9.42144 14.4937L13.4214 9.92231Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span>Work</span>
                        </a>
                    </li>

                    <li className="px-3 border-y border-[#d0d4e4] relative transition duration-75 false">
                        <div className="flex gap-2 h-8 pl-1.5 pr-2 items-center text-sm rounded-normal my-1 hover:bg-[#EBEDED] cursor-pointer">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width="20" height="20" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z">
                                    </path>
                                </svg>
                            </span>
                            <span className='flex-1'>Favorites</span>
                            <span className="inline-block rotate-0"><FaAngleDown /></span>
                        </div>
                    </li>

                    <li className="px-3 flex items-center gap-2">
                        <div className="flex-1 flex gap-2 h-8 pl-1.5 pr-2 items-center text-sm rounded-normal my-3 font-semibold hover:bg-[#EBEDED] cursor-pointer">
                            <div className="bg-[#595ad4] px-1 rounded-md text-white">
                                <div className="relative text-sm">
                                    M
                                    <span className="absolute -bottom-1 -right-2">
                                        <IoHome className='text-black' />
                                    </span>
                                </div>
                            </div>
                            <span className="text-base flex-1">My Team</span>
                            <span className="inline-block rotate-0"><FaAngleDown /></span>
                        </div>
                        <div tabindex="0" className="relative h-8 px-1 py-1 rounded-normal mr-2 flex justify-center items-center cursor-pointer hover:bg-[#EBEDED]">
                            <BiDotsHorizontalRounded />
                        </div>
                    </li>

                    <li className="px-3 mb-3 block">
                        <div className="flex gap-2 h-8 pr-2 items-center text-sm rounded-normal">
                            <div className="input-group relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-8 pr-12 h-8 rounded-normal bg-transparent border border-[#c3c6d4] w-full text-sm"
                                />
                                <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                    <IoSearch />
                                </span>
                            </div>
                            <span className="border border-[#c3c6d4] h-8 rounded-normal flex justify-center items-center hover:bg-[#EBEDED] relative">
                                <div className="group cursor-pointer flex justify-center items-center h-full">
                                    <div className="p-2 rounded-normal flex items-center">
                                        <FaPlus />
                                        <div className="absolute top-full mt-3 right-4 transform translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition-all scale-0 group-hover:scale-100 w-auto">
                                            Add Item to Workspace
                                            <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]"></span>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </li>

                    <li className='flex-1 pr-3 pl-1 overflow-y-auto relative block justify-between' role='button'>
                        <h2 className='group flex gap-2 pl-2 pr-2.5 text-sm items-center h-8 cursor-pointer hover:bg-[#EBEDED]'>
                            <div className='rotate-0'><FaAngleDown /></div>
                            <div className='flex-1'>
                                My Team
                            </div>
                            <span className='hidden group-hover:inline-block p-1 hover:bg-gray-300 items-center rounded-normal'><BiDotsHorizontalRounded /></span>
                        </h2>

                        {/* My team ul */}
                        <ul className='ml-6'>
                            <li className='group flex pl-2 pr-2.5 cursor-pointer rounded-normal gap-2 h-8 hover:bg-[#EBEDED] items-center'>
                                <div className='flex flex-1 items-center gap-2'>
                                    <span><svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" aria-hidden="true" class="icon_d6a7187c13" data-testid="icon"><path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
                                    <div className='flex-1 text-sm'>
                                        Happy Day
                                    </div>
                                    <span className='hidden group-hover:inline-block p-1 hover:bg-gray-300 rounded-normal ml-auto'>
                                        <BiDotsHorizontalRounded />
                                    </span>
                                </div>
                            </li>

                            <li className='group flex pl-2 pr-2.5 cursor-pointer rounded-normal gap-2 h-8 hover:bg-[#EBEDED] items-center'>
                                <div className='flex flex-1 items-center gap-2'>
                                    <span>
                                        <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" aria-hidden="true" class="icon_d6a7187c13 home-list-icon" data-testid="icon">
                                            <path d="M8.68597 3.65C8.68597 3.29101 8.97698 3 9.33597 3C10.4372 3 11.5071 3.36267 12.4103 4.03225C13.3125 4.70106 14.0063 5.64428 14.4137 6.73546C14.821 7.82644 14.9268 9.02366 14.7198 10.1781C14.5128 11.3326 14.0006 12.4014 13.2391 13.2463C12.983 13.5304 12.6156 13.8245 12.2119 14.0983L15.6339 14.088L14.9618 13.1312C14.7554 12.8375 14.8263 12.4321 15.12 12.2257C15.4138 12.0194 15.8192 12.0902 16.0255 12.384L17.4141 14.3606C17.5737 14.5877 17.5714 14.891 17.4085 15.1157L16.0199 17.0315C15.8093 17.3221 15.4028 17.387 15.1122 17.1763C14.8215 16.9656 14.7567 16.5592 14.9674 16.2685L15.6055 15.3881C15.6055 15.3881 9.58569 15.4065 9.47449 15.4065C9.36328 15.4065 9.34766 15.4073 9.2029 15.4073C9.05813 15.4073 4.65195 15.4209 4.65195 15.4209C4.29296 15.422 4.00108 15.1318 4 14.7729C3.99893 14.4139 4.28907 14.122 4.64805 14.1209L9.31403 14.1069C9.69354 14.0008 10.2534 13.7533 10.8242 13.4295C11.4586 13.0698 12.0059 12.6727 12.2734 12.376C12.8648 11.7198 13.2739 10.8762 13.4402 9.94871C13.6065 9.02118 13.5207 8.06037 13.1958 7.19016C12.871 6.32015 12.3248 5.58711 11.6362 5.07658C10.9485 4.56681 10.1481 4.3 9.33597 4.3C8.97698 4.3 8.68597 4.00899 8.68597 3.65Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                            </path>
                                            <path d="M9.10492 4.3C8.2928 4.3 7.49239 4.56681 6.80473 5.07658C6.10543 5.59499 5.61712 6.17669 5.24631 7.18681C5.07802 7.64524 5.02301 8.23285 5.0206 8.8831C5.01995 9.05876 5.02306 9.23448 5.02799 9.4093L5.90398 8.70422C6.18363 8.47913 6.59281 8.52336 6.8179 8.80301C7.04299 9.08266 6.99876 9.49183 6.71911 9.71692L4.82532 11.2412C4.58092 11.4379 4.23088 11.432 3.99328 11.2271L2.22554 9.70283C1.95367 9.4684 1.92332 9.05796 2.15775 8.7861C2.39218 8.51423 2.80261 8.48387 3.07448 8.7183L3.72438 9.2787C3.72163 9.147 3.72011 9.01305 3.72061 8.87829C3.72317 8.18909 3.77734 7.41603 4.02594 6.73882C4.48891 5.47764 5.13897 4.69319 6.03054 4.03225C6.93325 3.36305 8.00249 3.00041 9.10304 3M9.10492 3L9.10304 3Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                            <path d="M9.10304 3C8.00249 3.00041 6.93325 3.36305 6.03054 4.03225C5.13897 4.69319 4.48891 5.47764 4.02594 6.73882C3.77734 7.41603 3.72317 8.18909 3.72061 8.87829C3.72011 9.01305 3.72163 9.147 3.72438 9.2787L3.07448 8.7183C2.80261 8.48387 2.39218 8.51423 2.15775 8.7861C1.92332 9.05796 1.95367 9.4684 2.22554 9.70283L3.99328 11.2271C4.23088 11.432 4.58092 11.4379 4.82532 11.2412L6.71911 9.71692C6.99876 9.49183 7.04299 9.08266 6.8179 8.80301C6.59281 8.52336 6.18363 8.47913 5.90398 8.70422L5.02799 9.4093C5.02306 9.23448 5.01995 9.05876 5.0206 8.8831C5.02301 8.23285 5.07802 7.64524 5.24631 7.18681C5.61712 6.17669 6.10543 5.59499 6.80473 5.07658C7.49239 4.56681 8.2928 4.3 9.10492 4.3L9.10304 3ZM9.10304 3L9.10492 3M9.33597 3C8.97698 3 8.68597 3.29101 8.68597 3.65C8.68597 4.00899 8.97698 4.3 9.33597 4.3C10.1481 4.3 10.9485 4.56681 11.6362 5.07658C12.3248 5.58711 12.871 6.32015 13.1958 7.19016C13.5207 8.06037 13.6065 9.02118 13.4402 9.94871C13.2739 10.8762 12.8648 11.7198 12.2734 12.376C12.0059 12.6727 11.4586 13.0698 10.8242 13.4295C10.2534 13.7533 9.69354 14.0008 9.31403 14.1069L4.64805 14.1209C4.28907 14.122 3.99893 14.4139 4 14.7729C4.00108 15.1318 4.29296 15.422 4.65195 15.4209C4.65195 15.4209 9.05813 15.4073 9.2029 15.4073C9.34766 15.4073 9.36328 15.4065 9.47449 15.4065C9.58569 15.4065 15.6055 15.3881 15.6055 15.3881L14.9674 16.2685C14.7567 16.5592 14.8215 16.9656 15.1122 17.1763C15.4028 17.387 15.8093 17.3221 16.0199 17.0315L17.4085 15.1157C17.5714 14.891 17.5737 14.5877 17.4141 14.3606L16.0255 12.384C15.8192 12.0902 15.4138 12.0194 15.12 12.2257C14.8263 12.4321 14.7554 12.8375 14.9618 13.1312L15.6339 14.088L12.2119 14.0983C12.6156 13.8245 12.983 13.5304 13.2391 13.2463C14.0006 12.4014 14.5128 11.3326 14.7198 10.1781C14.9268 9.02366 14.821 7.82644 14.4137 6.73546C14.0063 5.64428 13.3125 4.70106 12.4103 4.03225C11.5071 3.36267 10.4372 3 9.33597 3Z" stroke="currentColor" stroke-width=".2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                    <div className='flex-1 text-sm'>
                                        Sprints
                                    </div>
                                    <span className='hidden group-hover:inline-block p-1 hover:bg-gray-300 rounded-normal ml-auto'>
                                        <BiDotsHorizontalRounded />
                                    </span>
                                </div>
                            </li>

                            <li className='group flex pl-2 pr-2.5 cursor-pointer rounded-normal gap-2 h-8 hover:bg-[#EBEDED] items-center'>
                                <div className='flex flex-1 items-center gap-2'>
                                    <span>
                                        <svg viewBox="0 0 18 18" fill="currentColor" width="19" height="19" aria-hidden="true" class="icon_d6a7187c13 home-list-icon" data-testid="icon">
                                            <path d="M17.6,3.4c-0.1-0.2-0.2-0.4-0.4-0.5c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2,0-0.5,0-0.7,0.1c0,0-0.1,0-0.1,0.1L12.9,5 L9.9,0.7C9.8,0.6,9.6,0.5,9.5,0.4c-0.3-0.1-0.7-0.1-1,0C8.3,0.5,8.2,0.6,8,0.8L5.1,5L2.2,2.8c0,0-0.1,0-0.1-0.1 C1.9,2.6,1.7,2.6,1.4,2.6C1.2,2.6,1,2.7,0.8,2.8C0.6,3,0.5,3.2,0.4,3.4C0.3,3.6,0.3,3.8,0.3,4l0.9,6.6C1.1,10.7,1,10.7,1,10.8 c-0.4,0.4-0.7,1-0.7,1.6s0.2,1.2,0.7,1.6c0.4,0.4,1,0.7,1.6,0.7h4.3c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7H2.6 c-0.2,0-0.5-0.1-0.6-0.3c-0.2-0.2-0.3-0.4-0.3-0.6S1.8,12,2,11.8c0,0,0.1-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.1,0,0.2,0h2.7 c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7H2.6c0,0,0,0-0.1,0L1.8,4.2l2.6,2c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3,0.1,0.5,0 c0.2,0,0.3-0.1,0.5-0.2C5.9,6.2,6.1,6.1,6.2,6L9,1.8L11.8,6c0.1,0.1,0.2,0.3,0.4,0.4c0.1,0.1,0.3,0.1,0.5,0.2c0.2,0,0.3,0,0.5,0 c0.2,0,0.3-0.1,0.4-0.2l2.6-2L15.8,7c-0.1,0.4,0.2,0.7,0.6,0.8c0.4,0,0.7-0.2,0.8-0.6L17.6,4C17.7,3.8,17.6,3.6,17.6,3.4z" class="st0">
                                            </path>
                                            <path d="M15.5,8.3c-0.1-0.2-0.3-0.3-0.4-0.4c-0.2-0.1-0.4-0.2-0.6-0.1H9.8c-0.2,0-0.4,0-0.6,0.1C9,8,8.9,8.1,8.8,8.3 l-1.9,2.6c-0.2,0.2-0.3,0.5-0.2,0.8c0,0.3,0.2,0.6,0.3,0.8l4.6,5c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2 c0.1-0.1,0.1-0.1,0.1-0.2l4.5-4.9c0.2-0.2,0.4-0.5,0.4-0.8c0-0.3-0.1-0.6-0.2-0.8L15.5,8.3z M9.8,9.1L9.8,9.1 C9.8,9.1,9.8,9.1,9.8,9.1C9.8,9.1,9.8,9.1,9.8,9.1z M12.1,15.9l-4-4.4l1.7-2.5h4.6l1.8,2.4L12.1,15.9z" class="st0">
                                            </path>
                                        </svg>
                                    </span>
                                    <div className='flex-1 text-sm'>
                                        Epics
                                    </div>
                                    <span className='hidden group-hover:inline-block p-1 hover:bg-gray-300 rounded-normal ml-auto'>
                                        <BiDotsHorizontalRounded />
                                    </span>
                                </div>
                            </li>

                            <li className='group flex pl-2 pr-2.5 cursor-pointer rounded-normal gap-2 h-8 hover:bg-[#EBEDED] items-center'>
                                <div className='flex flex-1 items-center gap-2'>
                                    <span>
                                        <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" aria-hidden="true" class="icon_d6a7187c13 home-list-icon" data-testid="icon">
                                            <path d="M13.499 2.68583C13.499 2.30712 13.1921 2.00007 12.8134 2C12.4347 1.99993 12.1276 2.30688 12.1275 2.68559C12.1275 3.17163 12.0182 3.64398 11.8167 4.05354C11.6666 4.35855 11.4716 4.61643 11.2482 4.81815C10.8401 4.7131 10.4214 4.65937 9.99943 4.65937C9.57786 4.65937 9.15963 4.71299 8.75199 4.81782C8.52868 4.61615 8.3338 4.35838 8.18381 4.05354C7.98229 3.64398 7.87307 3.17163 7.87299 2.68559C7.87292 2.30688 7.56586 1.99993 7.18715 2C6.80845 2.00007 6.5015 2.30712 6.50156 2.68583C6.50168 3.37352 6.65555 4.05391 6.95327 4.659C7.07958 4.91571 7.2306 5.15634 7.40382 5.37605C6.84129 5.7056 6.33232 6.13856 5.89538 6.65494C5.76838 6.80503 5.64799 6.96153 5.53447 7.12385C5.2604 6.8757 4.96053 6.66223 4.6394 6.48933C4.03158 6.16208 3.36484 5.98965 2.68552 5.98984C2.30681 5.98995 1.99989 6.29704 2 6.67575C2.00011 7.05446 2.3072 7.36137 2.6859 7.36127C3.13038 7.36114 3.5744 7.47349 3.98925 7.69686C4.2988 7.86352 4.5884 8.09013 4.8453 8.37065C4.78365 8.51543 4.72652 8.66282 4.67405 8.81254C4.46817 9.39995 4.33611 10.0167 4.28039 10.6438H2.68571C2.307 10.6438 2 10.9508 2 11.3295C2 11.7082 2.307 12.0152 2.68571 12.0152H4.28038C4.33611 12.6423 4.46817 13.259 4.67405 13.8464C4.72657 13.9963 4.78375 14.1438 4.84545 14.2887C4.58852 14.5693 4.29886 14.7959 3.98925 14.9626C3.5744 15.186 3.13038 15.2984 2.6859 15.2982C2.3072 15.2981 2.00011 15.605 2 15.9837C1.99989 16.3625 2.30681 16.6695 2.68552 16.6697C3.36484 16.6698 4.03158 16.4974 4.6394 16.1702C4.96062 15.9972 5.26057 15.7837 5.5347 15.5354C5.64816 15.6976 5.76847 15.854 5.89538 16.004C6.42283 16.6274 7.05524 17.1291 7.76014 17.4742C8.46558 17.8195 9.2269 17.9996 9.99943 17.9996C10.772 17.9996 11.5333 17.8195 12.2387 17.4742C12.9436 17.1291 13.576 16.6274 14.1035 16.004C14.2305 15.8539 14.3509 15.6974 14.4644 15.5351C14.7386 15.7835 15.0387 15.9971 15.3601 16.1702C15.9679 16.4974 16.6347 16.6698 17.314 16.6697C17.6927 16.6695 17.9996 16.3625 17.9995 15.9837C17.9994 15.605 17.6923 15.2981 17.3136 15.2982C16.8691 15.2984 16.4251 15.186 16.0102 14.9626C15.7005 14.7958 15.4106 14.569 15.1536 14.2882C15.2152 14.1435 15.2723 13.9961 15.3248 13.8464C15.5307 13.259 15.6627 12.6423 15.7185 12.0152H17.3144C17.6931 12.0152 18.0001 11.7082 18.0001 11.3295C18.0001 10.9508 17.6931 10.6438 17.3144 10.6438H15.7185C15.6961 10.3926 15.6616 10.1431 15.6149 9.89652C15.6122 9.87807 15.6086 9.85987 15.6044 9.84194C15.5355 9.49163 15.4421 9.14732 15.3248 8.81254C15.2724 8.66299 15.2153 8.51575 15.1538 8.37113C15.4108 8.09039 15.7005 7.86361 16.0102 7.69686C16.4251 7.47349 16.8691 7.36114 17.3136 7.36127C17.6923 7.36137 17.9994 7.05446 17.9995 6.67575C17.9996 6.29704 17.6927 5.98995 17.314 5.98984C16.6346 5.98965 15.9679 6.16208 15.3601 6.48933C15.0388 6.66232 14.7388 6.8759 14.4646 7.1242C14.351 6.96176 14.2306 6.80514 14.1035 6.65494C13.6668 6.13891 13.1583 5.70619 12.5962 5.37672C12.7696 5.15683 12.9208 4.91597 13.0472 4.659C13.345 4.05391 13.4988 3.37352 13.499 2.68583ZM14.0471 9.31406C14.0417 9.29806 14.0362 9.2821 14.0306 9.26616C13.9528 9.04438 13.863 8.83026 13.7621 8.62503C13.7444 8.59557 13.7291 8.56497 13.7161 8.53351C13.5296 8.17125 13.308 7.83801 13.0566 7.5408C12.6436 7.05275 12.1596 6.67292 11.6357 6.4165C11.1125 6.16034 10.5569 6.0308 9.99943 6.0308C9.442 6.0308 8.88639 6.16034 8.36311 6.4165C7.83929 6.67292 7.35527 7.05275 6.9423 7.5408C6.69219 7.83639 6.47163 8.16762 6.28583 8.52759C6.27157 8.5631 6.25428 8.59754 6.23404 8.63051C6.1342 8.83407 6.04532 9.04635 5.96828 9.26616C5.96269 9.2821 5.95717 9.29806 5.95172 9.31406H14.0471ZM5.65401 10.6855C5.63324 10.89 5.62232 11.0963 5.62148 11.3034C5.6218 11.312 5.62196 11.3207 5.62196 11.3295C5.62196 11.3382 5.6218 11.3469 5.62148 11.3555C5.62434 12.057 5.7427 12.7492 5.96828 13.3928C6.04566 13.6136 6.135 13.8268 6.23538 14.0312C6.25458 14.0627 6.27108 14.0956 6.28482 14.1294C6.47083 14.4901 6.69174 14.822 6.9423 15.1181C7.35527 15.6062 7.83929 15.986 8.36311 16.2425C8.88639 16.4986 9.442 16.6282 9.99943 16.6282C10.5569 16.6282 11.1125 16.4986 11.6357 16.2425C12.1596 15.986 12.6436 15.6062 13.0566 15.1181C13.3085 14.8203 13.5306 14.4863 13.7172 14.1232C13.7296 14.0936 13.7441 14.0648 13.7606 14.037C13.8622 13.8308 13.9525 13.6157 14.0306 13.3928C14.259 12.7412 14.3774 12.0398 14.3774 11.3295C14.3774 11.1136 14.3665 10.8986 14.3448 10.6855H5.65401Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <div className='flex-1 text-sm'>
                                        Bugs Queue
                                    </div>
                                    <span className='hidden group-hover:inline-block p-1 hover:bg-gray-300 rounded-normal ml-auto'>
                                        <BiDotsHorizontalRounded />
                                    </span>
                                </div>
                            </li>

                            <li className='group flex pl-2 pr-2.5 cursor-pointer rounded-normal gap-2 h-8 hover:bg-[#EBEDED] items-center'>
                                <div className='flex flex-1 items-center gap-2'>
                                    <span>
                                        <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" aria-hidden="true" class="icon_d6a7187c13 home-list-icon" data-testid="icon">
                                            <path d="M12.5051 4.00452C9.47168 2.73641 6.02263 3.94072 4.40086 6.69701L5.98777 6.69311C6.40198 6.6921 6.73859 7.02706 6.73961 7.44127C6.74063 7.85548 6.40567 8.19209 5.99145 8.19311L2.75978 8.20104C2.34557 8.20206 2.00896 7.8671 2.00794 7.45288L2.00001 4.22162C1.99899 3.80741 2.33396 3.4708 2.74817 3.46978C3.16238 3.46876 3.49899 3.80372 3.50001 4.21794L3.50274 5.32961C5.62614 2.37091 9.58019 1.15597 13.0836 2.62058C17.1591 4.32433 19.0817 9.00897 17.3777 13.0841C15.6737 17.1591 10.9885 19.0813 6.91307 17.3776C4.50208 16.3696 2.8448 14.3177 2.24609 11.9693C2.14376 11.5679 2.38619 11.1596 2.78757 11.0572C3.18894 10.9549 3.59727 11.1973 3.6996 11.5987C4.18695 13.5104 5.53355 15.175 7.49163 15.9936C10.8029 17.3779 14.6094 15.8161 15.9938 12.5054C17.3781 9.19475 15.8163 5.38876 12.5051 4.00452ZM9.99512 6.74539C9.99512 6.33118 9.65933 5.99539 9.24512 5.99539C8.83091 5.99539 8.49512 6.33118 8.49512 6.74539V10.6121C8.49512 11.0263 8.83091 11.3621 9.24512 11.3621H12.1451C12.5593 11.3621 12.8951 11.0263 12.8951 10.6121C12.8951 10.1978 12.5593 9.86206 12.1451 9.86206H9.99512V6.74539Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <div className='flex-1 text-sm'>
                                        Restrospectives
                                    </div>
                                    <span className='hidden group-hover:inline-block p-1 hover:bg-gray-300 rounded-normal ml-auto'>
                                        <BiDotsHorizontalRounded />
                                    </span>
                                </div>
                            </li>


                            <li className='group flex pl-2 pr-2.5 cursor-pointer rounded-normal gap-2 h-8 hover:bg-[#EBEDED] items-center'>
                                <div className='flex flex-1 items-center gap-2'>
                                    <span>
                                        <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" aria-hidden="true" class="icon_d6a7187c13 icon-service-icon noFocusStyle_48049c26c1" data-testid="icon">
                                            <path d="M6.81934 9.8501C6.40512 9.8501 6.06934 10.1859 6.06934 10.6001 6.06934 11.0143 6.40512 11.3501 6.81934 11.3501H12.8413C13.2555 11.3501 13.5913 11.0143 13.5913 10.6001 13.5913 10.1859 13.2555 9.8501 12.8413 9.8501H6.81934zM6.81953 13.0501C6.40531 13.0501 6.06953 13.3859 6.06953 13.8001 6.06953 14.2143 6.40531 14.5501 6.81953 14.5501H10.6828C11.097 14.5501 11.4328 14.2143 11.4328 13.8001 11.4328 13.3859 11.097 13.0501 10.6828 13.0501H6.81953z" fill="currentColor">
                                            </path>
                                            <path d="M16.5561 7.56686C16.5561 7.58719 16.5553 7.60733 16.5537 7.62725V16.3269C16.5537 16.7839 16.3722 17.2223 16.049 17.5454C15.7258 17.8686 15.2874 18.0502 14.8304 18.0502H5.12372C4.66667 18.0502 4.22833 17.8686 3.90514 17.5454C3.58196 17.2223 3.40039 16.7839 3.40039 16.3269V3.67353C3.40039 3.21647 3.58196 2.77814 3.90514 2.45495C4.22833 2.13176 4.66667 1.9502 5.12372 1.9502H11.0208C11.4775 1.95029 11.9157 2.1317 12.2387 2.45456L16.0492 6.265C16.372 6.58807 16.5536 7.02626 16.5537 7.483V7.50648C16.5553 7.5264 16.5561 7.54653 16.5561 7.56686ZM5.12372 3.4502C5.06449 3.4502 5.00769 3.47372 4.9658 3.51561C4.92392 3.55749 4.90039 3.6143 4.90039 3.67353V16.3269C4.90039 16.3861 4.92392 16.4429 4.9658 16.4848C5.00769 16.5267 5.06449 16.5502 5.12372 16.5502H14.8304C14.8896 16.5502 14.9464 16.5267 14.9883 16.4848C15.0302 16.4429 15.0537 16.3861 15.0537 16.3269V8.31686H11.9128C11.4557 8.31686 11.0174 8.1353 10.6942 7.81211C10.371 7.48892 10.1895 7.05059 10.1895 6.59353V3.50488L5.12372 3.4502ZM14.4797 6.81686L11.6895 4.02658V6.59353C11.6895 6.65276 11.713 6.70956 11.7549 6.75145C11.7967 6.79333 11.8536 6.81686 11.9128 6.81686H14.4797Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <div className='flex-1 text-sm'>
                                        Getting Started
                                    </div>
                                    <span className='hidden group-hover:inline-block p-1 hover:bg-gray-300 rounded-normal ml-auto'>
                                        <BiDotsHorizontalRounded />
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <li className='h-64'>
                        </li>
                    </li>
                </ul>
            </nav>
        </aside>

    )
}
