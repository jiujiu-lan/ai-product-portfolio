"use client";

export function PrintButton() {
  return (
    <div className="print-actions">
      <a
        className="print-button"
        href="/downloads/qiu-huiling-ai-project-portfolio.pdf"
        download="裘慧铃_AI项目作品集.pdf"
      >
        一键下载 PDF
      </a>
      <button className="print-secondary-button" onClick={() => window.print()}>浏览器打印</button>
    </div>
  );
}
