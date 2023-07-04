import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main() {

 const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      duration: 300,
    description: "Curso exelente de React Native",
    teacher: {
      connect: {
        id: "8894bb8c-2ad1-41e3-8105-02bdccb2ef25"
      }
    }
    },
  
  })
  console.log(result)
}

main()