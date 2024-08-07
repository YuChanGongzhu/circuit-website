import HomeSection from "./home";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <div className="flex justify-center  bg-[#f5f4f5] w-full min-h-screen">
        <HomeSection />
      </div>
    </main>
  );
}
