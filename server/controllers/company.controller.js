const Company = require("../models/company.model.js");

const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "you can't register same company again",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      success: true,
    });
    return res.status(201).json({
      message: "company registered successfully",
      company,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      success: true,
    });
  }
};

const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({});
    if (!companies) {
      return res.status(404).json({
        message: "company not found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "compnay not found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: flase,
      });
    }
    return res.status(200).json({
      message: "information updated successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

module.exports = { registerCompany, getCompany, getCompanyById, updateCompany };
