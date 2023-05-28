import { makeSearchGymsUseCase } from "@/use-cases/factories/make-search-gyms-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function search(req: FastifyRequest, reply: FastifyReply) {
  const createGymQuerySchema = z.object({
    q: z.string(),
    page: z.coerce.number().min(1).default(1),
  });

  const { q, page } = createGymQuerySchema.parse(req.query);

  const searchGymUseCase = makeSearchGymsUseCase();

  const { gyms } = await searchGymUseCase.execute({
    query: q,
    page,
  });

  return reply.status(200).send({
    gyms,
  });
}
