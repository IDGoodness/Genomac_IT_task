import {useState, useEffect} from 'react'
import img from '../assets/badge.jpg'

const Certificate = () => {

  const [name, setName] = useState('Bukunmi')
  
  // localStorage.setItem('name', 'Adigun Bukunmi')
  
  useEffect(() => {
    try {
      const storedName = localStorage.getItem('name');
      setName(storedName)
      console.log(storedName);
    } catch (error) {
      console.error('Error retrieving name from localStorage:', error);
    }
  },[])


  return (
    <div className='bg-amber-200 flex flex-col items-center justify-evenly w-[100%] h-[100vh] self-center ' >
      <div className="bg-black border-1 rounded-2xl h-[500px] w-[400px] w-full: flex flex-col items-center p-10">
      <h2 className='text-white text-[min(10vw, 70px)] font-bold font'>Congratulations</h2>
      <h2 className='text-white font-bold font'> {name}! 🎉</h2>
      <p className='text-white mt-3'>For the participation in the short course:</p>
      <h2 className='text-center font-extrabold my-5 text-amber-300'>HOW TO BUILD YOUR FIRST MACHINE LEARNING MODEL WITHOUT CODING</h2>
      <p className='text-white text-center text-[12px]'>This is to certify the successful participation in this program and the fulfillment of all its requirements.The recipient demonstrated dedication and commitment and acquired a wealth of knowledge and skills through the program. May this serve as a testament to their hardwork and future success. 
      </p>
      <h1 className='text-white font-extrabold  my-2'>17TH APRIL, 2025</h1>
      <img src={img} className='w-40 mr-5'/>
      </div>
      <div className='bg-amber-500 p-2 rounded-[5px] font-bold text-gray-950'>Download</div>
    </div>
  )
}

export default Certificate