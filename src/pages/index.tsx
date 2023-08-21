import CustomSelect from "@/components/Dropdown";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOptionsVisible, setOptionsVisible] = useState<boolean>(false);

  const toggleDropdownOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const [selected, setSelected] = useState("");

  const handleSelected = (event: any) => {
    setSelected(event.target.value);
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

          <div className="inline-block relative w-full">
            <select
              name="currency"
              value={selected}
              onChange={handleSelected}
              className="block appearance-none w-full h-14 p-4 bg-white border border-bvnk_gray-20 rounded leading-tight "
            >
              <option value="" className="font-medium">
                Select Currency
              </option>
              <option value="a">Option 1</option>
              <option value="b">Option 2</option>
              <option value="c">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
            </div>
          </div>

          {/* <select
            // onClick={toggleDropdownOptions}
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
          </select>

          <div
            id="options"
            className={`${
              isOptionsVisible ? "w-full z-30" : "hidden"
            } py-2 mt-0 bg-white rounded-lg shadow-xl`}
          >
            <option
              // href="#"
              className="dropdown-option"
            >
              Item 1
            </option>
            <option
              // href="#"
              className="dropdown-option"
            >
              Item 2
            </option>
            <option
              // href="#"
              className="dropdown-option"
            >
              Item 3
            </option>
          </div> */}
        </div>

        {/*End of Currency Dropdown */}

        {/* amount due section */}

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
        {/*end ofamount due section */}
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

      {/* expired container */}
      <div className="flex justify-center h-[307px] items-center w-[460px] my-5 bg-white rounded-[10px]">
        <div className="text-center">
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="white" />
                <g clip-path="url(#clip0_8_108)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 0C10.7664 0 0 10.7664 0 24C0 37.2336 10.7664 48 24 48C37.2336 48 48 37.2336 48 24C48 10.7664 37.2336 0 24 0ZM21.6 14.4C21.6 13.0745 22.6745 12 24 12C25.3255 12 26.4 13.0745 26.4 14.4V24C26.4 25.3255 25.3255 26.4 24 26.4C22.6745 26.4 21.6 25.3255 21.6 24V14.4ZM24 36C25.3255 36 26.4 34.9255 26.4 33.6C26.4 32.2745 25.3255 31.2 24 31.2C22.6745 31.2 21.6 32.2745 21.6 33.6C21.6 34.9255 22.6745 36 24 36Z"
                    fill="#FF785F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_108">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="text-center text-slate-900 text-xl font-semibold leading-7 my-5">
              Payment details expired
            </div>

            <div className="self-stretch text-center text-gray-500 text-[15px] font-normal leading-normal whitespace-normal">
              The payment details for your transaction have expired.
            </div>
          </div>
        </div>
      </div>
      {/* expired container */}
    </main>
  );
}
