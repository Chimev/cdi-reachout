"use client"
 
// import useLogin from '@/Context/CustomeHook/useLogin';
import Image from 'next/image'
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter()

  // const {setLoggedIn} = useLogin()

  const onSubmit= (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setLoggedIn(true),
    router.push('/worker')
  }


  return (
    <>
    <div  className='flex flex-col border max-w-sm gap-10 justify-center items-center pt-8 m-auto'>
        <div className='relative h-40 w-40 '>
            <Image src={'/logo.png'} fill alt=''  className='object-contain'/>
        </div>
        <form onSubmit={onSubmit} className='flex flex-col gap-5 text-lg '>
            <input type="text" placeholder='Enter Your email..' className='p-2 outline-none' />
            <input type="password" placeholder='Enter your Password...' className='p-2 outline-none' />
            <button type='submit' className='bg-darkBlue text-white'>login</button>
            <div>
            <p>Dont have an account <span className='text-lightRed'>Register</span></p>
            <p className='text-center text-darkBlue'>Forgot Password?</p>
            </div>
        </form>
    </div>
    </>
    
  );
}
