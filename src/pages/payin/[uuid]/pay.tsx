import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import PaymentContainer from "@/components/PaymentContainer";
import InfoBlock from "@/components/InfoBlock";

function Pay() {
  const router = useRouter();
  const { uuid } = router.query;

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/quote_onload");
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();
        if (data) {
          const { paidCurrency, address, expiryDate } = data;
          setApiData({ paidCurrency, address, expiryDate });
          setDataLoaded(true);
        }

        if (data?.status === "EXPIRED") {
          router.push(`/payin/${data?.uuid}/expired`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
    setTimerKey((prevKey) => prevKey + 1);
    router.replace(`/payin/[uuid]/expired`, `/payin/${uuid}/expired`);
  };

  const { paidCurrency, address, expiryDate } = apiData;

  return (
    <Layout>
      {dataLoaded && (
        <PaymentContainer
          title={`Pay with ${paidCurrency?.currency}`}
          description={`To complete this payment send the amount due to the ${paidCurrency?.currency} address provided below.`}
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
