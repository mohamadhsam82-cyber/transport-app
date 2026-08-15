import Link from "next/link";

export default function ShipperPage() {
  return (
    <main className="container">
      <h1>پنل صاحب بار</h1>
      <div className="card">
        <h2>مدیریت بارها</h2>
        <p>در این بخش ثبت بار، درخواست راننده و سفر مدیریت می‌شود.</p>
        <Link className="btn" href="/shipper/loads">بارهای من</Link>
      </div>
    </main>
  );
}
