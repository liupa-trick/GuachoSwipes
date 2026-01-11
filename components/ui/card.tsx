export function Card({
	cost,
	diningHall,
	provider,
	time,
}: {
	cost: number;
	diningHall: string;
	provider: string;
	time: string;
}) {
	return (
		<div className="bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-shadow duration-200 overflow-hidden">
			<div className="p-5 space-y-4">
				<div className="flex items-start justify-between">
					<h3 className="text-xl font-bold text-gray-700">{diningHall}</h3>
					<div className="bg-gray-900 text-white px-3 py-1 rounded-md font-bold text-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
						${cost}
					</div>
				</div>
				<div className="space-y-2 pt-3 border-t border-gray-200">
					<div className="flex items-center justify-between">
						<span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Provider</span>
						<span className="text-sm font-semibold text-gray-600">{provider}</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Time</span>
						<span className="text-sm font-semibold text-gray-600">{time}</span>
					</div>
				</div>
			</div>
		</div>
	);
}