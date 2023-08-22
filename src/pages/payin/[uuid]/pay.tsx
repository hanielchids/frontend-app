import Layout from "@/components/Layout";
import QRBox from "@/components/QRBox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Pay() {
  const [apiData, setApiData] = useState("");
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
        setExpireStatus(data?.status);
        setApiData(data);
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
