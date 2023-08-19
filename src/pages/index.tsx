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
      <div className="w-[460px] h-[459px] p-[25px] bg-white rounded-[10px] flex-col justify-start items-center gap-[25px] inline-flex">
        <div className="h-[72px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-center text-bvnk_text-dark text-xl font-medium leading-7">
            Merchant Display Name
          </div>
          <div className="self-stretch text-center">
            <span className="text-bvnk_text-dark text-[32px] font-semibold leading-10">
              200{" "}
            </span>
            <span className="text-bvnk_text-dark text-xl font-semibold leading-10">
              EUR
            </span>
          </div>
        </div>
        <div className="w-[303px] text-center">
          <span className="text-bvnk_text-gray text-sm font-normal leading-snug">
            For reference number:
          </span>
          <span className="text-bvnk_text-dark text-sm font-medium leading-snug">
            {" "}
            REF292970
          </span>
        </div>

        {/* Currency Dropdown */}

        <div className="w-[416px] h-20 flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-bvnk_text-dark text-sm font-medium leading-tight">
            Pay with
          </div>
          <button
            onClick={toggleDropdownOptions}
            className="self-stretch h-14 p-4 bg-white rounded border border-bvnk_gray-200 justify-between items-center gap-3 inline-flex"
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

        <div className="h-[95px] flex-col justify-start items-start gap-3 flex">
          <div className="w-[416px] h-px relative bg-slate-200" />
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 text-bvnk_text-gray text-sm font-normal leading-snug">
              Amount due
            </div>
            <div className="text-bvnk_text-dark text-sm font-medium leading-snug">
              0.00410775 BTC
            </div>
          </div>
          <div className="w-[416px] h-px relative bg-slate-200" />
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 text-bvnk_text-gray text-sm font-normal leading-snug">
              Quoted price expires in
            </div>
            <div className="text-bvnk_text-dark text-sm font-medium leading-snug">
              00:00:11
            </div>
          </div>
          <div className="w-[416px] h-px relative bg-slate-200" />
        </div>
        <div className="w-[416px] justify-center items-center inline-flex">
          <button className="button w-[416px]">Confirm</button>
        </div>
      </div>
      {/*  */}

      {/* qr code section */}

      <div className="w-[449px] h-[559px] relative">
        <div className="w-[449px] h-[521px] p-[25px] left-0 top-[38px] absolute bg-white rounded-[10px] flex-col justify-start items-center gap-[25px] inline-flex">
          <div className="w-[303px] pb-[2.96px] justify-center items-center inline-flex">
            <div className="grow shrink basis-0 text-center text-bvnk_text-dark text-xl font-medium leading-7">
              Pay with Bitcoin
            </div>
          </div>
          <div className="w-[303px] h-[48.66px] text-center text-bvnk_text-gray text-sm font-normal leading-snug">
            To complete this payment send the amount due to the BTC address
            provided below.
          </div>
          <div className="w-[399px] h-[366px] flex-col justify-start items-start gap-3 flex">
            <div className="w-[399px] h-px relative bg-slate-200" />
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 text-bvnk_text-gray text-sm font-normal leading-snug">
                Amount due
              </div>
              <div className="text-bvnk_text-dark text-sm font-medium leading-snug">
                0.00410775 BTC
              </div>
              <div className="rounded-3xl justify-end items-center gap-2 flex">
                <div className="text-center text-bvnk_blue-light text-[15px] font-medium leading-normal">
                  Copy
                </div>
              </div>
            </div>
            <div className="w-[399px] h-px relative bg-slate-200" />
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 text-bvnk_text-gray text-sm font-normal leading-snug">
                BTC address
              </div>
              <div className="text-bvnk_text-dark text-sm font-medium leading-snug">
                rh6X8bZ...haAdy
              </div>
              <div className="text-center text-bvnk_blue-light text-[15px] font-medium leading-normal">
                Copy
              </div>
            </div>
            <div className="self-stretch h-[180px] pt-3 bg-white flex-col justify-center items-center gap-3 flex">
              <Image
                className="w-[140px] h-[140px]"
                width={"140"}
                height={"140"}
                src="https://via.placeholder.com/140x140"
                alt=""
              />
              <div className="text-center text-bvnk_text-gray text-xs font-normal leading-none">
                rh6X8bZXE49xZhNwVx47K6Q6px7nDhaAdy
              </div>
            </div>
            <div className="w-[399px] h-px relative bg-slate-200" />
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="grow shrink basis-0 text-bvnk_text-gray text-sm font-normal leading-snug">
                Time left to pay
              </div>
              <div className="text-bvnk_text-dark text-sm font-medium leading-snug">
                02:59:59
              </div>
            </div>
            <div className="w-[399px] h-px relative bg-slate-200" />
          </div>
        </div>
      </div>
      {/* qr code section */}
    </main>
  );
}
