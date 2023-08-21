import React from "react";
import Image from "next/image";

function QRBox() {
  return (
    <div>
      <div className="quote-container w-[449px]">
        <div className="w-[303px] pb-[2.96px] justify-center items-center inline-flex">
          <div className="h-text">Pay with Bitcoin</div>
        </div>
        {/* <div className="w-[303px] h-[48.66px] "> */}

        <div className="text-center p-text">
          To complete this payment send the amount due to the BTC address
          provided below.
        </div>
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="table-divider" />
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="table-text">Amount due</div>
            <div className="table-text-r">0.00410775 BTC</div>
            <div className="rounded-3xl justify-end items-center gap-2 flex">
              <div className="text-center text-bvnk_blue-light text-[15px] font-medium leading-normal">
                Copy
              </div>
            </div>
          </div>
          <div className="table-divider" />
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="table-text">BTC address</div>
            <div className="table-text-r">rh6X8bZ...haAdy</div>
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
            <div className="table-text">Time left to pay</div>
            <div className="table-text-r">02:59:59</div>
          </div>
          <div className="w-[399px] h-px relative bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default QRBox;
