import type { IReview } from "@/types/course-d-t";


// calculate discount
export function discountPercentage(originalPrice: number, salePrice: number) {
  const discount = ((originalPrice - salePrice) / originalPrice) * 100;
  return discount;
}

export function averageRating(reviews: IReview[]) {
  if (!reviews || reviews.length === 0) {
    return 0; // Return 0 if there are no reviews
  }

  // Calculate the sum of all ratings
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

  // Calculate the average rating
  const avgRating = totalRating / reviews.length;

  return Number(avgRating.toFixed(0));
}

export function formatUrl(url: string) {
  return url.toLowerCase()
    .replace(/&/g, "")
    .split(" ")
    .filter(Boolean)
    .join("-");
}