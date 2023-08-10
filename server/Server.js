let myExpress = require('express');

let app = myExpress();


app.use(myExpress.json())

app.listen(3010, function () {

    console.log("server live ho gya")

})

require("./model/db")

let Inspection = require('./model/Inspection')
let Appointment = require("./model/Appointment")

app.post("/inspection", async (req, res) => {
    try {
        let newInspection = new Inspection(req.body)

        await newInspection.save()
        res.send("Added")

    } catch (e) {
        console.log(e)
    }
})
app.get("/inspections", async (req, res) => {
    try {

        let newInspection = await Inspection.find()
        res.json(newInspection)

    } catch (e) {
        console.log(e)

    }
})

app.post("/appointment", async (req, res) => {
    try {
        let newAppointment = new Appointment(req.body)

        await newAppointment.save()
        res.send("Added")

    } catch (e) {
        console.log(e)
    }
})

app.get("/appointment", async (req, res) => {
    try {

        let newAppointment = await Appointment.find()
        res.json(newAppointment)

    } catch (e) {
        console.log(e)

    }
})



app.get('/start', async (req, res) => {
    try {
        const startinspect = await Appointment.findOne({ _id: req.query.id }).exec();

        console.log(req.query.id);
        console.log(startinspect);

        res.send(startinspect);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});



app.get('/single-inspection', async (req, res) => {
    try {
        const single = await Inspection.findOne({ _id: req.query.id }).exec();

        console.log(req.query.id);
        console.log(single);

        res.send(single);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/allinspections', async (req, res) => {
    try {
        let length = Inspection.length
        let allinspection = await Inspection.find()
        res.json(allinspection)

    } catch (e) {
        console.log(e)

    }
})


app.get('/total-appointments', async (req, res) => {
  try {
    const totalAppointments = await Appointment.countDocuments();
    res.send(` ${totalAppointments}`);
    console.log( "total"+totalAppointments)
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/total-inspections', async (req, res) => {
    try {
      const totalInspections = await Inspection.countDocuments();
      res.send(` ${totalInspections}`);
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  });