import { tool } from "ai";
import { z } from "zod";

export function createGetServerInfoTool(env) {
  return tool({
    description: "Get information about the discord server the bot is in.",

    inputSchema: z.object({}),

    execute: async () => {
      const res = await fetch(
        `https://discord.com/api/v10/guilds/1202400802912735313`,
        {
          headers: {
            Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Discord API error: ${res.status}`);
      }

      return await res.json();
    },
  });
}