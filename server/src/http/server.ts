import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'

import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { pollResults } from './ws/poll-results'
import { voteonPoll } from './routes/vote-on-poll'

const app = fastify()

app.register(cookie, {
  secret: "polls-app-nlw",
  hook: "onRequest",
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(pollResults)
app.register(voteonPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP Server Running!')
})
