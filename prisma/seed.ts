import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '149273f2-8ec4-4e52-bbde-a5da1c3de965',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded')
  prisma.$disconnect()
})