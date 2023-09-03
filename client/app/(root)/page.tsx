'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LineChartComponent from '@/components/cards/Line';
import PieChartComponent from '@/components/cards/Pie';
import TopBox from '@/components/cards/Topbox';
import BarchartComponent from '@/components/cards/Barchart';
import ChartBox from '@/components/cards/Chartbox';
import AreachartComponent from '@/components/cards/Areachart';
import BarchartComponent2 from '@/components/cards/Barchart2';
import { Progress } from "@/components/ui/progress"
import { ProgressBar } from "@tremor/react";
import Analytics from '@/components/cards/Analytics';


const Home = () => {
  const [image, setImage] = useState('');
  const [people, setPeople] = useState([]);
  const [dataframe, setDataframe] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8080/api/plot")
        .then((response) => response.json())
        .then((data) => {
          setImage(data.table);
          setPeople(data.people);
          setDataframe((data.table)); // Parse the DataFrame JSON
          console.log(data.moneySpent)
        });
    }, 8000); // call every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (

      <div className= "shadow rounded-lg">
    
    <div className="flex justify-between px-4 p-2 -mt-14 h-24">
    <div className="w-1/4 mx-4 p-4 bg-gray-800 rounded-lg h-25">
    <h2 className="font-bold text-light-1 text-center -mt-3">Sales Target</h2>
   
      <p className="text-light-1 text-center">$5,000 / $10,000</p>
      <ProgressBar value={45} color="teal" className="mt-3" />
      <p></p>
      
    </div>
          
    <div className="w-1/4 mx-4 p-4 bg-gray-800 rounded-lg">
            <h2 className="font-bold text-light-1 text-center -mt-3">Growth</h2>
            <p className="text-light-1 text-center">+10% this month</p>
            <ProgressBar value={35} color="teal" className="mt-3" />
            
          </div>
    
          <div className="w-1/4 mx-4 p-4 bg-gray-800 rounded-lg">
            <h2 className="font-bold text-light-1 text-center -mt-3">Growth</h2>
            <p className="text-light-1 text-center">+10% this month</p>
            <ProgressBar value={45} color="teal" className="mt-3" />
            
          </div>
          
    
          <div className="w-1/4 mx-4 p-4 bg-gray-800 rounded-lg">
          <h2 className="font-bold text-light-1 text-center -mt-3">Reviews</h2>
          <p></p>
            <p className="text-light-1 text-center">4/5 Stars</p>
          
          
          </div>
    
        </div>
    
        <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 text-light-1">
  <div className="bg-gray-800 rounded p-2 h-56"> <ChartBox/>  </div> 
  <div className="bg-gray-800 rounded p-2 h-56"><ChartBox/></div>
  <div className="bg-gray-800 rounded p-2 h-56"><ChartBox/></div>
  <div className="bg-gray-800 rounded p-2 h-56 col-span-2"><p className="-mt-2 font-bold">Box 4</p> <LineChartComponent/> </div>
  <div className="bg-gray-800 rounded p-2 h-56 "><PieChartComponent /></div> 
  <div className="bg-gray-800 rounded p-2 h-97 col-span-2"><AreachartComponent/></div>  

  <div className="bg-gray-800 rounded p-2 h-97 row-span-2"><TopBox/></div> 
  <div className="bg-gray-800 rounded p-2 h-97"><Analytics/></div>
  <div className="bg-gray-800 rounded p-2 h-64"><BarchartComponent2/></div>
  
</div>
</div>
  
  )
}

export default Home;
