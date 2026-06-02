import { DiscordHono } from 'discord-hono'

async function run(env, user, input) {
  const response = await env.AI.run(
    "@cf/meta/llama-3.1-8b-instruct",
    {
      messages: [
        {
          role: "assistant",
          content: "You are a helpful Discord assistant named \"Da Boys AI\" in a discord server NAMED \"Da Boys\", you help users with their questions and provide information on a wide range of topics."
        },
        {
          role: `user`,
          content: `${user}: ${input}`
        }
      ]
    }
  );

  return response.response;
}

const app = new DiscordHono()
  .command("prompt", (c) =>
    c.resDefer(async (c) => {
      const msg = await c.followup("...");

      if (c.interaction.member.roles.includes("1506863348887847062") || c.interaction.member.roles.includes("1506863641545146368") || c.interaction.member.roles.includes("1320891090383011893")) {
        try {
          const result = await run(c.env, c.interaction.member.user.username, `${c.var.prompt}`);
          await c.followup(`${result}`);

        } catch (err) {
          console.error(err);

          await c.followup("Sorry, I didn't understand that. Try again please!");
        }
      } else {
        await c.followup("Sorry, you don't have permission to use me!");
      }
    })
  );

export default app;