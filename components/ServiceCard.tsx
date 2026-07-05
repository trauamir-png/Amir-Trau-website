import type { Service } from "@/lib/data/services";

const accents = ["bg-brand-yellow", "bg-brand-blue", "bg-brand-pink", "bg-brand-teal"];

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <div
      id={service.id}
      className="scroll-mt-24 rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
    >
      <span className={`inline-block h-2 w-10 rounded-full ${accents[index % accents.length]}`} />
      <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
      <p className="mt-3 text-brand-muted leading-relaxed">{service.description}</p>
      <ul className="mt-5 flex flex-col gap-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-brand-ink">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
