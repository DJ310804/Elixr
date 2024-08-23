import React from 'react'
import Navbar from './navbar/navbar'
import ThemeToggler from '../theme/ThemeToggler'
import { NavLink } from 'react-router-dom';
import backgroundImage from '/src/assets/image7.jpg'; // Adjust the path as necessary

export default function Dashboard() {
  return (
    <div
      style={{
        // backgroundImage: `url(${backgroundImage})`, // Use imported image
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the image in the container
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        display: 'flex', // Use flexbox to position items
        flexDirection: 'column'
      }}
    >
      {/* Main content area */}
      <div className="flex-1 p-4">
        <Navbar />
        {/* Main content */}
        {/* <ThemeToggler /> */}
      </div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img src="/src/assets/image7.jpg" alt="" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo">Fight against Boycott
      </h1>
      <p class="mb-8 leading-relaxed text-indigo">Making friends has become easier and more convinient than never before.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
        Master Cleanse Reliac Heirloom
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2 p-2">
        <div className="relative w-full h-96 overflow-hidden group">
          {/* Container for swap images */}
          <img
            src="/src/assets/Lonely.jpg"
            alt="Lonely"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          />
          <img
            src="/src/assets/VideoCallChill.jpg"
            alt="VideoCallChill"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 p-2">
        <div className="md:p-2 p-1 w-full">
          {/* Adjusted size for demo purposes */}
          <img alt="gallery" className="w-full h-96 object-cover object-center block" src="https://dummyimage.com/600x360" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full h-48 object-cover object-center block" src="https://dummyimage.com/502x302" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full h-48 object-cover object-center block" src="https://dummyimage.com/503x303" />
        </div>
      </div>
      <div className="flex flex-wrap w-full p-2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-96 object-cover object-center block" src="https://dummyimage.com/601x361" />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Confessions</h1>
          <p class="leading-relaxed mb-3">Chat with some purpose or some confession which you can't make to anybody else</p>
          <a class="text-indigo-100 inline-flex items-center btn btn-primary">Lessgo
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Opinions</h1>
          <p class="leading-relaxed mb-3">Give a opinion you always wanted to give but had no one to listen to. Read other's opinion and react to them according to your wish or ask questions if you have any</p>
          <a class="text-indigo-100 inline-flex items-center btn btn-primary">in in
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Chill</h1>
          <p class="leading-relaxed mb-3">Chill with random strangers of your interest and have meaningfull conversations</p>
          <a class="text-indigo-50 inline-flex items-center btn btn-primary">Can't wait
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

      )
}



{/* <section>
    <div>
<div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <img alt="videocallchill" src="\src\assets\VideoCallChill.jpg" />
  </div>
  <div className="diff-item-2">
    <img
      alt="lonely"
      src="src\assets\Lonely.jpg" />
  </div>
  <div className="diff-resizer"></div>
</div>
</div>
</section> */}

