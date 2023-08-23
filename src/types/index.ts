import React from "react";

export interface SelectUserProps {
  id: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  selectedOption: "landlord" | "renter";
  onChange: (selectedOption: "landlord" | "renter") => void;
}
