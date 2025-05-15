import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Bar, BarChart } from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 50 },
  { name: "Mar", value: 70 },
];

export default function App() {
  return (
    <>
      <div className="text-2xl text-blue-800 mb-4">
        Hello
        <Button className="ml-4">Click ME</Button>
      </div>

      <div className="p-4 border rounded-md w-fit">
        <Calendar mode="single" />
      </div>

      <div className="p-4 border rounded-md w-fit">
        <BarChart width={300} height={200} data={data}>
          <Bar dataKey="value" fill="blue" />
        </BarChart>
      </div>
    </>
  );
}
