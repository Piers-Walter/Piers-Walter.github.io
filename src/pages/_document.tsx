import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-gray-500">
        <Main />
        <NextScript />
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </body>
    </Html>
  );
}
