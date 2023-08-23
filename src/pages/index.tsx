import React from "react";
import Link from "next/link";

export default function Home() {
  const uuid = "1f69f65a-5930-4ca3-b309-fb251c3a76bc";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={`/payin/${uuid}`}>Go to Accept Quote page</Link>
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
