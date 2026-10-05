import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="返回首页">
        <span className="brand-mark">AI</span>
        <span>项目作品集</span>
      </Link>
      <nav className="site-nav" aria-label="主导航">
        <Link href="/projects">项目</Link>
        <Link href="/projects/plm-knowledge-agent">完整案例</Link>
        <Link className="nav-cta" href="/portfolio-pdf">A4 导出版</Link>
      </nav>
    </header>
  );
}
