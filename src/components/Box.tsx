import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../store/currencySlice";
import { setLoading, unsetLoading } from "@/store/isLoadingSlice";
import Countdown from "./Countdown";
import { useRouter } from "next/router";

interface BoxProps {
  apiData: any;
  payData: any;
  refreshPayData: () => void;
  handleConfirm: () => void;
}

function Box(props: BoxProps) {
  const [selected, setSelected] = useState("");
  const isLoading = useSelector((state: any) => state.isLoading);
  const [timerKey, setTimerKey] = useState(0);
  const dispatch = useDispatch();
  const { merchantDisplayName, displayCurrency, reference } = props.apiData;
  const { paidCurrency, acceptanceExpiryDate } = props.payData;

  const handleSelected = (event: any) => {
    const newSelected = event.target.value;
    setSelected(newSelected);
    dispatch(setCurrency(newSelected));
  };

  const timeExpired = () => {
    dispatch(setLoading());
    props.refreshPayData();
    setTimerKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    // Simulate loading delay with setTimeout
    dispatch(setLoading());
    const timer = setTimeout(() => {
      dispatch(unsetLoading());
    }, 100);

    return () => clearTimeout(timer);
  }, [selected]);

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
                  {isLoading ? (
                    <svg
                      className="w-8 h-8 animate-spin text-indigo-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4.75V6.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M17.1266 6.87347L16.0659 7.93413"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M19.25 12L17.75 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M17.1266 17.1265L16.0659 16.0659"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 17.75V19.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.9342 16.0659L6.87354 17.1265"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M6.25 12L4.75 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.9342 7.93413L6.87354 6.87347"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      {paidCurrency?.amount} {paidCurrency?.currency}{" "}
                    </>
                  )}
                </div>
              </div>
              <div className="table-divider" />
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="table-text">Quoted price expires in</div>
                <div className="table-text-r">
                  {isLoading ? (
                    <svg
                      className="w-8 h-8 animate-spin text-indigo-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4.75V6.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M17.1266 6.87347L16.0659 7.93413"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M19.25 12L17.75 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M17.1266 17.1265L16.0659 16.0659"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 17.75V19.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.9342 16.0659L6.87354 17.1265"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M6.25 12L4.75 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.9342 7.93413L6.87354 6.87347"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <Countdown
                      targetTimestamp={acceptanceExpiryDate}
                      onTimerExpired={timeExpired}
                      key={timerKey}
                    />
                  )}
                </div>
              </div>
              <div className="w-[416px] h-px relative bg-slate-200" />
            </div>
            <div className="w-full justify-center items-center inline-flex">
              <button
                className="button w-[416px]"
                onClick={props.handleConfirm}
              >
                Confirm
              </button>
            </div>
            {/*end ofamount due section */}
          </>
        )}
      </div>
    </div>
  );
}

export default Box;
