import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen w-full flex justify-center items-center theme-dark bg-[#fff] text-black  text-center '>
      <div>
      <h1 className='text-[6rem] mb-[10px]'>404</h1>
      <p className='font-[1.5rem]'>This page could not be found.</p>
      <div className='py-4'>
        
        <Link href="/" className='py-2 px-3 rounded-md border  inline-block  hover:bg-black/5 dark:hover:bg-white/10  '>Return Home</Link></div>
    </div>
    </div>
  )
}