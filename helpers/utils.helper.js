"use strict";
const utilsHelper = {};
const crypto = require("crypto");
// This function controls the way we response to the client
// If we need to change the way to response later on, we only need to handle it here

utilsHelper.sendResponse = (res, status, success, data, errors, message) => {
  const response = {};
  if (success) response.success = success;
  if (data) response.data = data;
  if (errors) response.errors = errors;
  if (message) response.message = message;
  return res.status(status).json(response);
};

//Generate random id for memes
utilsHelper.generateRandomHexString = (len) => {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, len)
    .toUpperCase(); // return required number of characters
};

module.exports = utilsHelper;
