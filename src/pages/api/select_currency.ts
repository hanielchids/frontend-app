import { NextApiRequest, NextApiResponse } from "next";

const currencyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const uuid = process.env.UUID;

  const selectedCurrency = req.query.currency as string;

  try {
    const details = await fetch(
      `https://api.sandbox.bvnk.com/api/v1/pay/${uuid}/update/summary`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: selectedCurrency,
          payInMethod: "crypto",
        }),
      }
    );

    if (!details.ok) {
      console.log("Response status:", details.status);
      const responseText = await details.text();
      console.log("Response text:", responseText);
      throw new Error(`API request failed with status: ${details.status}`);
    }

    const data = await details.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default currencyHandler;
