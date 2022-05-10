const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
		username: 'ajolonauta',
		mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
		username: 'ajolonauta1',
		mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
		username: 'ajolonauta2',
		mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
		username: 'ajolonauta3',
		mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'uriel' },
        update: {},
        create: {
          name: 'uriel',
          username: 'urielnat',
          mission: 'Node'
        },
      });

    console.log('Create 5 explorers');

    // creacion de objetos students
    const student1 = await prisma.student.upsert({
        where: { name: 'student' },
        update: {},
        create: {
          name: 'student',
          missionCommander: 'Carlo',
          lang:'ES',
          enrollments: 10
        },
    });

    const student2 = await prisma.student.upsert({
        where: { name: 'student2' },
        update: {},
        create: {
          name: 'student2',
          missionCommander: 'Carlo',
          lang:'ES',
          enrollments: 4
        },
    });

    const student3 = await prisma.student.upsert({
        where: { name: 'student3' },
        update: {},
        create: {
          name: 'student3',
          missionCommander: 'Carlo',
          lang:'ES',
          enrollments: 6
        },
    });

    const student4 = await prisma.student.upsert({
        where: { name: 'student4' },
        update: {},
        create: {
          name: 'student4',
          missionCommander: 'Carlo',
          lang:'ES',
          enrollments: 6
        },
    });


    const mc = await prisma.missionCommander.upsert({
      where: { name: 'carlo' },
      update: {},
      create: {
            name: 'carlo',
        username: 'carloMC',
        mainStack: 'Node'
      },
    });

    const mc2 = await prisma.missionCommander.upsert({
      where: { name: 'Rodrigo' },
      update: {},
      create: {
            name: 'Rodrigo',
        username: 'rodrigoMc',
        mainStack: 'frontEnd'
      },
    });

    const mc3 = await prisma.missionCommander.upsert({
      where: { name: 'Fernanda' },
      update: {},
      create: {
            name: 'Fernanda',
        username: 'fernandaMc',
        mainStack: 'Java'
      },
    });

  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();