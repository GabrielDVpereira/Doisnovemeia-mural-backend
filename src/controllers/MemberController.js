const Member = require("../models/Member");
const _ = require("lodash");
const uploadFileCloudinary = require("../utils/fileUploadCloudinary");
const deleteFileCloudinary = require("../utils/deleteFileCloudinary");

class MemberController {
  async index(req, res) {
    try {
      const members = await Member.find();
      return res.json(members);
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }

  async create(req, res) {
    const { email, name, birthdate } = req.body;

    try {
      const member = await Member.find({ email });
      if (member.length) throw "There is a member with this email";

      const photo = req.file.filename;
      const { photo_url, photo_id } = await uploadFileCloudinary(photo);

      const newMember = await Member.create({
        email,
        name,
        birthdate,
        photoId: photo_id,
        photoUrl: photo_url,
      });
      return res.json({
        member: _.pick(newMember, ["name", "email", "birthdate", "photo"]),
        message: "new member successfully added!",
      });
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
  async delete(req, res) {
    const { id: _id } = req.params;
    try {
      const member = await Member.findOne({ _id });
      if (!member) throw "member not found, may be alredy deleted";

      await Member.deleteOne({ _id }, function (error) {});
      await deleteFileCloudinary(member.photoId);

      return res.json({ deleted: true });
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
  async update(req, res) {
    try {
      const { id: _id } = req.params;
      const member = await Member.updateOne({ _id }, req.body);
      return res.json(member);
    } catch (error) {
      return res.status(400).json({ error: error.message || error });
    }
  }
}

module.exports = new MemberController();
