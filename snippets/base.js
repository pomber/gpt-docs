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
  ],
  // link[3:11] #functions
  functions: undefined,
  // link[3:15] #function-call
  function_call: undefined,
  // link[3:6] #user
  user: undefined,
  // link[3:8] #stream
  stream: false,
  // link[3:13] #sampling
  temperature: 1,
  // link[3:7] #sampling
  top_p: 1,
  // link[3] #choices
  n: 1,
  // link[3:6] #stop
  stop: undefined,
  // link[3:12] #max-tokens
  max_tokens: Math.infinity,
  // link[3:18] #penalties
  presence_penalty: 0,
  // link[3:19] #penalties
  frequency_penalty: 0,
  // link[3:12] #logit-bias
  logit_bias: undefined,
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
  model: "gpt-3.5-turbo-0613",
  // link[3:9] #choices
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content: "Hello! How may I assist you today?",
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
