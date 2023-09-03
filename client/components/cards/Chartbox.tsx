import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = () => {
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
            <div className="chartBox flex h-full">
              <div className="boxInfo flex flex-1 flex-col justify-between">
                <div className="flex title content-center gap-2">
                <img className="w-6 h-6" src="/assets/members.svg" alt="" />
                  <span>New Users</span>
                  
                </div>
                <h1 className="text-heading1-bold">102</h1>
                <h2 className=" text-sky-300"> View All </h2>
              </div>
              <div className="chartInfo flex flex-3 flex-col justify-between">
                <div className="chart h-full w-full">
                  <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={data}>
                      <Tooltip
                        contentStyle={{ background: "transparent", border: "none" }}
                        labelStyle={{ display: "none" }}
                        position={{ x: 10, y: 80 }}
                      />
                      <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="chartText flex flex-col text-right">
                  <span className="percent text-heading3-bold text-green-500">45%</span>
                  <span className="duration text-green-500 text-sm">this month</span>
                </div>
              </div>
            </div>
          );
        };
        
        export default ChartBox;