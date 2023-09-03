import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { useState } from 'react';


const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 6) * cos;
    const sy = cy + (outerRadius + 6) * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    // Calculate the adjusted ex and ey values for arrow's endpoint
    const ex = cx + (outerRadius + 26) * cos; // Adjusted value for text's x-coordinate
    const ey = cy + (outerRadius + 26) * sin; // Adjusted value for text's y-coordinate
  
    return (
      <g>
        <text x={cx} y={cy} dy={6} textAnchor="middle" fill={fill} fontSize={12}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 4}
          outerRadius={outerRadius + 6}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <text fontSize={8} x={ex + (cos >= 0 ? 6 : -6)} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 6 : -6)} y={ey} dy={14} textAnchor={textAnchor} fill="#999" fontSize={10}>
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

const PieChartComponent = ({}) => {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];

    const [activeIndex, setActiveIndex] = useState(0);
  
    const onPieEnter = (_, index) => {
      setActiveIndex(index);
    }
    
    return (
      <ResponsiveContainer>

    <PieChart width={150} height={150} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={130}
        cy={90}
        innerRadius={45}
        outerRadius={65}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>

      </ResponsiveContainer>
    )
    
  }
  export default PieChartComponent