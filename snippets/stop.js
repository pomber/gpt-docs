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
    { role: "system", content: "List names" },
    { role: "user", content: "Best football players" },
  ],
  stop: ["5."],
})

// result:
console.log(completion.data, {
  // link[3:9] #choices
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content:
          "1. Lionel Messi\n" +
          "2. Cristiano Ronaldo\n" +
          "3. Neymar Jr.\n" +
          "4. Robert Lewandowski\n",
      },
      // link[7:19] #finish-reason
      finish_reason: "stop",
    },
  ],
  // link[3:5] #response
  id: "chatcmpl-123",
  // link[3:8] #response
  object: "chat.completion",
  // link[3:9] #response
  created: 1677652288,
  // link[3:7] #response
  model: "gpt-3.5-turbo-0301",
  // link[3:7] #usage
  usage: {
    prompt_tokens: 16,
    completion_tokens: 23,
    total_tokens: 39,
  },
})
