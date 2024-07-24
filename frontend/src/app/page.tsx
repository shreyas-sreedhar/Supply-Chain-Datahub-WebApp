"use client" 
import CompanyList from "@/components/ui/companyList";
import { useState } from 'react';
export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
    
    <div className="min-h-screen bg-white">
        <section className="relative overflow-hidden">
          <div className="relative w-full mx-auto max-w-7xl">
            <div className="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6">
              <div className="flex flex-row items-center justify-between text-sm text-black lg:justify-start">
                <a href="/" className="flex items-center">
                  <span className="text-xl md:text-2xl italic font-semibold tracking-tighter">
                    Supply Chain Hub
                  </span>
                </a>
                <button
                  className="md:hidden p-2 text-black focus:outline-none focus:text-black hover:text-[#0000ff]"
                  onClick={() => setOpen(!open)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
              <nav
                className={`flex-col items-center flex-grow ${
                  open ? 'flex' : 'hidden'
                } md:flex md:flex-row md:justify-end md:pb-0 md:space-x-6 mt-4 md:mt-0`}
              >                
              <a className="py-2 text-sm font-medium text-black hover:text-black/50" href="#_">Assignment</a>
                <a className="active:bg-fuchsia-50 active:text-black bg-[#0000ff]/5 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none group hover:bg-[#0000ff]/5 hover:text-[#0000ff] justify-center px-6 py-2 rounded-full text-[#0000ff] text-sm">
                  Github Repo &nbsp; →
                </a>
              </nav>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center">
          <div className="relative items-center w-full px-5 pt-12 mx-auto lg:px-16 max-w-7xl md:px-12 lg:pt-24">
            <div>
              <p className="mt-8 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-800">
                Discover the list of companies and their details.
              </p>
            </div>
            <div className="pt-12 md:pt-24 pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
              <h3 className="text-base font-medium leading-6 text-gray-900">Filters</h3>
              <div className="mt-3 sm:ml-4 sm:mt-0">
                <span className="inline-flex rounded-md shadow-sm isolate flex-wrap justify-center">
                <button className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg focus:z-10 hover:bg-gray-50 ring-1 ring-gray-300 ring-inset" type="button">
                  <svg className="mr-2 icon icon-tabler icon-tabler-device-desktop-analytics" fill="none" stroke="currentColor" viewBox="0 0 24 24" height="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                    <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
                    <path d="M7 20h10"></path>
                    <path d="M9 16v4"></path>
                    <path d="M15 16v4"></path>
                    <path d="M9 12v-4"></path>
                    <path d="M12 12v-1"></path>
                    <path d="M15 12v-2"></path>
                    <path d="M12 12v-1"></path>
                  </svg>
                  Desktop
                </button>
                <button className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-medium text-gray-900 bg-white focus:z-10 hover:bg-gray-50 ring-1 ring-gray-300 ring-inset" type="button">
                  <svg className="mr-2 icon icon-tabler icon-tabler-device-mobile" fill="none" stroke="currentColor" viewBox="0 0 24 24" height="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                    <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
                    <path d="M11 4h2"></path>
                    <path d="M12 17v.01"></path>
                  </svg>
                  Mobile
                </button>
                <button className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-medium text-gray-900 bg-white focus:z-10 hover:bg-gray-50 ring-1 ring-gray-300 ring-inset" type="button">
                  <svg className="mr-2 icon icon-tabler icon-tabler-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24" height="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                  </svg>
                  Light
                </button>
                <button className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-medium text-gray-900 bg-white rounded-r-lg focus:z-10 hover:bg-gray-50 ring-1 ring-gray-300 ring-inset" type="button">
                  <svg className="mr-2 icon icon-tabler icon-tabler-moon" fill="none" stroke="currentColor" viewBox="0 0 24 24" height="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                  </svg>
                  Dark
                </button>
              </span>
            </div>
          </div>
        </div>
        
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <CompanyList />
       
        </div>
      </section>
    </div>
    
    
   
    </>
  );
}