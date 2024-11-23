"use client";
import ContributionForm from "@/components/contribution-form";
import Header from "@/components/header";
import SupportersSection from "@/components/supporters-section";
import { useAppKitAccount } from "@reown/appkit/react";
import { Coffee } from "lucide-react";

export default function Home() {
  const {address, status} = useAppKitAccount()
  console.log({address, status})
  
	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
			<Header />
			<div className="max-w-4xl mx-auto space-y-8 p-4 sm:px-6 lg:px-8 ">
				<div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto space-y-8">
						<div className="text-center space-y-4">
							<div className="flex justify-center items-center gap-3">
								<Coffee className="w-10 h-10 text-orange-500" />
								<h1 className="text-4xl font-bold text-gray-800">
									Buy Me A Coffee
								</h1>
							</div>
							<p className="text-gray-600 max-w-xl mx-auto">
							Help fuel my blockchain journey with a virtual coffee. Every
							contribution helps fuel creativity!
							</p>
						</div>
						<ContributionForm />
						<SupportersSection />
					</div>
				</div>
			</div>
		</div>
	);
}
