"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchDebounced=useDebouncedCallback(handleSearch,300)
  function handleSearch(value: string) {
    
    console.log(`searching...${value}`)
    const params = new URLSearchParams(searchParams);
    params.set('page','1')
    if (value) {
      params.set("value", value);
      replace(pathname + "?" + params.toString());

    } else {
      params.delete("value");
      replace(pathname)
    }
    params.set("value", value);
  }
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearchDebounced(e.target.value);
        }}
        defaultValue={searchParams.get('value')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
