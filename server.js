const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//cors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/explorers', async (req, res) => {
  const allExplorers =  await prisma.explorer.findMany({});
  res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/explorers', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
   };
  const message = 'Explorer creado.';
  await prisma.explorer.create({data: explorer});
  return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

//students

app.get('/students', async (req, res) => {
  const allStudents =  await prisma.student.findMany({});
  res.json(allStudents);
});

app.get('/students/:id', async (req, res) => {
  const id = req.params.id;
  const estudiante = await prisma.student.findUnique({where: {id: parseInt(id)}});
  res.json(estudiante);
});

app.post('/students', async (req, res) => {
  const estudiante = {
    name: req.body.name,
    missionCommander: req.body.missionCommander,
    lang:req.body.lang,
    enrollments: req.body.enrollments
   };
  const message = 'Estudiante creado.';
  await prisma.student.create({data: estudiante});
  return res.json({message});
});

app.put('/students/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.student.update({
		where: {
			id: id
		},
		data: {
			enrollments: req.body.enrollments
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/students/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.student.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});


//mission commanders

app.get('/MC', async (req, res) => {
  const allMCs =  await prisma.missionCommander.findMany({});
  res.json(allMCs);
});

app.get('/MC/:id', async (req, res) => {
  const id = req.params.id;
  const MC = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});
  res.json(MC);
});

app.post('/MC', async (req, res) => {
  const missionCommander = {
    name: req.body.name,
    username: req.body.username,
    mainStack:req.body.mainStack
   };
  const message = 'Mission commander creado.';
  await prisma.missionCommander.create({data: missionCommander});
  return res.json({message});
});

app.put('/MC/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.missionCommander.update({
		where: {
			id: id
		},
		data: {
			mainStack: req.body.mainStack
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/MC/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.missionCommander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});