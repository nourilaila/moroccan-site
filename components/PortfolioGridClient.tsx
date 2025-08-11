"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { ProjectMeta } from "../lib/content";
type Cat = "all" | "residential" | "hospitality" | "retail";
export default function PortfolioGridClient({ projects, locale }: { projects: ProjectMeta[]; locale: string }) {
  const [filter, setFilter] = useState<Cat>("all");
  const visible = filter === "all" ? projects : projects.filter(p => p.category === filter);
  const btn = (f: Cat) => `px-3 py-1 rounded ${filter === f ? "bg-terracotta-600 text-bone-100" : "bg-bone-100 text-terracotta-900"}`;
  const translate = (cat: string) => {
    const labels: any = {
      en: { all: 'All', residential: 'Residential', hospitality: 'Hospitality', retail: 'Retail' },
      fr: { all: 'Tous', residential: 'Résidentiel', hospitality: 'Hôtellerie', retail: 'Commerce' },
      ar: { all: 'الكل', residential: 'سكني', hospitality: 'ضيافة', retail: 'تجاري' },
    }; return labels[locale][cat] ?? cat;
  };
  return (<>
    <div className="mb-6 flex gap-3">
      {(["all","residential","hospitality","retail"] as Cat[]).map(f => (
        <button key={f} onClick={() => setFilter(f)} className={btn(f)}>{translate(f)}</button>
      ))}
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      {visible.map(p => <ProjectCard key={p.slug} project={p} locale={locale} />)}
    </div>
  </>);
}
