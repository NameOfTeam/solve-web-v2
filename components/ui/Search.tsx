"use client";

import Link from "next/link";
import React from "react";
import ThemedIcon from "./ThemedIcon";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

const Search = ({ route }: { route: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { register, watch, handleSubmit } = useForm<{ query: string }>({
    defaultValues: {
      query: searchParams.get('query') || "",
    },
  });

  const query = watch("query");

  const search = () => {
    if (query.length > 0) {
      router.push(`/${route}?query=${query}`);
    } else {
      router.push(`/${route}`);
    }
  };

  return (
    <form
      className="w-full font-[600] text-sm px-3 rounded-lg bg-container flex items-center sm:w-[460]"
      onSubmit={handleSubmit(search)}
    >
      <input
        type="text"
        className="bg-transparent outline-none py-3 text-main-container flex-1"
        placeholder='검색어를 입력해주세요.'
        {...register("query")}
      />
      <Link className="cursor-pointer w-6 h-6" href={`/${route}`}>
        <ThemedIcon
          icon="search"
          width={24}
          height={24}
          variant="main"
          shade="container"
        />
      </Link>
    </form>
  );
};

export default Search;
