import InfoBlock from "@/components/InfoBlock";
import Layout from "@/components/Layout";
import PaymentContainer from "@/components/PaymentContainer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Pay() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [apiData, setApiData] = useState({
    paidCurrency: {
      amount: 0,
      currency: "",
    },
    address: {
      address: "",
    },
    expiryDate: null,
  });
  const [timerKey, setTimerKey] = useState(0);
  const router = useRouter();
  const { uuid } = router.query;
  const [expireStatus, setExpireStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/quote_onload");
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();

        console.log("returned data is: ", data);

        if (data) {
          const { paidCurrency, address, expiryDate } = data;
          setExpireStatus(data?.status);
          setApiData({ paidCurrency, address, expiryDate });
          setDataLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const preventNavigation = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", preventNavigation);

    return () => {
      window.removeEventListener("beforeunload", preventNavigation);
    };
  }, []);

  const handleRedirect = () => {
    setTimerKey((prevKey) => prevKey + 1);
    if (expireStatus === "EXPIRED") {
      router.replace(`/payin/[uuid]/expired`, `/payin/${uuid}/expired`);
    } else {
      router.replace(router.asPath);
    }
  };

  const { paidCurrency, address, expiryDate } = apiData;

  return (
    <Layout>
      {dataLoaded && (
        <PaymentContainer
          title="Pay with Bitcoin" // displayCurrency field so title matches crypto chosen
          description="To complete this payment send the amount due to the BTC address
          provided below."
          isAcceptQuote={false}
          isPayQuote={true}
        >
          <InfoBlock
            amount={paidCurrency?.amount}
            currency={paidCurrency?.currency}
            address={address?.address}
            expiryDate={expiryDate}
            isAcceptQuote={false}
            isPayQuote={true}
            timerKey={timerKey}
            onTimerExpired={handleRedirect}
          />
        </PaymentContainer>
      )}
    </Layout>
  );
}

export default Pay;
