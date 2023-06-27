import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";
import Particles from "../components/particles";

export default async function ProjectsPage() {
  const featured = allProjects.find((project) => project.slug === "1")!;
  const top2 = allProjects.find((project) => project.slug === "2")!;
  const top3 = allProjects.find((project) => project.slug === "3")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  sorted.forEach((element) => {
    console.log(element.type);
  });

  return (
    <div className="relative pb-16">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      <div className="px-6 pt-32 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Referanslar
          </h2>
          <p className="mt-4 text-zinc-400">
            Çalıştığımız ve hizmet verdiğimiz firmalar
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  {featured.date ? (
                    <time dateTime={new Date(featured.date).toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date(featured.date))}
                    </time>
                  ) : (
                    <span>SOON</span>
                  )}
                </div>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <Eye className="w-4 h-4" />{" "}
                </span>
              </div>
              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                {featured.title}
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {featured.description}
              </p>
            </article>
          </Card>
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {/* <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
