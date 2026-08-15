import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="container">
      <div className="card">
        <h1>ثبت‌نام</h1>
        <p>انتخاب نقش و ثبت‌نام واقعی در مرحله بعدی پیاده‌سازی می‌شود.</p>
        <div className="nav">
          <Link className="btn" href="/dashboard">ادامه آزمایشی</Link>
          <Link className="btn secondary" href="/login">ورود</Link>
        </div>
      </div>
    </main>
  );
}
