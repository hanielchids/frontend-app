import React from "react";

interface CustomSelectProps {
  selected: string;
  handleSelected: (e: any) => void;
}

const currencyOptions = [
  { value: "", label: "Select Currency" },
  { value: "BTC", label: "Bitcoin" },
  { value: "ETH", label: "Ethereum" },
  { value: "LTC", label: "Litecoin" },
];

function CustomSelect(props: CustomSelectProps) {
  return (
    <div className="w-[416px] h-20 flex-col justify-start items-start gap-1 inline-flex">
      <div className="text-bvnk_text-dark text-sm font-medium leading-tight">
        Pay with
      </div>

      <div className="inline-block relative w-full">
        <select
          name="currency"
          value={props.selected}
          onChange={props.handleSelected}
          className="block appearance-none w-full h-14 p-4 bg-white border border-bvnk_gray-20 rounded leading-tight "
        >
          {currencyOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 12L0 8H8L4 12ZM4 0L8 4H0L4 0Z"
              fill="#0A1628"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CustomSelect;
