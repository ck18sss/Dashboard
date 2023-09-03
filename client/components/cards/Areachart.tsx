import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

export default function AreachartComponent() {
    
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
    
    const cardinal = curveCardinal.tension(0.2);

        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        );
      }
    