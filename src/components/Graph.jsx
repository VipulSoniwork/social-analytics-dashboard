import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { day: 'Sun', Followers: 1520, Engagement: 1480, 'Post Activity': 1060 },
  { day: 'Mon', Followers: 1885, Engagement: 1070, 'Post Activity': 1630 },
  { day: 'Tue', Followers: 1725, Engagement: 790, 'Post Activity': 1655 },
  { day: 'Wed', Followers: 1790, Engagement: 1025, 'Post Activity': 1625 },
  { day: 'Thu', Followers: 1580, Engagement: 1110, 'Post Activity': 1665 },
  { day: 'Fri', Followers: 2025, Engagement: 1590, 'Post Activity': 1680 },
  { day: 'Sat', Followers: 1915, Engagement: 1335, 'Post Activity': 1630 },
];

const Graph = () => {
  return (
    <BarChart width={900} height={300} data={data} >
    <XAxis dataKey="day" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
    <Tooltip />
    <Legend />
    <Bar dataKey="Followers" fill="#8884d8" barSize={20} barRadius={200}  />
    <Bar dataKey="Engagement" fill="#82ca9d" barSize={20} barRadius={200} shape="circle" />
    <Bar dataKey="Post Activity" fill="#ffc658" barSize={20} barRadius={20} shape="circle" />
  </BarChart>

  
  );
};

export default Graph;