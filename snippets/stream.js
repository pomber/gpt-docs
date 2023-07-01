const { Configuration, OpenAIApi } = require("openai")
const { Readable } = require("stream")
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
  // link[3:8] #stream
  stream: true,
})

const stream = Readable.from(completion.data)
stream.on("readable", () => {
  while (true) {
    // mark[11:15] custom-mark
    const chunk = stream.read()
    if (!chunk) break
    console.log(chunk)
  }
})
