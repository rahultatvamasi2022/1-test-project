/* eslint-disable import/no-anonymous-default-export */
import database from "../../../helpers/database";
import Auth from "../../../model/auth";
import sendToken from "../../../utils/jwtToken";

database();

export default async (req, res) => {
  try {
    if (req.method !== "POST") {
      return;
    }

    const { firstname, lastname, email, confirmEmail, password, role } =
      req.body;

    if (!firstname || !lastname || !email || !confirmEmail || !password) {
      return res.status(422).json({
        error: "All fields are required",
      });
    }

    if (email !== confirmEmail) {
      return res.status(406).json({
        error: "Emails does not match",
      });
    }

    // const hashedPassword = await bcrypt.hash(password, 12);

    const user = await Auth.create({
      firstname,
      lastname,
      email,
      password,
      role,
    });

    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
