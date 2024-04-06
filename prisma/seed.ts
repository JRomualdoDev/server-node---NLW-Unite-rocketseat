import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id:'49a347a5-8e0c-4aa5-a514-b56ac33f8083',
            title: 'Unite 2024',
            slug: 'unite-2024',
            details: 'Um evento para aprender sobre NodeJS',
            maximumAttendees: 100,
        }
    });
}

seed().then(() => {
    console.log('Database seeded!');
    prisma.$disconnect();
})