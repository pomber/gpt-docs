const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    { role: "system", content: "You are a helpful assistant" },
    { role: "user", content: "Hello world" },
  ],
})

// result:
console.log(completion.data.choices[0], {
  message: {
    role: "assistant",
    content: "Hello! How may I assist you today?",
  },
  finish_reason: "stop",
})
