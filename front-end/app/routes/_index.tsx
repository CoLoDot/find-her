import type { MetaFunction } from "@remix-run/node";
import logo from "../assets/logo.png";
import Image from "~/components/core/Image/Image";

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
      <Image src={logo} />
    </div>
  );
}
