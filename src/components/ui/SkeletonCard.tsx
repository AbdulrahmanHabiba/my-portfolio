import Skeleton from "./Skeleton";

const SkeletonCard = () => (
  <div className="w-full h-[400px] space-y-4">
    <Skeleton className="w-full h-[200px] rounded-lg" />
    <Skeleton className="w-3/4 h-6 rounded-md" />
    <Skeleton className="w-full h-20 rounded-md" />
    <div className="flex flex-wrap gap-2">
      {[1, 2, 3, 4].map((j) => (
        <Skeleton key={j} className="w-16 h-6 rounded-full" />
      ))}
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-24 h-8 rounded-md" />
      <Skeleton className="w-24 h-8 rounded-md" />
    </div>
  </div>
);

export default SkeletonCard;