import { tool } from "ai";
import { z } from "zod";

export function createGetUserInfoRelatedToServerTool(env) {
    return tool({
        description: "Get information about a Discord user that is related to the discord server (information like roles, and other server related stuff), you can find the userid from the query the user gives (USERID userid ASKS: QUESTION).",

        inputSchema: z.object({
            userId: z.string().describe("The Discord user ID"),
        }),

        execute: async ({ userId }) => {
            const res = await fetch(
                `https://discord.com/api/guilds/1202400802912735313/members/${userId}`,
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
        }
    });
}