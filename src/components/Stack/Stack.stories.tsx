import React from "react";

import { Stack } from "./Stack";
import { Card } from "../Card";

export default {
  title: "Stack",
  component: Stack,
};

export const Primary = () => (
  <Stack>
    <Card>Card 1</Card>
    <Card>Card 2</Card>
  </Stack>
);
