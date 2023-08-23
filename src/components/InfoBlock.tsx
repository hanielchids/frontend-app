import React from "react";
import Countdown from "./Countdown";
import CopyButton from "./CopyButton";
import TruncateText from "./TruncateText";
import CryptoQRCode from "./CryptoQRCode";

interface InfoBlockProps {
  amount: number;
  currency: string;
  address?: string;
  expiryDate: any;
  isLoading?: boolean;
  isAcceptQuote: boolean;
  isPayQuote: boolean;
  timerKey: number;
  onTimerExpired: () => void;
  handleConfirm?: () => void;
}

function InfoBlock({
  amount,
  currency,
  address,
  expiryDate,
  isLoading,
  isAcceptQuote,
  isPayQuote,
  onTimerExpired,
  handleConfirm,
  timerKey,
}: InfoBlockProps): JSX.Element {
  return (
    <div className="flex-col justify-start items-start gap-3 flex">
      <div className="table-divider" />
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
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
              {amount} {currency}
            </>
          )}
        </div>

        {isPayQuote && (
          <div className="rounded-3xl justify-end items-center gap-2 flex">
            <CopyButton textToCopy={`${amount} ${currency}`} />
          </div>
        )}
      </div>

      <div className="table-divider" />
      {isAcceptQuote && (
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
                targetTimestamp={expiryDate}
                onTimerExpired={onTimerExpired}
                key={timerKey}
              />
            )}
          </div>
        </div>
      )}

      <div className="table-divider" />

      {isPayQuote && (
        <>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="table-text">BTC address</div>
            <div className="table-text-r">
              <TruncateText text={address} maxLength={15} />
            </div>
            <CopyButton textToCopy={address as string} />
          </div>
          <div className="self-stretch h-[180px] pt-3 bg-white flex-col justify-center items-center gap-3 flex">
            <CryptoQRCode address={address as string} />
            <div className="text-center text-bvnk_text-gray text-xs font-normal leading-none">
              {address}
            </div>
          </div>
          <div className="w-[399px] h-px relative bg-slate-200" />
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <div className="table-text">Time left to pay</div>
            <div className="table-text-r">
              <Countdown
                targetTimestamp={expiryDate}
                onTimerExpired={onTimerExpired}
                key={timerKey}
              />
            </div>
          </div>
          <div className="w-[399px] h-px relative bg-slate-200" />
        </>
      )}

      {isAcceptQuote && (
        <div className="w-full justify-center items-center inline-flex">
          <button className="button w-[416px]" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}

export default InfoBlock;
