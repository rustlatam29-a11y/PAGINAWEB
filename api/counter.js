export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const apiRes = await fetch("https://api.counterapi.dev/v1/latamrust/visits/up");
    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch {
    return res.status(500).json({ error: "Counter unavailable" });
  }
}
