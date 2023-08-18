import CustomSelect from "@/components/Dropdown";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOptionsVisible, setOptionsVisible] = useState<boolean>(false);

  const toggleDropdownOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Box component */}
      <div className="rounded-md relative text-center flex flex-col m-5 bg-white z-30 p-6 w-[460px]">
        <h1 className="text-xl font-medium text-bvnk_text-dark">
          Merchant Display Name
        </h1>

        <h1 className="text-[32px] font-medium text-bvnk_text-dark">
          200 <span className="text-xl">EUR</span>
        </h1>
        <h5 className="text-sm font-normal text-bvnk_text-gray">
          For reference number:{" "}
          <span className="font-medium text-bvnk_text-dark">REF292970</span>
        </h5>

        {/* Currency Dropdown */}

        <div className="w-[416px] h-20 flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-slate-900 text-sm font-medium leading-tight">
            Pay with
          </div>
          <button
            onClick={toggleDropdownOptions}
            className="self-stretch h-14 p-4 bg-white rounded border border-slate-200 justify-between items-center gap-3 inline-flex"
          >
            <span className="select-none font-medium">Select Currency</span>

            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 12L0 8H8L4 12ZM4 0L8 4H0L4 0Z"
                fill="#0A1628"
              />
            </svg>
          </button>

          <div
            id="options"
            className={`${
              isOptionsVisible ? "w-full z-30" : "hidden"
            } py-2 mt-0 bg-white rounded-lg shadow-xl`}
          >
            <a href="#" className="dropdown-option">
              Item 1
            </a>
            <a href="#" className="dropdown-option">
              Item 2
            </a>
            <a href="#" className="dropdown-option">
              Item 3
            </a>
          </div>
        </div>

        {/* Currency Dropdown */}

        <button className="button w-[416px]">Confirm</button>
      </div>
    </main>
  );
}
