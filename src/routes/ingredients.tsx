import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ingredients")({
  component: Ingredients,
});

function Ingredients() {
  return <div>Hello "/Ingredients"!</div>;
}
