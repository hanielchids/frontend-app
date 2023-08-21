import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../store/currencySlice";

interface BoxProps {
  apiData: any;
  payData: any;
}

function Box(props: BoxProps) {
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();

  const handleSelected = (event: any) => {
    setSelected(event.target.value);
    dispatch(setCurrency(selected));

    console.log("currency value is: ", selected);
  };

  console.log("currency props: ", props.payData);

  const { merchantDisplayName, displayCurrency, reference } = props.apiData;
  const { paidCurrency, acceptanceExpiryDate } = props.payData;

  return (
    <div>
      {/* Box component */}
      <div className="quote-container">
        <div className="h-[72px] flex-col justify-start items-start gap-1 flex">
          <div className="h-text">{merchantDisplayName}</div>
          <div className="self-stretch text-center">
            <span className="text-bvnk_text-dark text-[32px] font-semibold leading-10">
              {displayCurrency?.amount}
            </span>
            <span className="text-bvnk_text-dark text-xl font-semibold leading-10">
              {displayCurrency?.currency}
            </span>
          </div>
        </div>
        <div className="w-[303px] text-center">
          <span className="p-text">For reference number: </span>
          <span className="text-bvnk_text-dark text-sm font-medium leading-snug">
            {reference}
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
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
              <option value="LTC">Litecoin</option>
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
        </div>

        {/*End of Currency Dropdown */}

        {/* amount due section */}

        {selected !== "" && (
          <>
            <div className=" flex-col justify-start items-start gap-3 flex">
              <div className="table-divider" />
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="table-text">Amount due</div>
                <div className="table-text-r">
                  {paidCurrency?.amount} {paidCurrency?.currency}
                </div>
              </div>
              <div className="table-divider" />
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="table-text">Quoted price expires in</div>
                <div className="table-text-r">00:00:11</div>
              </div>
              <div className="w-[416px] h-px relative bg-slate-200" />
            </div>
            <div className="w-full justify-center items-center inline-flex">
              <button className="button w-[416px]">Confirm</button>
            </div>
            {/*end ofamount due section */}
          </>
        )}
      </div>
    </div>
  );
}

export default Box;
