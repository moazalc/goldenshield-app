import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Hammer,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <Link
              href="/projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0 hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Building Excellence, Managing Success
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">
            Golden Shield Contracting and Real Estate Management services with
            over two decades of trusted expertise.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 cursor-pointer"
          >
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your contracting and real estate
              management needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">
                  Broker Opinion of Valuation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional property value assessments to help owners and
                  investors make informed decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">
                  Marketing for Sale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tailored marketing strategies to showcase properties and
                  attract qualified buyers quickly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">
                  Managing the Property While Vacant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure and maintain properties during vacancy, ensuring they
                  remain in prime condition.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">
                  General Maintenance Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reliable maintenance solutions to preserve property value and
                  keep everything running smoothly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">
                  General Contractor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  End-to-end construction services with expert oversight from
                  planning to completion.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">
                  Recommend Repairs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed property inspections with repair recommendations to
                  increase market value.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">
                  Managing Property While Occupied & Lease Enforcement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive tenant management including rent collection,
                  lease compliance, and dispute resolution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-card-foreground">
                  Marketing the Property for Lease
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Effective marketing campaigns to attract quality tenants and
                  minimize vacancy periods.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                About Golden Shield Contracting
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Golden Shield Company has gained preference and distinction
                among companies, with the testimony of banks and companies,
                financial financing, integrity of dealing with all and the trust
                of customers.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Since its inception, it has specialized in real estate brokerage
                in the sale and purchase of real estate, electronic trading,
                purchase and sale of land and real estate, various contracting
                works and all trade business Such as construction works,
                finishing works, all electrical works, decoration works and
                other works related to the field of general contracting.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/logo.png"
                alt="Our professional team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Briefing Section */}
      <section className="py-20 bg-popover">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/logo.png"
                alt="CEO Portrait"
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
              />
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-popover-foreground mb-8 text-balance leading-relaxed">
              &quot; The journey of a founder typically begins with a
              groundbreaking idea or concept. They recognize an opportunity in
              the market and have the ability to envision a successful business
              model around it. Armed with passion, determination, and a strong
              belief in their vision, the founder embarks on the challenging
              path of entrepreneurship. Leadership is a critical aspect of a
              founder&apos;s role. &quot;
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold text-primary">
                Abdulrahman Alsalem
              </div>
              <div className="text-muted-foreground">Founder & Chairman</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Contact us today for a
              consultation.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  We&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input className="bg-white" placeholder="First Name" />
                  <Input className="bg-white" placeholder="Last Name" />
                </div>
                <Input
                  className="bg-white"
                  placeholder="Email Address"
                  type="email"
                />
                <Input
                  className="bg-white"
                  placeholder="Phone Number"
                  type="tel"
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-32 bg-white"
                />
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">
                        (+971) 02-554-3445
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">
                        info@Goldenshield-uae.com
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">Office</div>
                      <div className="text-muted-foreground">
                        Abu Dhabi
                        <br />
                        Mussafah
                        <br />
                        Al Hidab 3 St.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="bg-muted rounded-lg p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454.26542079706917!2d54.5123644907684!3d24.37701145825775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4167cc39a61b%3A0x38b68ded69892cb9!2sView%20Car%20Care!5e0!3m2!1sen!2sae!4v1757937475837!5m2!1sen!2sae"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Golden Shield Contracting{" "}
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
                  <a
                    href="#about"
                    className="hover:text-accent transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-accent transition-colors"
                  >
                    Projects
                  </Link>
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
