import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setLoading, unsetLoading } from "@/store/isLoadingSlice";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import PaymentContainer from "@/components/PaymentContainer";
import CustomSelect from "@/components/CustomSelect";
import InfoBlock from "@/components/InfoBlock";
import { setCurrency } from "@/store/currencySlice";

function AcceptQuote() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [payDataLoaded, setPayDataLoaded] = useState(false);
  const [apiData, setApiData] = useState({
    merchantDisplayName: "",
    displayCurrency: {
      amount: 0,
      currency: "",
    },
    reference: "",
  });
  const [payData, setPayData] = useState({
    paidCurrency: {
      amount: 0,
      currency: "",
    },
    acceptanceExpiryDate: 0,
  });
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [timerKey, setTimerKey] = useState(0);
  const isLoading = useSelector((state: any) => state.isLoading);
  const { uuid } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/quote_onload");
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();

        if (data) {
          const {
            merchantDisplayName,
            displayCurrency,
            reference,
            quoteStatus,
          } = data;

          if (quoteStatus === "ACCEPTED") {
            router.push(`/payin/${uuid}/pay`);
          }

          setApiData({ merchantDisplayName, displayCurrency, reference });
          setDataLoaded(true);
        }

        if (data?.status === "EXPIRED") {
          router.replace(`/payin/[uuid]/expired`, `/payin/${uuid}/expired`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const currencyData = async () => {
      try {
        if (selectedCurrency) {
          const response = await fetch(
            `/api/select_currency?currency=${selectedCurrency}`
          );
          if (!response.ok) {
            throw new Error(
              `API request failed with status: ${response.status}`
            );
          }
          const data = await response.json();

          if (data) {
            const { paidCurrency, acceptanceExpiryDate } = data;
            setPayData({ paidCurrency, acceptanceExpiryDate });
            setPayDataLoaded(true);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    currencyData();
  }, [selectedCurrency]);

  const refreshPayData = async () => {
    dispatch(setLoading());
    try {
      if (selectedCurrency) {
        const response = await fetch(
          `/api/select_currency?currency=${selectedCurrency}`
        );
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setPayData(data);
      }

      dispatch(unsetLoading());
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(unsetLoading());
    }
  };

  const handleConfirm = async () => {
    setButtonLoading(true);
    try {
      const response = await fetch(`/api/confirm_quote`);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();

      if (data?.quoteStatus === "ACCEPTED") {
        router.replace(`${uuid}/pay`);
      } else {
        router.replace(router.asPath);
      }
      setButtonLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setButtonLoading(false);
    }
  };

  const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelected = event.target.value;
    setSelected(newSelected);
    dispatch(setCurrency(newSelected));
  };

  const timeExpired = () => {
    dispatch(setLoading());
    refreshPayData();
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

  const { merchantDisplayName, displayCurrency, reference } = apiData;
  const { paidCurrency, acceptanceExpiryDate } = payData;

  return (
    <Layout>
      {dataLoaded && (
        <PaymentContainer
          title={merchantDisplayName}
          description={reference}
          displayCurrency={displayCurrency}
          isAcceptQuote={true}
          isPayQuote={false}
        >
          <CustomSelect selected={selected} handleSelected={handleSelected} />
          {selected !== "" && payDataLoaded && (
            <InfoBlock
              amount={paidCurrency?.amount}
              currency={paidCurrency?.currency}
              expiryDate={acceptanceExpiryDate}
              isLoading={isLoading}
              isButtonLoading={buttonLoading}
              isAcceptQuote={true}
              isPayQuote={false}
              timerKey={timerKey}
              onTimerExpired={timeExpired}
              handleConfirm={handleConfirm}
            />
          )}
        </PaymentContainer>
      )}
    </Layout>
  );
}

export default AcceptQuote;
