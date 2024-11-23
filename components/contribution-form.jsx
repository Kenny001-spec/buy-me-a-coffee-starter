
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Coffee, Gift } from "lucide-react";
import { useState } from "react";
const ContributionForm = () => {
    const [amount, setAmount] = useState(0.001)
	return (
		<Card className="shadow-xl border-2 border-orange-100">
			<CardHeader className="bg-orange-50 border-b border-orange-100">
				<CardTitle className="flex items-center gap-2">
					<Gift className="w-6 h-6 text-orange-500" />
					Send Your Support
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 p-6">
				<div className="grid md:grid-cols-2 gap-4">
					<Input
						placeholder="Your Name"
						className="border-orange-200 focus:ring-orange-300"
					/>
					<Input
						placeholder="Amount (XFI)"
                        type="number"
						className="border-orange-200 focus:ring-orange-300"
                        onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<Textarea
					placeholder="Write a supportive message..."
					className="border-orange-200 focus:ring-orange-300 min-h-[120px]"
				/>
				<div className="flex items-center gap-3">
					<Button className="w-full bg-orange-500 hover:bg-orange-600">
						<Coffee className="mr-2 h-4 w-4" /> Buy Coffee ({amount} XFI)
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default ContributionForm;
