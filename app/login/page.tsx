"use client";

import { API_URL } from "@/constants/api";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token";
import { LoginForm } from "@/types/auth/loginForm";
import { BaseResponse } from "@/types/common/base";
import { TokenResponse } from "@/types/response/tokenResponse";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import GIF from "@/assets/login_bg.gif";
import { setCookie } from "@/utils/cookie";
import SocialLogin from "@/components/SocialLogin";
import ThemedIcon from "@/components/ThemedIcon";

const Login = () => {
  const router = useRouter();
  const [fadeIn, setFadeIn] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = async (loginData) => {
    try {
      const { data } = await axios.post<BaseResponse<TokenResponse>>(
        `${API_URL}/auth/login`,
        loginData
      );
      if (data) {
        setCookie(ACCESS_TOKEN_KEY, data.data.accessToken);
        setCookie(REFRESH_TOKEN_KEY, data.data.refreshToken);
        router.push("/");
      }
    } catch (err: any) {}
  };

  const move = () => {
    setFadeIn(false);
    setTimeout(() => {
      router.push("/signup");
    }, 350);
  };

  const email = watch("email");
  const password = watch("password");

  return (
    <div className="w-full h-screen flex justify-center items-center bg-container-border px-40">
      <div
        className={`w-full pr-4 py-4 flex bg-bg items-center rounded-2xl shadow-lg ${
          fadeIn ? "animate-scale-up" : "animate-scale-down"
        } relative`}
      >
        <div
          className="absolute top-8 left-8 cursor-pointer "
          onClick={() => {
            router.back;
          }}
        >
          <ThemedIcon
            icon="arrow-left-back"
            width={48}
            height={48}
            variant="main"
            shade="container"
          />
        </div>
        <div className=" flex flex-col items-center gap-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-[420px] gap-9 mx-24"
          >
            <div className="flex flex-col gap-2">
              <p className=" font-bold text-4xl text-main-container">로그인</p>
              <p className=" font-normal text-xl text-main-container">
                로그인하고 Solve에서 고수되기
              </p>
            </div>
            <div className=" flex-col flex w-full gap-4">
              <label
                htmlFor="email"
                className=" flex flex-col gap-2 text-main-container"
              >
                이메일
                <input
                  type="text"
                  id="email"
                  {...register("email", {
                    minLength: {
                      value: 1,
                      message: "이메일을 입력해주세요",
                    },
                  })}
                  className=" border border-bg-border h-14 px-3 focus:outline-none rounded-lg text-main-container bg-bg"
                  placeholder="이메일을 입력해주세요"
                />
              </label>
              <label
                htmlFor="password"
                className=" flex flex-col gap-2 text-main-container"
              >
                비밀번호
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    minLength: {
                      value: 1,
                      message: "비밀번호를 입력해주세요",
                    },
                  })}
                  className=" border border-bg-border rounded-lg h-14 px-3 focus:outline-none text-main-container bg-bg"
                  placeholder="비밀번호를 입력해주세요"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={
                isSubmitting ||
                email.trim().length < 1 ||
                password.trim().length < 1
              }
              className="bg-primary-700 h-12 rounded-lg text-white disabled:bg-bg-border"
            >
              로그인
            </button>
          </form>

          <div
            className=" h-0 overflow-visible border border-container-border w-[420px] flex justify-center items-center
          "
          >
            <p className=" bg-bg w-12 text-center text-bg-border text-sm">
              또는
            </p>
          </div>
          <SocialLogin />
          <div className="flex gap-2 justify-center items-center ">
            <p className=" text-sm text-main-container">계정이 없다면?</p>
            <p
              onClick={move}
              className=" font-semibold text-sm text-info-500 cursor-pointer"
            >
              회원가입
            </p>
          </div>
        </div>
        <div className="flex-1 h-[780px]">
          <Image
            src={GIF}
            alt="로그인 페이지 gif"
            width={1130}
            height={900}
            className="w-full h-full object-cover object-left rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
