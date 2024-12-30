import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import Productfeature from "../ProductOffering";
import { BUTTON_COLOR } from "../../Constants/styles";
import { useNavigate } from "react-router-dom";
import Custumerfeature from "../Customers";
export function Header() {
  const [productsAnchor, setProductsAnchor] = useState<null | HTMLElement>(null);
  const [communityAnchor, setCommunityAnchor] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white border-b border-gray-100 bg-[#f5f3ff]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* <img src="/placeholder.svg?height=32&width=100" alt="Relume Logo" width={100} height={32} className="h-8" /> */}
          <Button sx={{ textTransform: "none", color: "black" }} onClick={() => navigate("/")}>
            SocialSphere
          </Button>
          <div className="hidden md:flex items-center space-x-6">
            <Button
              endIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              }
              onClick={(e) => setProductsAnchor(e.currentTarget)}
              sx={{ textTransform: "none", color: "black" }}
            >
              Products
            </Button>
            <Menu anchorEl={productsAnchor} open={Boolean(productsAnchor)} onClose={() => setProductsAnchor(null)}>
              <Productfeature />
            </Menu>

            <Button
              endIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              }
              onClick={(e) => setCommunityAnchor(e.currentTarget)}
              sx={{ textTransform: "none", color: "black" }}
            >
              Community
            </Button>
            <Menu anchorEl={communityAnchor} open={Boolean(communityAnchor)} onClose={() => setCommunityAnchor(null)}>
              <Custumerfeature />
            </Menu>

            <Button sx={{ textTransform: "none", color: "black" }} onClick={() => navigate("/price")}>
              Pricing
            </Button>
            <Button sx={{ textTransform: "none", color: "black" }}>Learn</Button>
            <Button sx={{ textTransform: "none", color: "black" }} onClick={() => navigate("/contact")}>
              Contact Sales
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="text" sx={{ textTransform: "none", color: "black" }} onClick={() => navigate("/sign-up")}>
            Log in
          </Button>
          <Button
            onClick={() => navigate("/sign-up")}
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: BUTTON_COLOR,
              "&:hover": {
                backgroundColor: "#E5E4E2",
                color: "black",
              },
            }}
          >
            Start for free
          </Button>
        </div>
      </div>
    </nav>
  );
}
