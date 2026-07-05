import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl bg-brand-surface p-8">
      <blockquote className="text-brand-ink leading-relaxed">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6">
        <div className="font-semibold text-brand-ink">{testimonial.name}</div>
        <div className="text-sm text-brand-muted">{testimonial.role}</div>
      </figcaption>
    </figure>
  );
}
