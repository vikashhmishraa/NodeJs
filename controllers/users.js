const UserSchemaModel = require("../model/users");

const handleDynamicResponse = (req, res) => {
  const html = `<h1>Hello Trip</h1>`;
  res.send([{ ok: "ok" }]);
};
async function handleGetAllUsers(req, res) {
  const AllDbUsers = await UserSchemaModel.find({});
  res.setHeader("X-Name", "P eeyush");
  return res.json(AllDbUsers);
}

const handleGetUserById = async (req, res) => {
  const UserById = await UserSchemaModel.findById(req.params.id);
  if (!UserById) return res.status(404).json({ msg: "user not found" });
  return res.json(UserById);
};

const handleCreateNewUser = async (req, res) => {
  // Create New User
  const { FullName, LastName, Email, Phone, JobTitle } = req.body;

  const newUser = await UserSchemaModel.create({
    FullName,
    LastName,
    Email,
    Phone,
    JobTitle,
  });
  return res.status(201).json({ status: "User Created", newUser });
};

const HandleUpdateUser = async (req, res) => {
  // Edit Existing Users
  const { FullName } = req.body;
  await UserSchemaModel.findByIdAndUpdate(req.params.id, {
    JobTitle: FullName,
  });
  return res.json({ status: "User Updated" });
};

const handleDeleteUser = async (req, res) => {
  // Delete Existing User
  await UserSchemaModel.findByIdAndDelete(req.params.id);
  return res.json({ stats: "User Deleted " });
};

const handleFsFileDataCreate = (req, res) => {
  const data = req.body;
  users.push({ ...data, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
  // Create New User
};
const handleFsFileDataView = (req, res) => {
  const id = Number(req.params.id);
  const singleUser = users.find((user) => user.id == id);
  return res.json(singleUser);
};

const handleServerSideRenderedData = async (req, res) => {
  const AllDbUsers = await UserSchemaModel.find({});
  const html = `<ul>
      ${AllDbUsers.map(
        (user) => `<li>${user.FullName} - ${user.Email}</li>`
      ).join("")}
      </ul>`;
  res.send(html);
};

module.exports = {
  handleDynamicResponse,
  handleGetAllUsers,
  handleGetUserById,
  handleCreateNewUser,
  HandleUpdateUser,
  handleDeleteUser,
  handleFsFileDataCreate,
  handleFsFileDataView,
  handleServerSideRenderedData,
};
