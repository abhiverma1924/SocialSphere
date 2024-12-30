"use client";

import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Input } from "@mui/material";
import { Checkbox } from "@mui/material";
import { EyeOff, Eye } from "lucide-react";
import { SignUpFormData } from "../types";
import { BUTTON_COLOR } from "../../../Constants/styles";

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: "",
    workEmail: "",
    password: "",
    marketingConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Button
        type="button"
        variant="outlined"
        className="w-full flex items-center gap-2 h-12"
        sx={{
          textTransform: "none",
          color: "white",
          backgroundColor: BUTTON_COLOR,
          "&:hover": {
            backgroundColor: "#E5E4E2",
            color: "black",
          },
        }}
      >
        {/* <img src="/placeholder.svg?height=24&width=24" alt="Google" className="w-6 h-6" /> */}
        Continue with Google
      </Button>

      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-sm text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="space-y-4">
        <div>
          <TextField
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            className="h-12 w-full"
          />
        </div>

        <div>
          <TextField
            name="workEmail"
            type="email"
            placeholder="Work email address"
            value={formData.workEmail}
            onChange={handleChange}
            className="h-12 w-full"
          />
        </div>

        <div className="relative">
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="h-12 w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
          </button>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="marketing"
            name="marketingConsent"
            checked={formData.marketingConsent}
            // onCheckedChange={(checked: boolean) =>
            //   setFormData(prev => ({ ...prev, marketingConsent: checked as boolean }))
            // }
          />
          <label htmlFor="marketing" className="text-sm text-gray-600 leading-none pt-1">
            Yes, I'm happy to receive product updates & marketing emails.
          </label>
        </div>
      </div>

      <Button
        type="submit"
        sx={{
          textTransform: "none",
          backgroundColor: BUTTON_COLOR,
          width: "100%",
          color: "white",
          "&:hover": {
            backgroundColor: "#E5E4E2",
            color: "black",
          },
        }}
      >
        Sign me up
      </Button>

      <p className="text-xs text-center text-gray-600">
        By signing up, I agree to SocialSphere's{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>
      </p>
    </form>
  );
}
