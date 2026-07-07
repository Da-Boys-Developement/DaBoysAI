import { tool } from "ai";
import { z } from "zod";

export function createGetUserInfoTool(env) {
  return tool({
    description: "Get information about a discord user (YOU WONT GET ROLES OR OTHER SERVER RELATED STUFF FROM THIS TOOL), you can find the userid from the query the user gives (USERID userid ASKS: QUESTION).",

    inputSchema: z.object({
      userId: z.string().describe("The Discord user ID"),
    }),

    execute: async ({ userId }) => {
      const res = await fetch(
        `https://discord.com/api/v10/users/${userId}`,
        {
          headers: {
            Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(
          `Discord API error: ${res.status} ${res.statusText}`
        );
      }

      return await res.json();
    },
  });
}