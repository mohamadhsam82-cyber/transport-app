import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <span className="badge">Transport MVP</span>
        <h1>سامانه حمل‌ونقل و باربری</h1>
        <p>نسخه اولیه پروژه برای اتصال صاحب بار، راننده و مدیر سیستم.</p>
        <div className="nav">
          <Link className="btn" href="/register">ثبت‌نام</Link>
          <Link className="btn secondary" href="/login">ورود</Link>
          <Link className="btn secondary" href="/dashboard">داشبورد</Link>
        </div>
      </div>
    </main>
  );
}
