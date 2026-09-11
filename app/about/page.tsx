import Link from "next/link";
import Navbar from "@/components/Navbar";

const clubStats = [
  {
    value: "2020",
    label: "Founded",
  },
  {
    value: "15+",
    label: "Core Team Members",
  },
  {
    value: "500+",
    label: "Campus Community",
  },
  {
    value: "ECA",
    label: "Cultural Club",
  },
];

const values = [
  {
    title: "Community",
    description:
      "Anime is more fun when you have people to talk about it with. We bring students together through shared interests and experiences.",
  },
  {
    title: "Creativity",
    description:
      "From cosplay and photography to event planning and creative projects, the club gives members space to express themselves.",
  },
  {
    title: "Shared Experiences",
    description:
      "Our events are designed to turn individual interests into memorable experiences that the whole campus community can enjoy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="px-6 pb-20 pt-10 sm:pt-14">
        <div className="mx-auto max-w-5xl">

          {/* HEADER */}
          <section className="mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-emerald-400">
              About the club
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              More than watching anime.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              We are a student community at VIT Bhopal built around anime,
              manga, Japanese pop culture and the people who enjoy them. Our
              goal is to create a space where students can connect,
              participate and turn their interests into shared experiences.
            </p>
          </section>

          {/* STATS */}
          <section className="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4">
            {clubStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-black/30 p-6 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-emerald-400">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>

          {/* WHAT WE DO */}
          <section className="mb-20 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                What we do
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Turning fandom into campus life.
              </h2>
            </div>

            <div className="space-y-5 leading-7 text-zinc-300">
              <p>
                Our activities revolve around the things that make anime
                culture exciting: watching, discussing, competing, creating
                and meeting people with similar interests.
              </p>

              <p>
                Events can range from anime screenings and quizzes to cosplay
                activities, discussions and other creative gatherings.
              </p>

              <p>
                Whether you have been watching anime for years or are just
                getting started, the club is meant to be a welcoming place to
                participate at your own pace.
              </p>
            </div>
          </section>

          {/* VALUES */}
          <section className="mb-20">
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                What matters to us
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Our values
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="rounded-lg border border-white/10 bg-black/20 p-6"
                >
                  <p className="font-mono text-sm text-emerald-400">
                    0{index + 1}
                  </p>

                  <h3 className="mt-5 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* JOIN */}
          <section className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              Get involved
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Find your place in the community.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Keep an eye on upcoming events and club announcements. You do
              not need to be an expert to participate — just bring your
              curiosity and your favourite stories.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block rounded-md bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              Contact the club
            </Link>
          </section>

        </div>
      </main>
    </>
  );
}