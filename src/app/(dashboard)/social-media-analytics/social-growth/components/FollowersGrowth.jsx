import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const FollowersGrowth = ({ data }) => {
	return (
		<div className="bg-white rounded-lg p-6 space-y-4">
			<div className="flex sm:items-center items-start sm:flex-row flex-col justify-between">
				<h2 className="text-lg font-medium">Followers Growth</h2>
				<div className="flex items-center gap-4 text-sm">
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 rounded-full bg-[#DC2626]" />
						<span>Instagram</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 rounded-full bg-[#1D90FF]" />
						<span>Facebook</span>
					</div>
				</div>
			</div>
			<div className="h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<CartesianGrid
							strokeDasharray="3 3"
							stroke="#f0f0f0"
							vertical={false}
						/>
						<XAxis
							dataKey="date"
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 12, fill: '#666' }}
							padding={{ left: 20, right: 20 }}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 12, fill: '#666' }}
							domain={[0, 10000]}
							ticks={[0, 2500, 5000, 7500, 10000]}
						/>
						<Tooltip
							content={({ active, payload }) => {
								if (active && payload && payload.length) {
									return (
										<div className="bg-white p-2 border rounded shadow-sm">
											<p className="text-sm">Apr {payload[0].payload.day}</p>
											<p className="text-sm text-[#DC2626]">
												Instagram: {payload[0].value}
											</p>
											<p className="text-sm text-[#1D90FF]">
												Facebook: {payload[1].value}
											</p>
										</div>
									);
								}
								return null;
							}}
						/>
						<Line
							type="monotone"
							dataKey="instagram"
							stroke="#DC2626"
							strokeWidth={2}
							dot={false}
							activeDot={{ r: 6 }}
						/>
						<Line
							type="monotone"
							dataKey="facebook"
							stroke="#1D90FF"
							strokeWidth={2}
							dot={false}
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default FollowersGrowth;
