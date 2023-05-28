import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-respository";
import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository";
import { CheckInUseCase } from "../check-in";

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository();
  const gymsRepositoryRepository = new PrismaGymsRepository();

  const useCase = new CheckInUseCase(
    checkInsRepository,
    gymsRepositoryRepository
  );

  return useCase;
}
