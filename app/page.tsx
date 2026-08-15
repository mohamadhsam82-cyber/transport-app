
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <span className="badge">Transport MVP</span>
        <h1>سامانه حمل‌ونقل و باربری</h1>
        <p>نسخه اولیه پروژه برای اتصال صاحب بار، راننده و مدیر سیس>
        <div className="nav">
          <Link className="btn" href="/register">ثبت‌نام</Link>
          <Link className="btn secondary" href="/login">ورود</Link>
          <Link className="btn secondary" href="/dashboard">داشبور>
        </div>
      </div>
    </main>
  );
}







import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="card hero">
        <span className="badge">BARINO</span>
        <h1>بارینو</h1>
        <p>
          سامانه حرفه‌ای حمل‌ونقل و مدیریت بار؛
          ارتباط آسان بین صاحب بار، راننده و مدیر.
        </p>

        <div className="nav">
          <Link className="btn" href="/register">ثبت‌نام</Link>
          <Link className="btn secondary" href="/login">ورود</Link>
          <Link className="btn secondary" href="/dashboard">داشبورد</Link>
        </div>
      </div>
    </main>
  );
}



