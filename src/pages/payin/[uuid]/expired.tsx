import ExpiredBox from "@/components/Expiredbox";
import Layout from "@/components/Layout";
import React, { useEffect } from "react";

function Expired() {
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

  return (
    <Layout>
      <ExpiredBox />
    </Layout>
  );
}

export default Expired;
