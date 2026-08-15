import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="container">
      <h1>داشبورد</h1>
      <div className="grid grid-3">
        <div className="card">
          <h2>راننده</h2>
          <p>مشاهده بارهای موجود و مدیریت سفرها.</p>
          <Link className="btn" href="/driver">ورود</Link>
        </div>
        <div className="card">
          <h2>صاحب بار</h2>
          <p>ثبت بار و مدیریت درخواست‌های رانندگان.</p>
          <Link className="btn" href="/shipper">ورود</Link>
        </div>
        <div className="card">
          <h2>مدیر</h2>
          <p>مدیریت کاربران و عملیات سیستم.</p>
          <Link className="btn" href="/admin">ورود</Link>
        </div>
      </div>
    </main>
  );
}
