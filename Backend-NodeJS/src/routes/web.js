const express = require("express");
const router = express.Router();
const session = require("express-session");
const { route } = require("express/lib/application");
const {
  gethome,
  Register,
  getAll,
  getUserbyID,
  editUser,
  Delete,
} = require("../controllers/CRUDController");

const {
  handleLogin,
  handleGetAll,
  handleCreate,
  handleDelete,
  handleEdit,
  handleBooking,
  handleGetAppointment,
  handleAbortAppointment,
} = require("../controllers/Usercontroller");

const {
  LoginAdmin,
  handlegetSpecialty,
  handlegetSpecialtyByid,
  CreateDoctor,
  handlegetDoctorBySpecialtyID,
  handlegetTopExperiencedDoctor,
  handlegetSchedule,
  handlegetDoctorByid,
  handleEditDoctor,
  handlegetAllDoctors,
} = require("../controllers/Admin");
router.get("/", gethome);

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", Register);

router.get("/list", getAll);

router.get("/edit", getUserbyID);

router.post("/edit", editUser);

router.get("/delete", Delete);

/*---------------- REACTJS USER-------------------------*/

router.post("/api/login", handleLogin);

router.get("/api/get-all-user", handleGetAll);

router.post("/api/create-user", handleCreate);

router.delete("/api/delete-user", handleDelete);

router.post("/api/edit-user", handleEdit);

router.post("/api/booking", handleBooking);

router.get("/api/get-appointment", handleGetAppointment);

router.post("/api/abort-appointment", handleAbortAppointment);
/*-----------------REACT ADMIN---------------------- */
router.post("/api/login-admin", LoginAdmin);

router.get("/api/get-specialty", handlegetSpecialty);

router.get("/api/get-specialtyByid", handlegetSpecialtyByid);

router.post("/api/create-doctor", CreateDoctor);

router.get("/api/get-DoctorsBySpecialtyID", handlegetDoctorBySpecialtyID);

router.get("/api/get-TopExperienceDoctor", handlegetTopExperiencedDoctor);

router.get("/api/get-schedule", handlegetSchedule);

router.get("/api/get-doctorByid", handlegetDoctorByid);

router.get("/api/get-alldoctor", handlegetAllDoctors);

router.post("/api/edit-doctor", handleEditDoctor);

module.exports = router;
