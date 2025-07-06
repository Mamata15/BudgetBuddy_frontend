import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Freelancing', value: 40000 },
  { name: 'Salary', value: 50000 },
  { name: 'Investments', value: 10000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const IncomePiechart = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <h3 style={{ color: '#1e40af' }}>Income Breakdown</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          outerRadius={100}
          label
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default IncomePiechart;
