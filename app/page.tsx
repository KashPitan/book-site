"use client";

import { Button } from "@/components/ui/button";
import { ReviewsGrid, Review } from "@/components/reviews";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function HomePage() {
  const reviews: Review[] = [
    {
      id: "1",
      quote:
        "I haven't read a romance novel since my early 20's and was held captive by Chasing Horizons. Now I'm caught in the net and have also bought Through The Tides.",
      author: "Pauline Graham",
    },
    {
      id: "2",
      quote:
        "I absolutely LOVED this beautifully written book! Could not put it down. Stunning prose. Brilliantly realised characters who burrow into your heart. Descriptions that wow. The writing is stunning. A travelogue and love story in one. Loved this book SO much and very highly recommend it to everyone. Cannot wait to read the next in the series and find out where Ji-Ho and Lexi go from here. Just wow! Do read this one!",
      author: "Renita D'Silva, Author—The Dream Wedding",
    },
    {
      id: "3",
      quote:
        "At its heart, Chasing Horizons isn't just a love story it's about freedom, transformation, and the courage to chase something beyond what’s expected. Scott delivers a tale that lingers long after the last page is turned, leaving readers nostalgic for adventures past while inspiring them to seek out new horizons.",
      author: "Abhay Singh",
    },
    {
      id: "4",
      quote:
        "The plan was to read a few chapters over coffee on a sunny bank holiday Monday. Realised at some point that I was halfway through this delightful page-turner. I found myself 'joining' Lexi and Ji-ho as they stepped away from it all and embarked on a year-long journey to self-discovery and serendipity. The author of this bold debut novel, immerses you further with every sumptuous description of sights, sounds fragrances and even internal dialogue, along the way. This is the art of storytelling simply at its best.",
      author: "D.A.P",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-800">
      <div className="bg-slate-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif text-white tracking-wide">
            NIKI SCOTT
          </h1>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-slate-800 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center">
            <div className="flex items-center space-x-8">
              <Link
                href="#books"
                className="text-white hover:text-teal-300 transition-colors"
              >
                BOOKS
              </Link>
              <Link
                href="#bio"
                className="text-white hover:text-teal-300 transition-colors"
              >
                BIO
              </Link>
              <Link
                href="#reviews"
                className="text-white hover:text-teal-300 transition-colors"
              >
                REVIEWS
              </Link>
              <Link
                href="https://www.instagram.com/niki_scott_novels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-300 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section
        id="books"
        className="py-16"
        style={{ backgroundColor: "#fff2d5" }}
      >
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif text-slate-800 mb-6 text-center">
            Chasing Horizons
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="lg:w-1/3">
              <Image
                src="/chasing-horizons.jpg"
                alt="Latest Book Cover"
                width={280}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:w-2/3">
              <p className="leading-relaxed mb-4 text-center">
                Lexi Carter should be starting her law career—but instead, she
                vanishes. Defying her powerful father&#39;s expectations, she
                embarks on a yearlong solo journey to find herself.
              </p>
              <p className="leading-relaxed mb-6 text-center">
                Jung Ji-ho, heir to a South Korean conglomerate, is escaping his
                family&#39;s control by traveling under the radar. When they
                meet in Dubai, their pact is simple: no romance, no
                complications.
              </p>
              <p className="leading-relaxed mb-6 text-center">
                But as they travel from bustling cities to quiet beaches, their
                connection deepens, defying every rule they set. With the clock
                ticking toward the end of their year, Lexi and Ji-ho face a
                choice: follow the path laid out for them, or take a chance on
                the unexpected.
              </p>
              <p className="leading-relaxed mb-6 font-bold text-center">
                A sweeping, slow-burn love story about freedom, identity, and
                the ache of almost.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="https://amzn.eu/d/1mDs76F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#ff8648" }}
                    className="hover:opacity-90 text-white"
                  >
                    Buy Ebook
                  </Button>
                </Link>
                <Link
                  href="https://buy.stripe.com/bJeaEZ0GI77X9wk0YOdjO00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#ff8648" }}
                    className="hover:opacity-90 text-white"
                  >
                    Buy Paperback
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="py-16"
        style={{ backgroundColor: "#ff8648" }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-center text-white mb-12">
            Reviews
          </h2>
          <ReviewsGrid reviews={reviews} />
        </div>
      </section>

      <section
        id="bio"
        className="py-16"
        style={{ backgroundColor: "#fff2d5" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div>
              <h2 className="text-3xl font-serif text-slate-800 mb-6 text-center">
                About Niki Scott
              </h2>
              <p className="leading-relaxed mb-6 text-center">
                <strong>Niki Scott</strong> is a storyteller fascinated by the
                way travel changes us and how love can find us in the most
                unexpected places. Her stories blend sweeping destinations, deep
                emotion, and characters readers can&#39;t help but root for.
              </p>
              <p className="leading-relaxed mb-6 text-center">
                When she&#39;s not writing, Niki can usually be found wandering
                new cities, hunting down the best local coffee, watching a
                romcom on Netflix, or curled up with a book that makes her feel
                something.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#ff8648" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-white mb-12">
            Also by Niki Scott
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="lg:w-1/3">
              <Image
                src="/through-the-tides.jpg"
                alt="Second Book Cover"
                width={280}
                height={400}
                className="rounded-lg shadow-2xl "
              />
            </div>
            <div className="lg:w-2/3">
              <p className="leading-relaxed mb-6 text-center font-bold">
                Ji-ho and Lexi's story continues… <br></br> Through The Tides
              </p>
              <p className="leading-relaxed mb-6 text-center">
                They chased freedom across the world. But some tides are darker,
                deeper—and love must survive the undertow to reach the shore.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="https://amzn.eu/d/fT06QpJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#fff2d5", color: "#333" }}
                    className="hover:opacity-90"
                  >
                    Buy Ebook
                  </Button>
                </Link>
                <Link
                  href="https://buy.stripe.com/7sY00l4WY77X0ZOePEdjO01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#fff2d5", color: "#333" }}
                    className="hover:opacity-90"
                  >
                    Buy Paperback
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">Copyright © 2024 Niki Scott.</p>
        </div>
      </footer>
    </div>
  );
}
