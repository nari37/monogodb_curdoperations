// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// const app = express();
// app.use(cors());
// app.use(express.json())

//  mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")

//  const usershema = new mongoose.Schema({
//   name: String,
//   email:String,
//   phone:Number
//  })

//  const usermodel = mongoose.model("students",usershema)

//   //  Get students...
//  app.get("/getstudents",(req,res)=>{
//       usermodel.find({})
//       .then(students => res.json(students))
//       .catch(err => console.log(err))
//  })

// //  Create student...
//  app.post("/student",(req,res)=>{
//   usermodel.create(req.body)
//   .then(students => res.json(students))
//   .catch(err=>console.log(err))
//  })

//    // Delete student...
//  app.delete("/delete/:id",(req,res)=>{
//   const id = req.params.id;
//   usermodel.findByIdAndDelete({_id:id})
//   .then(res => res.json(res))
//   .catch(err => console.log(err))
// })

//   // Read student..

//   app.get("/Read/:id",(req,res)=>{
//     const id = req.params.id;
//     usermodel.findById(id)
//     .then(students => res.json(students))
//     .catch(err => console.log(err))
// })

// // Update student..
// app.put('/update/:id', (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body; // Assuming you send the updated data in the request body

//   usermodel.findByIdAndUpdate(id, updatedData)
//     .then((student) => res.json(student))
//     .catch((err) => console.log(err));
// });


// app.listen(9004,()=>{
//   console.log('server is listening...9004')
// })




import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number
});

const userModel = mongoose.model("students", userSchema);

// Get students
app.get("/getstudents", (req, res) => {
  userModel.find({})
    .then(students => res.json(students))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Create student
app.post("/student", (req, res) => {
  userModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Delete student
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Read student
app.get("/Read/:id", (req, res) => {
  const id = req.params.id;
  userModel.findById(id)
    .then(student => res.json(student))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Update student
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  userModel.findByIdAndUpdate(id, updatedData, { new: true })
    .then(student => res.json(student))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(9001, () => {
  console.log('Server is listening on port 9001');
});
