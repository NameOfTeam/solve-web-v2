"use client";

import { API_URL } from "@/constants/api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token";
import { SignupForm } from "@/types/auth/signupForm";
import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TokenResponse } from "@/types/response/tokenResponse";
import { BaseResponse } from "@/types/common/base";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GIF from "@/assets/signup.gif";

const Signup = () => {
  const [fadeIn, setFadeIn] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignupForm>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const [phase, setPhase] = useState<
    "USERNAME" | "PASSWORD" | "EMAIL" | "DONE"
  >("USERNAME");

  const router = useRouter();

  const onSubmit: SubmitHandler<SignupForm> = async (loginData) => {
    try {
      const { data } = await axios.post<BaseResponse<TokenResponse>>(
        `${API_URL}/auth/login`,
        loginData
      );
      if (data) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
        router.push("/");
      }
    } catch (err: any) {}
  };

  const email = watch("email");
  const password = watch("password");
  const passwordConfirm = watch("passwordConfirm");
  const username = watch("username");

  const move = () => {
    setFadeIn(false);
    setTimeout(() => {
      router.push("/login");
    }, 350);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-container-border px-40">
      <div
        className={`w-full pl-4 py-4 flex bg-white items-center rounded-2xl shadow-lg ${
          fadeIn ? "animate-scale-up" : "animate-scale-down"
        }`}
      >
        <div className="flex-1 h-[780px]">
          <Image
            src={GIF}
            alt="로그인 페이지 gif"
            width={1130}
            height={900}
            className="w-full h-full object-cover object-left rounded-3xl"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[420px] gap-9 mx-24"
        >
          {phase === "EMAIL" ? (
            <>
              <div className="flex flex-col gap-2">
                <p className=" font-bold text-4xl">회원가입</p>
                <p className=" font-normal text-xl">
                  인증을 위한 이메일을 입력해주세요.
                </p>
              </div>
              <div className=" flex-col flex w-full gap-4">
                <label htmlFor="email" className=" flex flex-col gap-2">
                  이메일
                  <input
                    type="text"
                    id="email"
                    {...register("email", {
                      required: "이메일울 입력해주세요",
                    })}
                    className=" border rounded-lg h-14 px-3 focus:outline-none"
                    placeholder="이메일을 입력해주세요"
                  />
                </label>
              </div>
              <button
                type="submit"
                className=" bg-primary-700 h-12 rounded-lg text-white disabled:bg-container-border"
                onClick={() => {
                  setPhase("DONE");
                }}
                disabled={isSubmitting || email.trim().length < 1}
              >
                인증 발송하기
              </button>
            </>
          ) : phase === "PASSWORD" ? (
            <>
              <div className="flex flex-col gap-2">
                <p className=" font-bold text-4xl">회원가입</p>
                <p className=" font-normal text-xl">
                  나만의 비밀번호를 정해주세요!
                </p>
              </div>
              <div className=" flex-col flex w-full gap-4">
                <label className=" flex flex-col gap-2">
                  비밀번호
                  <input
                    type="text"
                    {...register("password", {
                      required: "비밀번호를 입력해주세요",
                    })}
                    className=" border rounded-lg h-14 px-3 focus:outline-none"
                    placeholder="비밀번호를 입력해주세요"
                  />
                </label>
                <label className=" flex flex-col gap-2">
                  비밀번호 확인
                  <input
                    type="text"
                    {...register("passwordConfirm", {
                      required: "비밀번호를 다시 입력해주세요",
                    })}
                    className=" border rounded-lg h-14 px-3 focus:outline-none"
                    placeholder="비밀번호를 다시 입력해주세요"
                  />
                </label>
              </div>
              <button
                type="submit"
                className=" bg-primary-700 h-12 rounded-lg text-white  disabled:bg-container-border"
                onClick={() => {
                  setPhase("EMAIL");
                }}
                disabled={
                  isSubmitting ||
                  email.trim().length < 1 ||
                  password !== passwordConfirm
                }
              >
                다음으로
              </button>
            </>
          ) : phase === "DONE" ? (
            <>
              <div className="flex flex-col gap-2">
                <p className=" font-bold text-4xl">
                  인증용 메일이 전송되었습니다!
                </p>
                <p className=" font-normal text-xl">
                  인증 종료 후 로그인해주세요.
                </p>
              </div>
              <button
                type="submit"
                className=" bg-primary-700 h-12 rounded-lg text-white"
                onClick={() => {
                  router.push("/login");
                }}
              >
                로그인 페이지로 이동
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <p className=" font-bold text-4xl">회원가입</p>
                <p className=" font-normal text-xl">
                  사용할 이름을 입력해주세요.
                </p>
              </div>
              <div className=" flex-col flex w-full gap-4">
                <label className=" flex flex-col gap-2">
                  아이디
                  <input
                    type="text"
                    {...register("username", {
                      required: "아이디를 입력해주세요",
                    })}
                    className=" border rounded-lg h-14 px-3 focus:outline-none"
                    placeholder="아이디를 입력해주세요 (영문, 3~16자)"
                  />
                </label>
              </div>
              <button
                type="submit"
                className=" bg-primary-700 h-12 rounded-lg text-white disabled:bg-container-border"
                disabled={isSubmitting || username.trim().length < 1}
                onClick={() => {
                  setPhase("PASSWORD");
                }}
              >
                다음으로
              </button>
            </>
          )}
          <div className="flex gap-2 justify-center items-center">
            <p className=" text-sm">계정이 있으면?</p>
            <p
              onClick={move}
              className=" font-semibold text-sm text-info-500 cursor-pointer"
            >
              로그인
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
