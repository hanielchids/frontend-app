import { NextApiRequest, NextApiResponse } from "next";

const confirmHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const uuid = "afe0a04b-657a-4293-ab7b-70f62ccc3a62";

  try {
    const details = await fetch(
      `https://api.sandbox.bvnk.com/api/v1/pay/${uuid}/accept/summary`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          successUrl: "no_url",
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

export default confirmHandler;
