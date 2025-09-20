import { Skeleton } from "@/components/ui/skeleton";

const LoadingData = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
        <div key={e} className="flex space-y-2 p-4">
          <Skeleton className="h-12 w-full " />
        </div>
      ))}
    </div>
  );
};

export default LoadingData;