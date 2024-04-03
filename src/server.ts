import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "Hello NLW Unite"
})

app.listen({port: 3000}).then(() => {
  console.log("HTTP server running")
})