import { Select } from "antd";
import Header from "./components/header";
import { presetedColors } from "@/main/domain/cloths";

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="">
      <Header />
      <Select options={presetedColors} mode="multiple">

      </Select>
      <div className="h-[90vh]" style={{overflowY: 'auto'}}>
        {children}
      </div>
    </main>
  );
}
