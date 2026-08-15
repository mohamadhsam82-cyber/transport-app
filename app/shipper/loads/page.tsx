import Link from "next/link";

export default function ShipperLoadsPage() {
  return (
    <main className="container">
      <h1>بارهای من</h1>
      <div className="card">
        <p>فرم ایجاد Load در مرحله اتصال API اضافه می‌شود.</p>
      </div>
      <div className="nav"><Link className="btn secondary" href="/shipper">بازگشت</Link></div>
    </main>
  );
}
