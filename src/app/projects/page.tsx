import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, DollarSign } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Downtown Dubai Corporate Tower",
    description:
      "A 45-story mixed-use development featuring premium office spaces, retail outlets, and luxury residences in the heart of Downtown Dubai.",
    image: "/logo.png",
    category: "Commercial",
    year: "2024",
    location: "Downtown Dubai",
    value: "AED 165M",
    status: "Completed",
  },
  {
    id: 2,
    title: "Al Reem Island Luxury Residences",
    description:
      "Exclusive waterfront residential towers offering 200 premium apartments with panoramic views of Abu Dhabi’s skyline and world-class amenities.",
    image: "/logo.png",
    category: "Residential",
    year: "2023",
    location: "Al Reem Island, Abu Dhabi",
    value: "AED 118M",
    status: "Completed",
  },
  {
    id: 3,
    title: "Dubai Internet City Innovation Hub",
    description:
      "A state-of-the-art technology campus designed for startups and enterprises, integrating sustainable building practices and collaborative workspaces.",
    image: "/logo.png",
    category: "Commercial",
    year: "2023",
    location: "Dubai Internet City",
    value: "AED 103M",
    status: "Completed",
  },
  {
    id: 4,
    title: "Sharjah Central Mall Renovation",
    description:
      "Comprehensive redevelopment of a historic shopping destination into a modern retail and entertainment hub for families.",
    image: "/logo.png",
    category: "Renovation",
    year: "2022",
    location: "Sharjah Central District",
    value: "AED 66M",
    status: "Completed",
  },
  {
    id: 5,
    title: "Dubai Hills Medical Center",
    description:
      "Advanced healthcare facility featuring cutting-edge technology, patient-first design, and specialized medical departments.",
    image: "/logo.png",
    category: "Healthcare",
    year: "2022",
    location: "Dubai Hills",
    value: "AED 81M",
    status: "Completed",
  },
  {
    id: 6,
    title: "Abu Dhabi Skyline Business Park",
    description:
      "Multi-phase development delivering Grade A office spaces, retail units, and leisure amenities in a modern business hub.",
    image: "/logo.png",
    category: "Commercial",
    year: "2024",
    location: "Abu Dhabi Business District",
    value: "AED 140M",
    status: "In Progress",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Premier Construction
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <span className="text-primary font-medium">Projects</span>
            <Link
              href="/#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link
              href="/"
              className="flex items-center text-primary hover:text-primary/80 transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary mb-6 text-balance">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore our portfolio of successful contracting and development
              projects that showcase our commitment to excellence and
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={
                        project.status === "Completed" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {project.value}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Let us bring your vision to life with our expertise in contracting
            and real estate management.
          </p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"
            >
              Get In Touch Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Golden Shield Contracting
              </h3>
              <p className="text-primary-foreground/80">
                Building excellence and managing success for over two decades.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>General Contracting</li>
                <li>Project Supervision</li>
                <li>Real Estate Management</li>
                <li>Property Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link
                    href="/#about"
                    className="hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <span className="text-accent">Projects</span>
                </li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>(+971) 02-554-3445</li>
                <li>info@Goldenshield-uae.com</li>
                <li>
                  Abu Dhabi
                  <br />
                  Mussafah, Al Hidab 3 St.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>
              &copy; 2025 Golden Shield & Real Estate Management. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
