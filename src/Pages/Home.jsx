import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
        <div>
            <p>Home</p>
            <p>
                <Link to={"/certificate"}>Click</Link>
            </p>
        </div>
    
    </>
  )
}

export default Home