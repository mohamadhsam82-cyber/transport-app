import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="container">
      <div className="card">
        <h1>ورود</h1>
        <p>در نسخه بعدی، OTP و احراز هویت واقعی به این صفحه متصل می‌شود.</p>
        <div className="nav">
          <Link className="btn" href="/dashboard">ورود آزمایشی</Link>
          <Link className="btn secondary" href="/register">ثبت‌نام</Link>
        </div>
      </div>
    </main>
  );
}
