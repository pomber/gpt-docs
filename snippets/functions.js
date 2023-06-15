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
  functions: [
    {
      name: "get_current_weather",
      description: "Get the current weather in a given location",
      // link[7:16] #parameters
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "A city, e.g. San Francisco",
          },
          unit: { type: "string", enum: ["C", "F"] },
        },
        required: ["location"],
      },
    },
  ],
  // link[3:15] #function-call
  function_call: "auto",
  // link[3:6] #user
  user: undefined,
  // link[3:8] #stream
  stream: false,
  // link[3:13] #temperature
  temperature: 1,
  // link[3:7] #top-p
  top_p: 1,
  // link[3] #choices
  n: 1,
  max_tokens: Math.infinity,
  presence_penalty: 0,
  frequency_penalty: 0,
  logit_bias: null,
});

// result:
console.log(completion.data, {
  id: "chatcmpl-123",
  object: "chat.completion",
  created: 1677652288,
  // link[3:9] #choices
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content: None,
        function_call: {
          name: "get_current_weather",
          arguments: '{ "location": "Valencia", "format": "C"}',
        },
      },
      finish_reason: "function_call",
    },
  ],
  usage: {
    prompt_tokens: 9,
    completion_tokens: 12,
    total_tokens: 21,
  },
});
