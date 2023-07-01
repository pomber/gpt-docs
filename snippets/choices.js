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
    { role: "system", content: "Give me one name" },
    { role: "user", content: "Futbol GOAT" },
  ],
  // link[3:13] #sampling
  temperature: 1.2,
  n: 2,
})

// result:
console.log(completion.data, {
  choices: [
    {
      index: 0,
      message: { role: "assistant", content: "Pele" },
      finish_reason: "stop",
    },
    {
      index: 1,
      message: { role: "assistant", content: "Messi" },
      finish_reason: "stop",
    },
  ],
  id: "chatcmpl-xxxx",
  object: "chat.completion",
  created: 1688211546,
  model: "gpt-3.5-turbo-0613",
  // link[3:7] #usage
  usage: {
    prompt_tokens: 20,
    completion_tokens: 4,
    total_tokens: 24,
  },
})
