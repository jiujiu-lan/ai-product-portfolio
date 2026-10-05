import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI 应用 × 业务流程 × 产品落地",
    template: "%s｜AI 项目作品集",
  },
  description: "从真实业务问题出发，将流程、规则和知识转化为可运行的 AI 与自动化产品。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
