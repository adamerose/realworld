// https://www.prisma.io/docs/guides/migrate/seed-database

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
        passwordHash: await argon.hash(faker.internet.password()),
        articles: {
          // Loop and create randomly between 0-5 articles for each user
          create: Array.from({ length: Math.floor(Math.random() * 5) }).map(
            () => ({
              title: faker.lorem.words(),
              content: faker.lorem.paragraph(),
            }),
          ),
        },
      },
    });
  }

  // Also create a predefined user for testing
  const myUser = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      passwordHash: await argon.hash('admin'),
      articles: {
        // Loop and create randomly between 0-5 articles for each user
        create: Array.from({ length: Math.floor(Math.random() * 5) }).map(
          () => ({
            title: faker.lorem.words(),
            content: faker.lorem.paragraph(),
          }),
        ),
      },
    },
  });
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });