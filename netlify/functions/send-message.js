export async function handler(event, context) {
  const token = process.env.TELEGRAM_BOT_TOKEN; // token stored safely in Netlify
  const { chat_id, text } = JSON.parse(event.body);

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}