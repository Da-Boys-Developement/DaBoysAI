import { DiscordHono } from 'discord-hono'
import { DiscordAgent } from './agent';
import { getAgentByName } from 'agents';

const app = new DiscordHono()
  .command("prompt", (c) =>
    c.resDefer(async (c) => {
      const msg = await c.resDefer();

      if (c.interaction.member.roles.includes("1506863348887847062") || c.interaction.member.roles.includes("1506863641545146368") || c.interaction.member.roles.includes("1320891090383011893")) {
        try {
          const objId = c.env.DISCORD_AGENT.idFromName(
            `${c.interaction.guild_id}:${c.interaction.channel_id}`
          );

          const agent = c.env.DISCORD_AGENT.get(objId);

          const response = await agent.chat(
            c.interaction.member.user.id,
            c.var.prompt
          );
          
          await c.followup(response.messages[response.messages.length - 1].content[response.messages[response.messages.length - 1].content.length - 1].text);

        } catch (err) {
          console.error(err);

          await c.followup("Sorry, I didn't understand that. Try again please!");
        }
      } else {
        await c.followup("Sorry, you don't have permission to use me!");
      }
    })
  );

export { DiscordAgent };
export default app;