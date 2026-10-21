
async function searchAnime(title) {
  const query = `
    query ($search: String) {
      Page(page: 1, perPage: 5) {
        media(search: $search, type: ANIME) {
          title {
            romaji
            english
          }
          episodes
          status
          averageScore
          siteUrl
        }
      }
    }
  `;

  const response = await fetch(
    "https://graphql.anilist.co",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        query,
        variables: { search: title }
      })
    }
  );

  if (!response.ok) {
    throw new Error("Anime API request failed");
  }

  const data = await response.json();
  return data.data.Page.media;
}
con
async function searchAnime(title) {
  const query = `
    query ($search: String) {
      Page(page: 1, perPage: 5) {
        media(search: $search, type: ANIME) {
          title {
            romaji
            english
          }
          episodes
          status
          averageScore
          siteUrl
        }
      }
    }
  `;

  const response = await fetch(
    "https://graphql.anilist.co",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        query,
        variables: { search: title }
      })
    }
  );

  if (!response.ok) {
    throw new Error("Anime API request failed");
  }

  const data = await response.json();
  return data.data.Page.media;
}

async function searchAnime(title) {
  const query = `
    query ($search: String) {
      Page(page: 1, perPage: 5) {
        media(search: $search, type: ANIME) {
          title {
            romaji
            english
          }
          episodes
          status
          averageScore
          siteUrl
        }
      }
    }
  `;

  const response = await fetch(
    "https://graphql.anilist.co",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        query,
        variables: { search: title }
      })
    }
  );

  if (!response.ok) {
    throw new Error("Anime API request failed");
  }

  const data = await response.json();
  return data.data.Page.media;
}

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys");

async function startBot() {
  const { state, saveCreds } =
    await useMultiFileAuthState("auth_info");

  const sock = makeWASocket({
    auth: state
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];

    if (!msg.message || msg.key.fromMe) return;

    const sender = msg.key.remoteJid;

    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      "";

    if (text.toLowerCase() === ".menu") {
      await sock.sendMessage(sender, {
        text:
          "🤖 MALCOLM-MD MENU\n\n" +
          ".ping - Check bot\n" +
          ".menu - Show commands\n" +
          ".help - Get help"
      });
    } else if (text.toLowerCase() === ".ping") {
      await sock.sendMessage(sender, {
        text: "💗 MALCOLM-MD is online!"
      });
    } else if (text.toLowerCase() === ".help") {
      await sock.sendMessage(sender, {
        text:
          "Welcome to MALCOLM-MD! " +
          "Type .menu to see commands."
      });
    }
  });
}

startBot().catch(console.error);
