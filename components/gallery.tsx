import Image from "next/image"
import { Camera } from "lucide-react"

const projects = [
  {
    src: "/images/install-farmhouse.jpg",
    alt: "Solar panels installed on a modern white farmhouse with multi-section roof",
    label: "Farmhouse Install",
  },
  {
    src: "/images/install-lakefront.png",
    alt: "Aerial view of lakefront home with full solar panel coverage on roof",
    label: "Lakefront Home",
  },
  {
    src: "/images/install-1.jpg",
    alt: "Solar panels covering the garage roof of a home with stone accents and green lawn",
    label: "Residential Garage",
  },
  {
    src: "/images/install-large-home.jpg",
    alt: "Large two-story home with solar panels on the garage roof section",
    label: "Full Roof Coverage",
  },
  {
    src: "/images/install-blue-house.jpg",
    alt: "Blue-sided two-story home with solar panels on the back roof and fenced yard",
    label: "Backyard View",
  },
  {
    src: "/images/install-2.png",
    alt: "Building with solar panels on steep roof angle with inverter box visible at dusk",
    label: "Steep Roof Install",
  },
  {
    src: "/images/install-ranch-drone.jpg",
    alt: "Aerial drone view of blue ranch-style home with solar panels being installed by crew on the roof",
    label: "Ranch Home Install",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
            <Camera className="h-4 w-4" />
            Our Work
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Real Installations.{" "}
              <span className="text-secondary">Real Indiana Homes.</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every home is different. Every system we design is custom. Here are a
            few of our recent projects.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.src}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 || index === 3
                  ? "sm:row-span-2 aspect-[3/4]"
                  : index === 6
                    ? "sm:col-span-2 lg:col-span-3 aspect-[21/9]"
                    : "aspect-[4/3]"
              }`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 6 ? "object-top" : ""
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {project.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
          >
            See If Your Home Qualifies
          </a>
        </div>
      </div>
    </section>
  )
}
