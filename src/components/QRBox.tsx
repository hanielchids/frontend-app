import React from "react";
import CopyButton from "./CopyButton";
import Countdown from "./Countdown";
import CryptoQRCode from "./CryptoQRCode";

interface QRBoxProps {
  apiData: any;
  timerKey: number;
  handleRedirect: () => void;
}

function QRBox(props: QRBoxProps) {
  const timeExpired = props.handleRedirect;
  const { paidCurrency, address, expiryDate } = props.apiData;

  return (
    <div>
      <div className="quote-container w-[449px]">
        <div className="w-[303px] pb-[2.96px] justify-center items-center inline-flex">
          <div className="h-text">Pay with Bitcoin</div>
        </div>

        <div className="text-center p-text">
          To complete this payment send the amount due to the BTC address
          provided below.
        </div>
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="table-divider" />
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="table-text">Amount due</div>
            <div className="table-text-r">
              {paidCurrency?.amount} {paidCurrency?.currency}
            </div>
            <div className="rounded-3xl justify-end items-center gap-2 flex">
              <CopyButton
                textToCopy={`${paidCurrency?.amount} ${paidCurrency?.currency}`}
              />
            </div>
          </div>
          <div className="table-divider" />
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="table-text">BTC address</div>
            <div className="table-text-r">{address?.address}</div>
            <CopyButton textToCopy={`${address?.address}`} />
          </div>
          <div className="self-stretch h-[180px] pt-3 bg-white flex-col justify-center items-center gap-3 flex">
            <CryptoQRCode address={address?.address} />
            <div className="text-center text-bvnk_text-gray text-xs font-normal leading-none">
              {address?.address}
            </div>
          </div>
          <div className="w-[399px] h-px relative bg-slate-200" />
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <div className="table-text">Time left to pay</div>
            <div className="table-text-r">
              <Countdown
                targetTimestamp={expiryDate}
                onTimerExpired={timeExpired}
                key={props.timerKey}
              />
            </div>
          </div>
          <div className="w-[399px] h-px relative bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default QRBox;
