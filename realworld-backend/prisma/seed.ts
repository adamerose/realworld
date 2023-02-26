import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as argon from 'argon2';

const prisma = new PrismaClient();
async function main() {
  // Loop and create 10 users
  for (let i = 0; i < 10; i++) {
    const newUser = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        passwordHash: await argon.hash('password'),
        articles: {
          // Loop and create randomly between 0-5 articles for each user
          create: Array.from({ length: Math.floor(Math.random() * 5) }).map(
            () => ({
              title: faker.lorem.words(),
              content: faker.lorem.paragraphs(),
              published: faker.datatype.boolean(),
            }),
          ),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
