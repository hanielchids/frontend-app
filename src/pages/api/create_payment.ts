// pages/api/create_payment.ts

import { NextApiRequest, NextApiResponse } from "next";
import Hawk from "hawk";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Authorization",
  'Hawk id="OPKgv0EPsYakvPG9542LXnvS4PwvP4eBl8QE1NS5gQPcWyJVkJxpk5w9zThCBmhl", ts="1692610609", nonce="vp7JbC", mac="yCJK/GIleoDJPOJRt58rO57BdrZ/+1h0063Q9tChshY="'
);

const paymentHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const Alphanum =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

  const generateRandomId = () => {
    let id = "";
    for (let i = 0; i < 6; i++) {
      id += Alphanum.charAt(Math.floor(Math.random() * Alphanum.length));
    }
    return id;
  };

  const ref = `test_reference_in_${generateRandomId()}`;

  // Hawk credentials
  const credentials: Hawk.client.Credentials = {
    id: "OPKgv0EPsYakvPG9542LXnvS4PwvP4eBl8QE1NS5gQPcWyJVkJxpk5w9zThCBmhl",
    key: "VIpHztPTiYWNcy0ma6XdRiVTQaWoAQhDYbWI7byscsvQintVreoptyft0A9FIret",
    algorithm: "sha256",
  };

  // API endpoint
  const apiUrl = "https://api.sandbox.bvnk.com/api/v1/pay/summary";

  // Create a Hawk header
  const header = Hawk.client.header(apiUrl, "POST", { credentials });
  // const authorizationHeader = header.header(); // Get the Hawk authorization header

  try {
    const details = await fetch(
      "https://api.sandbox.bvnk.com/api/v1/pay/summary",
      {
        method: "POST",
        headers: myHeaders,
        //  {
        //   "Content-Type": "application/json",
        //   // Authorization: authorizationHeader,
        // },
        body: JSON.stringify({
          merchantId: "fb140b88-7296-4397-bd9e-47b29a4805ee",
          type: "IN",
          amount: 200,
          currency: "ZAR",
          expiryMinutes: 30,
          reference: ref,
        }),
      }
    );

    if (!details.ok) {
      throw new Error(`API request failed with status: ${details.status}`);
    }

    const data = await details.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default paymentHandler;
