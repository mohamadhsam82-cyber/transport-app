export default function AdminPage() {
  return (
    <main className="container">
      <h1>پنل مدیریت</h1>
      <div className="grid grid-3">
        <div className="card"><h2>رانندگان</h2><p>بررسی و تأیید مدارک.</p></div>
        <div className="card"><h2>بارها</h2><p>نظارت بر بارها و درخواست‌ها.</p></div>
        <div className="card"><h2>سفرها</h2><p>نظارت بر سفرهای فعال.</p></div>
      </div>
    </main>
  );
}
