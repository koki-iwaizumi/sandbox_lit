import React from "react";
import { createComponent } from "@lit-labs/react";
import { SimpleGreeting } from "./SimpleGreeting";

export const SimpleGreetingContainer = createComponent(
  React,
  "simple-greeting",
  SimpleGreeting
);
