import { NextApiRequest, NextApiResponse } from "next";

const quoteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const uuid = "a3cafcba-597a-4e55-a43b-189b6624e10b";

  try {
    const details = await fetch(
      `https://api.sandbox.bvnk.com/api/v1/pay/${uuid}/summary`,
      {
        method: "GET",
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

export default quoteHandler;
