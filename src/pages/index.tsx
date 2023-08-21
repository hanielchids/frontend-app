import Box from "@/components/Box";
import CustomSelect from "@/components/Dropdown";
import ExpiredBox from "@/components/Expiredbox";
import QRBox from "@/components/QRBox";
import Image from "next/image";
import { useEffect, useState } from "react";

// redux stuff
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Home(props: any) {
  const [apiData, setApiData] = useState("");
  const [payData, setPayData] = useState("");

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

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );

  useEffect(() => {
    const currencyData = async () => {
      try {
        const response = await fetch(
          `/api/select_currency?currency=${selectedCurrency}`
        );
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const data = await response.json();

        console.log("CURRENCY data is: ", data);

        setPayData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    currencyData();
  }, [selectedCurrency]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box apiData={apiData} payData={payData} />

      <QRBox />
      <ExpiredBox />
    </main>
  );
}
