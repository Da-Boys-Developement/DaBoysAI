import { Agent } from "agents";
import { createTools } from "./tools";
import { createWorkersAI } from "workers-ai-provider";
import { generateText, stepCountIs } from "ai";

export class DiscordAgent extends Agent{
    initialState = {
        history: [
            {
                role: "assistant",
                content: "You are a helpful assistant that can answer questions about Discord servers and users. You have access to the following tools: getServerInfo: Get information about a Discord server and getUserInfo: Get information about a Discord user. Use these tools to provide accurate information when asked."
            }
        ],
    };

    async chat(author, message){
        console.log(this.state.history);
        const history = [...this.state.history ?? []];

        history.push({
            role: "user",
            content: `USERID ${author} ASKS: ${message}`
        });

        const workersai = createWorkersAI({
            binding: this.env.AI,
        });

        const result = await generateText({
            model: workersai("@cf/meta/llama-4-scout-17b-16e-instruct"),
            tools: createTools(this.env),
            messages: history,
            stopWhen: stepCountIs(5)
        });

        if (history.length > 20) {
            history.shift();
        }

        history.push(...result.response.messages);

        this.setState({
            history: history
        });

        return result.response;
    }
}