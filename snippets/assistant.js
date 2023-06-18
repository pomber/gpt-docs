const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  // link[3:8] #api-key
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const completion = await openai.createChatCompletion({
  // link[3:7] #model
  model: "gpt-3.5-turbo",
  // link[3:10] #messages
  messages: [
    { role: "system", content: "You are a helpful assistant" },
    { role: "user", content: "Hello world" },
    { role: "assistant", content: "How may I assist you today?" },
    { role: "user", content: "Give me a fact about Messi" },
  ],
})

// result:
console.log(completion.data, {
  // link[3:5] #response
  id: "chatcmpl-123",
  // link[3:8] #response
  object: "chat.completion",
  // link[3:9] #response
  created: 1677652288,
  // link[3:7] #response
  model: "gpt-3.5-turbo-0301",
  // link[3:9] #choices
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content: "Messi has won 7 Ballon d'Ors.",
      },
      // link[7:19] #finish-reason
      finish_reason: "stop",
    },
  ],
  // link[3:7] #usage
  usage: {
    prompt_tokens: 20,
    completion_tokens: 9,
    total_tokens: 29,
  },
})
