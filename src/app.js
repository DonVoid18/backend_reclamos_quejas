const express = require("express");
const app = express();

// routes
const tickets = require("./routes/api/tickets.routes");
const login = require("./routes/login.routes");
const logout = require("./routes/logout.routes");
const register = require("./routes/register.routes");

app.use(express.json());

app.use(tickets);
app.use(login);
app.use(logout);
app.use(register);



module.exports = app;
