import Layout from "@/components/Layout";
import QRBox from "@/components/QRBox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Pay() {
  const [apiData, setApiData] = useState("");
  const [timerKey, setTimerKey] = useState(0);
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
    const preventBackNavigation = () => {
      history.pushState(null, document.title, location.href);
    };

    window.addEventListener("popstate", preventBackNavigation);

    return () => {
      window.removeEventListener("popstate", preventBackNavigation);
    };
  }, []);

  const handleRedirect = () => {
    setTimerKey((prevKey) => prevKey + 1);
    router.replace(`${uuid}/expired`);
  };

  return (
    <Layout>
      <QRBox
        apiData={apiData}
        timerKey={timerKey}
        handleRedirect={handleRedirect}
      />
    </Layout>
  );
}

export default Pay;
