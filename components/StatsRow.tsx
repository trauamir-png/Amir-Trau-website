import { stats } from "@/lib/data/testimonials";

export default function StatsRow() {
  return (
    <div className="grid grid-cols-3 gap-6 rounded-2xl bg-brand-ink px-6 py-10 text-white">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-extrabold md:text-4xl">{stat.value}</div>
          <div className="mt-1 text-xs text-white/70 md:text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
