# CONTRIBUTE

first read: 
* [Discord-Hono Docs](https://discord-hono.luis.fun/)
* [Cloudflare Worker Docs](https://developers.cloudflare.com/workers/?_gl=1*8tgbv1*_gcl_au*MTg1OTM0MTQ4NC4xNzgyODQ2OTYz*_ga*MjlkMzViY2ItNDcxMi00ODM0LTgyYTgtMTdkMjUwMTU0ZmQ1*_ga_SQCRB0TXZW*czE3ODMyNzEyMTAkbzY2JGcwJHQxNzgzMjcxMjEwJGo2MCRsMCRoMCRkT0JGMk5HVlJmUExndXF6QXQ2X2owcEhKRW8xcXEwSm9Idw..)
* [Cloudflare Durable Objects](https://developers.cloudflare.com/durable-objects/)
* [Cloudflare Agentic AI Workers](https://developers.cloudflare.com/agents/?utm_content=agents.cloudflare.com)

## Index.js:
Where the main Discord-Hono class is init'ed.

to create a new command do the following:
```js
const app = new DiscordHono()
  .command("prompt", (c) => {...})
  .command("YOUR_NEW_COMMAND", (c) => {
    //YOUR CODE
  })
// ...
```
where ```c``` is your context, which contains data on the user. see more on discord-hono's docs.

## Agent.js
Where the cloudflare Agent Durable Object is built

in the code, it extends the ```Agent``` class provided by Cloudflare. all your functionality will be ran inside the ```chat()``` function.

there is a ```history``` variable that contains the chat logs of the bot and ```generateText``` function to actually get an AI response.


WORK IN PROGRESS