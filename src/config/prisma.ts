import { PrismaClient } from "../generated/prisma";
export const prisma = new PrismaClient()
// async function main() {
//     const users = await prisma.user.findMany();
//     console.log(users);
// }
// main()