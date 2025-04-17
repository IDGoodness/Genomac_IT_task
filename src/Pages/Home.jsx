import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home(){
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    navigate("/certificate");
  };
  return (
    <>
        <div>
            <h1>Certificate Generator</h1>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <input type="text"  placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <button type='submit'>Generate Certificate</button>
            </form>
        </div>
    
    </>
  )
}

export default Home