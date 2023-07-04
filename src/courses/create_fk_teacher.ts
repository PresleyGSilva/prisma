import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {

  const result = await prisma.courses.create({
    data: {
      name: "Golang",
      duration: 800,
      description: "Exelente curso de Golang",
      fk_id_teacher: "80d4ca30-fa10-4e5c-bb2d-12b6bae26ce0"
    }
  })
  console.log(result)
}
main()