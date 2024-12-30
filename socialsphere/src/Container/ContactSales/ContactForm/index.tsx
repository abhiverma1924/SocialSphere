"use client";

import { useState } from "react";
import { TextField, RadioGroup, Radio, FormControlLabel, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { DemoFormData, FormErrors } from "../types";
import { BUTTON_COLOR } from "../../../Constants/styles";

const influencerOptions = ["0-10", "11-50", "51-100", "101-500", "500+"];

export function DemoForm() {
  const [formData, setFormData] = useState<DemoFormData>({
    workEmail: "",
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    influencerCount: "",
    comments: "",
    userType: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.workEmail) {
      newErrors.workEmail = "Please complete this required field.";
    }
    if (!formData.firstName) {
      newErrors.firstName = "Please complete this required field.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Please complete this required field.";
    }
    if (!formData.companyName) {
      newErrors.companyName = "Please complete this required field.";
    }
    if (!formData.jobTitle) {
      newErrors.jobTitle = "Please complete this required field.";
    }
    if (!formData.influencerCount) {
      newErrors.influencerCount = "Please complete this required field.";
    }
    if (!formData.userType) {
      newErrors.userType = "Please select an option.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <TextField
          fullWidth
          label="Work email*"
          name="workEmail"
          value={formData.workEmail}
          onChange={handleChange}
          error={!!errors.workEmail}
          helperText={errors.workEmail}
          className="bg-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          fullWidth
          label="First name*"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
          className="bg-white"
        />
        <TextField
          fullWidth
          label="Last name*"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          className="bg-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          fullWidth
          label="Company name*"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          error={!!errors.companyName}
          helperText={errors.companyName}
          className="bg-white"
        />
        <TextField
          fullWidth
          label="Job Title*"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          error={!!errors.jobTitle}
          helperText={errors.jobTitle}
          className="bg-white"
        />
      </div>

      <div>
        <TextField
          select
          fullWidth
          label="Number of influencers you work with*"
          name="influencerCount"
          value={formData.influencerCount}
          onChange={handleChange}
          error={!!errors.influencerCount}
          helperText={errors.influencerCount}
          className="bg-white"
        >
          {influencerOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Comments (optional)"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Tell us a bit about your influencer marketing activities and the challenges you are faced"
          className="bg-white"
        />
      </div>

      <div>
        <p className="mb-2">What best describes you?*</p>
        <RadioGroup name="userType" value={formData.userType} onChange={handleChange} row>
          <FormControlLabel value="agency" control={<Radio />} label="Agency representative" />
          <FormControlLabel value="brand" control={<Radio />} label="Brand representative" />
          <FormControlLabel value="creator" control={<Radio />} label="Creator" />
        </RadioGroup>
        {errors.userType && <p className="text-red-500 text-sm mt-1">{errors.userType}</p>}
      </div>

      <Button
            variant="contained"
            className="w-full py-6"
            sx={{
              textTransform: "none",
              backgroundColor: BUTTON_COLOR,
              "&:hover": {
                backgroundColor: "#E5E4E2",
                color: "black",
              },
            }}
          >
             Schedule a demo call
          </Button>
    </form>
  );
}
