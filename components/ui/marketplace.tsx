"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card } from "@/components/ui/card";

// Mock data for meal swipes
const mockBuySwipes = [
	{
		id: 1,
		cost: 12,
		diningHall: "Carrillo",
		provider: "Sarah M.",
		available: "Today, 6:00 PM",
	},
	{
		id: 2,
		cost: 10,
		diningHall: "De La Guerra",
		provider: "Mike T.",
		available: "Today, 7:30 PM",
	},
	{
		id: 3,
		cost: 15,
		diningHall: "Ortega",
		provider: "Jessica L.",
		available: "Tomorrow, 12:00 PM",
	},
	{
		id: 4,
		cost: 11,
		diningHall: "Portola",
		provider: "Alex K.",
		available: "Today, 5:45 PM",
	},
	{
		id: 5,
		cost: 13,
		diningHall: "Carrillo",
		provider: "Emma R.",
		available: "Tomorrow, 6:30 PM",
	},
	{
		id: 6,
		cost: 9,
		diningHall: "De La Guerra",
		provider: "Chris P.",
		available: "Today, 8:00 PM",
	},
];

const mockSellSwipes = [
	{
		id: 7,
		cost: 14,
		diningHall: "Carrillo",
		provider: "David H.",
		requested: "Any time today",
	},
	{
		id: 8,
		cost: 12,
		diningHall: "Ortega",
		provider: "Lisa W.",
		requested: "Lunch tomorrow",
	},
	{
		id: 9,
		cost: 11,
		diningHall: "Portola",
		provider: "Tom B.",
		requested: "Dinner tonight",
	},
	{
		id: 10,
		cost: 13,
		diningHall: "De La Guerra",
		provider: "Amy S.",
		requested: "Weekend",
	},
];

export default function Marketplace() {
	const [view, setView] = useState("buy");

	const data = view === "buy" ? mockBuySwipes : mockSellSwipes;

	return (
		<section className="p-6 bg-white min-h-screen">
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
				<ButtonGroup className="flex rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.12)]">
					<Button
						variant={view === "buy" ? "default" : "outline"}
						onClick={() => setView("buy")}
						className={view === "buy" ? "bg-gray-900 text-white hover:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.1)]" : "bg-white text-gray-600 hover:bg-gray-50 shadow-[0_0_10px_rgba(0,0,0,0.1)]"}
					>
						Buy
					</Button>
					<Button
						variant={view === "sell" ? "default" : "outline"}
						onClick={() => setView("sell")}
						className={view === "sell" ? "bg-gray-900 text-white hover:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.1)]" : "bg-white text-gray-600 hover:bg-gray-50 shadow-[0_0_10px_rgba(0,0,0,0.1)]"}
					>
						Sell
					</Button>
				</ButtonGroup>
				<Button className="bg-gray-900 text-white hover:bg-gray-800 font-semibold shadow-[0_0_15px_rgba(0,0,0,0.12)]">+ New Listing</Button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{data.map((swipe) => (
					<Card
						key={swipe.id}
						cost={swipe.cost}
						diningHall={swipe.diningHall}
						provider={swipe.provider}
						time={view === "buy" ? swipe.available : swipe.requested}
					/>
				))}
			</div>
		</section>
	);
}