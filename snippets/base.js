const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  // link[3:8] #api-key
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const completion = await openai.createChatCompletion({
  // link[3:7] #model
  model: "gpt-3.5-turbo",
  // link[3:10] #messages
  messages: [
    { role: "system", content: "You are a helpful assistant" },
    { role: "user", content: "Hello world" },
  ],
  // link[3:11] #functions
  functions: [],
  // link[3:15] #function-call
  function_call: "auto",
  // link[3:6] #user
  user: undefined,
  stream: false,
  temperature: 1,
  top_p: 1,
  n: 1,
  max_tokens: Math.infinity,
  presence_penalty: 0,
  frequency_penalty: 0,
  logit_bias: null,
});
console.log(completion.data);
