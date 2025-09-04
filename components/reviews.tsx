import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export interface Review {
  id: string;
  quote: string;
  author: string;
}

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export function ReviewCard({ review, className = "" }: ReviewCardProps) {
  return (
    <Card
      className={`bg-white shadow-lg max-h-[400px] max-w-[600px] ${className}`}
    >
      <CardContent className="p-8">
        <blockquote className="text-xl italic text-slate-700 mb-4">
          "{review.quote}"
        </blockquote>
        <div className="flex items-center justify-between">
          <cite className="text-slate-600 font-medium">— {review.author}</cite>
        </div>
      </CardContent>
    </Card>
  );
}

interface ReviewsGridProps {
  reviews: Review[];
  className?: string;
}

export function ReviewsGrid({ reviews, className = "" }: ReviewsGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${className} relative`}>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide"
      >
        <div className="flex gap-6 min-w-max px-4">
          {reviews.map((review) => (
            <div key={review.id} className="flex-shrink-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Navigation Buttons */}
      <Button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-800 text-white shadow-lg rounded-full w-12 h-12 p-0 z-10"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2  bg-slate-800 text-white shadow-lg rounded-full w-12 h-12 p-0 z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  );
}
