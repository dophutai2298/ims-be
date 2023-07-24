const md5 = require("md5");
const yaml = require("js-yaml");
const fs = require("fs");
const { generate } = require("../token/index");
const statusCodes = require("http-status-codes");
const dotenv = require("dotenv");
dotenv.config();

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(statusCodes.BAD_REQUEST).json({
      error: "You need to enter all the information",
    });
  }
  // const user = yaml.load(fs.readFileSync(process.env.URL_YAML));
  // const passwordMd5 = md5(req.body.password);
  const user = [{
    "id": 1,
    "username":"user",
    "password": "827ccb0eea8a706c4c34a16891f84e7b"
  },
  {
    "id": 2,
    "username":"user1",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 3,
    "username":"user2",
    "password": "fcea920f7412b5da7be0cf42b8c93759"
  },
  {
    "id": 4,
    "username":"user3",
    "password": "25d55ad283aa400af464c76d713c07ad"
  }]
  const passwordMd5 = md5(req.body.password);
  const countUser = user.length;
  for (let i = 0; i < countUser; i++) {
    if (username === user[i].username && passwordMd5 === user[i].password) {
      const accessToken = generate(username, password);
      return res.status(statusCodes.OK).json({ accessToken });
    }
  }
  return res.status(statusCodes.BAD_REQUEST).json({ error: "Incorrect username or password" });
};

const profile = (req, res) => {
  const data = req.body;
  return res.status(200).json(data);
};

module.exports = {
  login: login,
  profile: profile,
};