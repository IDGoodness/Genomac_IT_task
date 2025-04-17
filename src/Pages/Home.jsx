import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function Home(){
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    navigate("/certificate");
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='bg-white shadow-xl rounded-xl p-8'>
            <h1 className='text-center rounded-t-2xl p-3 text-3xl bg-orange-600 text-white'>Certificate Generator</h1>
            <form action="" onSubmit={handleSubmit} className='mt-5'>
              <div className='ml-6 w-full mx-auto'>
                <input type="text"  placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} className='w-10/12 outline rounded-lg text-sm px-3 py-2' />
              </div>
              <button type='submit' className='w-11/12 bg-orange-600 my-5 ml-3 text-center text-white p-3  rounded-full hover:bg-amber-900'>Generate Certificate</button>
            </form>
        </div>
    
    </div>
  )
}

export default Home