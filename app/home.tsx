"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
function Header() {
  return (
    <div className="flex justify-between items-start w-full px-4 py-4">
      <img className="h-10" src="/logo/circuit.svg" alt="" />
      <div className="hidden gap-4 md:flex ">
        <button
          onClick={() => {
            window.open("https://x.com/gmCircuit", "_blanket");
          }}
          className="p-5 bg-[#f6f6f6] shadow-outer rounded-2xl"
        >
          <img className="w-5 h-5" src="/logo/x.svg" alt="" />
        </button>
        <button
          onClick={() => {
            window.open("https://testnet.circuit.money/", "_blanket");
          }}
          className="flex justify-end w-60 gap-4 p-2 shadow-gb text-lg font-[800] items-center rounded-2xl bg-[#28933A] text-white font-monument"
        >
          <span>ENTER APP</span>
          <img className="h-9" src="/icon/pawn.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div
      className={clsx(
        "flex flex-col items-center md:items-start justify-between w-full p-4 mt-10 md:mt-32 z-10 gap-2"
      )}
    >
      <div className="text-[28px] md:text-[76px] 2xl:text-[140px] text-center md:text-left font-monument">
        The Liquidity Hub
        <br />
        on{" "}
        <a className="text-[#28933A]" href="https://www.zircuit.com/">
          ZIRCUIT
        </a>
      </div>
      <div className="text-lg md:text-xl 2xl:text-4xl text-center md:text-left">
        <span className="font-bold">Trade, earn yield & points</span> directly
        on <span className="font-bold">Zircuit L2</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <button
          onClick={() => {
            window.open("https://testnet.circuit.money/", "_blanket");
          }}
          className="w-[190px] h-[60px] gap-4 p-2 shadow-gb items-center rounded-2xl bg-[#28933A] text-white font-monument"
        >
          ENTER APP
        </button>
        <button
          onClick={() => {
            window.open("https://docs.circuit.money", "_blanket");
          }}
          className="w-[190px] h-[60px] bg-[#f6f6f6] shadow-outer rounded-2xl font-monument"
        >
          DOCS
        </button>
      </div>
    </div>
  );
}

export default function HomeSection() {
  return (
    <div
      className={clsx(
        "flex flex-col justify-start items-center px-10  w-screen h-screen  relative"
      )}
    >
      <Header />
      <Title />
      <div className="absolute z-0 bottom-0 left-0 w-[300px] md:w-[700px] h-[120px] md:h-[300px] bg-[#4a9145] blur-[100px] md:blur-[200px]" />
      <img
        className="absolute z-0 bottom-10 md:right-0 w-[360px] md:w-[600px] 2xl:w-[1000px]"
        src="/cat-right.jpg"
        alt=""
      />
    </div>
  );
}
