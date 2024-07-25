"use client" 
import CompanyList from "@/components/ui/companyList";
import Navbar from "@/components/ui/navBar";
export default function Home() {

  return (
    <>
    
    <div className="min-h-screen bg-white">
     <Navbar/>

      <section className="relative flex flex-col items-center justify-center">
          <div className="relative items-center w-full px-5 pt-12 mx-auto lg:px-8 max-w-7xl md:px-12">
            <div>
              <p className="mt-8 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-800">
                Discover the list of companies and their details.
              </p>
             
            </div>
        
        </div>
        
        <div className="relative items-center w-full px-4 py-4 mx-auto lg:px-16 max-w-7xl md:px-12">
        <CompanyList />
       
        </div>
      </section>
    </div>
    
    
   
    </>
  );
}