/* eslint-disable import/no-anonymous-default-export */
import bcrypt from "bcryptjs";

import database from "../../../helpers/database";
import Auth from "../../../model/auth";
import sendToken from "../../../utils/jwtToken";

database();

export default async (req, res, next) => {
  try {
    if (req.method !== "POST") {
      return;
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(422)
        .json({ message: "Please enter email and password" });
    }

    const user = await Auth.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({
        message: "Invalid credentials",
      });
    }

    const matchPassword = await user.comparePassword(password);

    if (!matchPassword) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
