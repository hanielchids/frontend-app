import React, { ReactNode } from "react";

interface PaymentContainerProps {
  title: string;
  description: string;
  displayCurrency?: {
    amount: number;
    currency: string;
  };
  isAcceptQuote: boolean;
  isPayQuote: boolean;
  children: ReactNode;
}

function PaymentContainer({
  title,
  description,
  displayCurrency,
  isAcceptQuote,
  isPayQuote,
  children,
}: PaymentContainerProps) {
  return (
    <div>
      <div className={`quote-container ${isPayQuote && "w-[449px]"} `}>
        {isAcceptQuote && (
          <>
            <div className="h-[72px] flex-col justify-start items-start gap-1 flex">
              <div className="h-text">{title}</div>
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
                {description}
              </span>
            </div>
          </>
        )}
        {isPayQuote && (
          <>
            <div className="w-[303px] pb-[2.96px] justify-center items-center inline-flex">
              <div className="h-text">{title}</div>
            </div>

            <div className="text-center p-text">{description}</div>
          </>
        )}

        {children}
      </div>
    </div>
  );
}

export default PaymentContainer;
