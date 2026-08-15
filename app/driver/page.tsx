import Link from "next/link";

export default function DriverPage() {
  return (
    <main className="container">
      <h1>پنل راننده</h1>
      <div className="grid grid-3">
        <div className="card"><h2>بارهای موجود</h2><p>لیست بارهای قابل درخواست.</p><Link className="btn" href="/driver/loads">مشاهده بارها</Link></div>
        <div className="card"><h2>مدارک</h2><p>مدیریت مدارک و وضعیت احراز هویت.</p></div>
        <div className="card"><h2>سفرها</h2><p>سفرهای جاری و قبلی.</p></div>
      </div>
    </main>
  );
}
