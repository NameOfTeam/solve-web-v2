"use client"

import Link from 'next/link';
import React from 'react'
import ThemedIcon from './ThemedIcon';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit
  } = useForm<{ query: string }>({
    defaultValues: {
      query: ""
    }
  });

  const query = watch("query");

  const search = () => {
    router.push(`/problems?query=${query}`);
  }

  return (
    <form className="w-full font-[600] text-sm px-3 rounded-lg border border-bg-border bg-container flex items-center" onSubmit={handleSubmit(search)}>
      <input
        type="text"
        className="bg-transparent outline-none py-3 text-main-container flex-1"
        placeholder="문제를 검색하세요."
        {...register("query", {
          required: true
        })}
      />
      <Link className="cursor-pointer w-6 h-6" href="/problems">
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
}

export default Search