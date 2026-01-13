import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { channel_id, message_id, title, footer } = req.body;

  try {
    const db = await mysql.createConnection({
      host: "host.townstore.shop",
      port: 3306,
      user: "u33_4B1pxWl2CP",
      password: "uS1Eq=sE!3B1==+XDEQf5e4I",
      database: "s33_sparky"
    });

    await db.execute(
      "UPDATE live_time SET channel_id=?, message_id=?, title=?, footer=? WHERE id=1",
      [channel_id, message_id, title, footer]
    );

    await db.end();
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
