"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const prisma_1 = require("../generated/prisma");
exports.prisma = new prisma_1.PrismaClient();
// async function main() {
//     const users = await prisma.user.findMany();
//     console.log(users);
// }
// main()
