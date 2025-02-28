import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts';
import './ReCharts.css';

function ReChart({ title, data, dataKey, grid }) {

  const formatNumber = (number) => number.toLocaleString('fa-Ir', { style: 'currency', currency: 'IRR' });

  return (
    <>
      <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={6}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke='gray' />
            <XAxis dataKey="years" stroke='gray' />
            <Line type='monotone' dataKey={dataKey} stroke='#008080' />
            <Tooltip formatter={(value) => formatNumber(value)} />
            {grid && <CartesianGrid strokeDasharray="3 3" stroke='#e0dfdf' />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default ReChart;