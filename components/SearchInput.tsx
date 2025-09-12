"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

// rule of thumb : whenever you need to use a hook, you should always call 'use client'

const SearchInput = () => {
  const pathname = usePathname(); //hook = smtg starts with use
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";

  // we need a useState to modify it :
  const [searchQuery, setSearchQuery] = useState("");

  // we'll do the entire db filtration based on what we're typing in the search bar
  useEffect(() => {
    // we don't want to call the database every time we type a letter --> using timeout
    const delayDebounceFn = setTimeout(() => {
      // we did all of this to automatically reflect what we search for in the search bar in the browser url bar.
      // however it doesn't do any filtering
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === "/companions") {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 500);
  }, [searchQuery, router, searchParams, pathname]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        className="outline-none"
        placeholder="Search companion ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
