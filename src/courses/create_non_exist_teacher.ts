import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {

  const result = await prisma.courses.create({
    data: {
      name: "Python",
      duration: 200,
      description: "Exelente curso de python",
      teacher: {
        create: {
          name: "Lucas Gomes"
        }
      }
    }
  })
  console.log(result)
}

main()