"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 pb-16 ">
      <div className="flex flex-col justify-between align-middle items-center gap-4 ">
        <Skeleton className="h-10 w-full lg:w-96" />
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <div key={e} className="flex flex-col space-y-2 p-6">
            <Skeleton className="h-48 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}