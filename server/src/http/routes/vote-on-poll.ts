import { randomUUID } from "node:crypto"
import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"
import { z } from 'zod'

export async function voteonPoll(app: FastifyInstance) {
  app.post('/polls/:pollId/votes', async (request, reply) => {
    const voteOnPollBody = z.object({
      poll_option_id:  z.string().uuid()
    })

    const voteOnPollParams = z.object({
      pollId: z.string().uuid()
    })

    const { poll_option_id } = voteOnPollBody.parse(request.body)
    const { pollId } = voteOnPollParams.parse(request.params)

    let { sessionId } = request.cookies

    if (sessionId) {
      const userPreviousVoteOnPoll = await prisma.vote.findUnique({
        where: {
          session_id_poll_id: {
            session_id: sessionId,
            poll_id: pollId
          }
        }
      })

      if (userPreviousVoteOnPoll && userPreviousVoteOnPoll.poll_option_id !== poll_option_id) {
        // Delete the previous vote
        await prisma.vote.delete({
          where: {
            id: userPreviousVoteOnPoll.id
          }
        })
      } else if (userPreviousVoteOnPoll) {
        return reply.status(400).send({
          message: "You already voted on this poll.",
          status: "error",
          status_code: 400
        })
      }
    }

    if (!sessionId) {
      sessionId = randomUUID()

      // sessionId = UUID.COOKIESIGN -> 00000000-0000-0000-0000-000000000000.06P6bWp8CNW3W9BjNT+JSHZCNQJ6pd+JiAi0RnRdsxY
      reply.setCookie('sessionId', sessionId, {
        httpOnly: true, // Only the backend will be able to access the cookie
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        signed: true, // Set cookies to be signed
      })
    }

    await prisma.vote.create({
      data: {
        session_id: sessionId,
        poll_id: pollId,
        poll_option_id
      }
    })

    return reply.status(201).send()
  })
}
