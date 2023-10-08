import React from 'react'

const SearchBar = () => {
  return (
    
<form className=' xl:w-[550px] sm:py-2 py-4 px-1 '>   
    
    <div className="flex relative ">
        <div className="absolute  sm:p-0 inset-y-0  left-0 flex items-center ml-3 pointer-events-none">
            <svg className="w-4 h-4 sm:w-3 sm:h-3  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full md:h-10 p-3 sm:h-4 pl-10 md:text-xs sm:text-[7px]  border border-gray-300 rounded-lg bg-gray-50  dark:text-black " placeholder="Search Chocolates, Eggs, Curd..." required/>
        
    </div>
</form>

  )
}

export default SearchBar