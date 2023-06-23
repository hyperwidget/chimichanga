import React from "react";

import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const Primary = () => <Card>Card</Card>;

export const Secondary = () => <Card elevation="high">Second Card</Card>;
