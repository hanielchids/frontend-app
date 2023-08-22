import React, { useEffect, useState } from "react";
import Box from "@/components/Box";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setLoading, unsetLoading } from "@/store/isLoadingSlice";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

function AcceptQuote() {
  const [apiData, setApiData] = useState("");
  const [payData, setPayData] = useState("");
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const { uuid } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/quote_onload");
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();

        console.log("returned data is: ", data);

        setApiData(data);
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

          console.log("CURRENCY data is: ", data);

          setPayData(data);
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
    try {
      const response = await fetch(`/api/confirm_quote`);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      router.replace(`${uuid}/pay`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Layout>
      <Box
        apiData={apiData}
        payData={payData}
        refreshPayData={refreshPayData}
        handleConfirm={handleConfirm}
      />
    </Layout>
  );
}

export default AcceptQuote;
