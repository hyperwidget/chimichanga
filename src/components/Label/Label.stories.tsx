import React from "react";
import { Label } from "./Label";
import { Card } from "../Card";

export default {
  title: "Label",
  component: Label,
};

export const Primary = () => <Label>Label</Label>;

export const Secondary = () => (
  <Label>
    <Card color="highlight">Card in a label?</Card>
  </Label>
);
