import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Wallet } from "lucide-react";
import { useAppKitAccount } from "@reown/appkit/library/react";
// import { useState } from "react";
const OwnerCard = () => {
    const {account} = useAppKitAccount()
    console.log(account.address)
	return (
		<Card className="shadow-xl border-2 border-orange-100">
			<CardHeader className="bg-orange-50 border-b border-orange-100">
				<CardTitle className="flex items-center gap-2">
					<Wallet className="w-6 h-6 text-orange-500" />
					Get Your Coffee
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 p-6">
				<div className="flex justify-between">
					<h2 className="text-3xl font-semibold">Coffee Balance: </h2>
                    <h3 className="text-4xl font-bold">0.01 XFI</h3>
				</div>
				<div className="flex items-center gap-3">
					<Button className="w-full bg-orange-500 hover:bg-orange-600">
						<Coffee className="mr-2 h-4 w-4" /> Withdraw Balance
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default OwnerCard;
