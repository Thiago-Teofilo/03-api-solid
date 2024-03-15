import { GetUserMetricsUseCase } from '../get-user-metrics'
import { PrismaCheckInsRepostitory } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepostitory()
  const useCase = new GetUserMetricsUseCase(checkInsRepository)

  return useCase
}
