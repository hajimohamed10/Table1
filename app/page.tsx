'use client'
import * as React from 'react';
import AadharCardList from './components/AadharCardList';



const Home : React.FC= () => {
const [data,setData]=React.useState("")
  // React.useEffect(()=>{
  //   getApi()
  // },[])
  const getApi = async () => {
    try { 
      const res = await fetch("http://localhost:5000/haji", {
        method: 'GET',
      });
       const datas = JSON.stringify(res)
      
      setData("data");
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  


  
  
  React.useEffect(() => {
    getApi();
  }, [getApi]);
  

  return (
    <div>
     <AadharCardList/>
    <h2></h2>
    </div>
  );
}

export default Home;
