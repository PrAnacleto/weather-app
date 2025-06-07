import { DialogDemo } from "@/components/DialogDemo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-2">
      <span className="text-4xl font-bold text-blue-600">🌤️</span>
      <h1 className="">Weather App</h1>
      <p className="text-gray-500">Get the latest weather updates</p>
      <DialogDemo />
    </div>
    
  );
}
