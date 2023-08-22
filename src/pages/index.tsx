import CustomSelect from "@/components/Dropdown";
import ExpiredBox from "@/components/Expiredbox";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

// redux stuff
import { useDispatch } from "react-redux";

import { RootState } from "../store/store";
import { setLoading, unsetLoading } from "../store/isLoadingSlice";

// Nextjs stuff
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home(props: any) {
  // const [apiData, setApiData] = useState("");
  // const [payData, setPayData] = useState("");

  // const isLoading = useSelector((state: RootState) => state.isLoading);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/quote_onload");
  //       if (!response.ok) {
  //         throw new Error(`API request failed with status: ${response.status}`);
  //       }
  //       const data = await response.json();

  //       console.log("returned data is: ", data);

  //       setApiData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const selectedCurrency = useSelector(
  //   (state: RootState) => state.currency.selectedCurrency
  // );

  // useEffect(() => {
  //   const currencyData = async () => {
  //     try {
  //       if (selectedCurrency) {
  //         const response = await fetch(
  //           `/api/select_currency?currency=${selectedCurrency}`
  //         );
  //         if (!response.ok) {
  //           throw new Error(
  //             `API request failed with status: ${response.status}`
  //           );
  //         }
  //         const data = await response.json();

  //         console.log("CURRENCY data is: ", data);

  //         setPayData(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   currencyData();
  // }, [selectedCurrency]);

  // Callback function to refresh payData
  // const refreshPayData = async () => {
  //   dispatch(setLoading());
  //   try {
  //     if (selectedCurrency) {
  //       const response = await fetch(
  //         `/api/select_currency?currency=${selectedCurrency}`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`API request failed with status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setPayData(data);
  //     }

  //     dispatch(unsetLoading());
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     dispatch(unsetLoading());
  //   }
  // };

  const router = useRouter();

  const uuid = "a3cafcba-597a-4e55-a43b-189b6624e10b";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={`/payin/${uuid}`}>Go to Accept Quote page</Link>
      <ExpiredBox />
    </main>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const response = await fetch("/api/quote_onload");
//     if (!response.ok) {
//       throw new Error(`API request failed with status: ${response.status}`);
//     }
//     const data = await response.json();

//     return {
//       props: { apiData: data },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     return {
//       props: { apiData: null }, // Handle the error case as needed
//     };
//   }
// };
