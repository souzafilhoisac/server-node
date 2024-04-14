import {
  registerForEvent
} from "./chunk-3BHDMBY5.mjs";
import {
  errorHandler
} from "./chunk-7D7OKIPV.mjs";
import {
  checkIn
} from "./chunk-GMILBUQE.mjs";
import {
  createEvent
} from "./chunk-OQ7IXQNZ.mjs";
import "./chunk-XPOIVWUK.mjs";
import {
  getAttendeeBadge
} from "./chunk-B2UHYOIB.mjs";
import {
  getEventAttendees
} from "./chunk-MCIUJC53.mjs";
import {
  getEvent
} from "./chunk-TXT7NGLR.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3e3, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
