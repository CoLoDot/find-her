import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "imconstancelouise" },
    {
      name: "description",
      content: "imconstancelouise | software engineer & tattoo artist",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>imconstancelouise</h1>
    </div>
  );
}
