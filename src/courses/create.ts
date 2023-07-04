import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main() {

 const result = await prisma.courses.create({
    data: {
      name: "Java",
      duration: 300,
      description: "Curso de Java 17",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Daniele Lẽao Evangelista"
          },
          create: {
            name: "Daniele Lẽao Evangelista"
          }
        }
      }
      
    }
  })
  console.log(result)
}

main()