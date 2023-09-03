import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function LineChartComponent({ }) {
    const data = [
        {
          name: 'Aug 1',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Aug 2',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Aug 3',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Aug 4',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Aug 5',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Aug 6',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Aug 7',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart  
        width={500} height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}