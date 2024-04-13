import Header from "./components/header";

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="">
      <Header />
      <div className="h-[90vh]" style={{overflowY: 'auto'}}>
        {children}
      </div>
    </main>
  );
}
