
export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl border">
      <p className="text-slate-500">{title}</p>
      <h2 className="text-3xl font-bold mt-3">{value}</h2>
    </div>
  );
}
