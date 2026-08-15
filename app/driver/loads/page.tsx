import Link from "next/link";

export default function DriverLoadsPage() {
  return (
    <main className="container">
      <h1>بارهای موجود</h1>
      <div className="card">
        <p>این صفحه به API و جدول Load متصل خواهد شد.</p>
        <span className="badge">API آماده توسعه</span>
      </div>
      <div className="nav"><Link className="btn secondary" href="/driver">بازگشت</Link></div>
    </main>
  );
}
