"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import GIF from "@/assets/signup.gif";
import useVerify from "@/hooks/verify/useVerify";
import PendingGIF from "@/assets/Loading.gif";
import SuccessGIF from "@/assets/Check.gif";
import FailGIf from "@/assets/Bad.gif";

const Verify = () => {
  const [isVerified, setIsVerified] = useState<"FAIL" | "SUCCESS" | "PENDING">(
    "PENDING"
  );
  const [fullyRendered, setFullyRendered] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const verify = useVerify();

  const token = searchParams.get("token");

  const letVerify = useCallback(async () => {
    if (token) {
      const verifyStatus = await verify(token);
      setIsVerified(verifyStatus ? "SUCCESS" : "FAIL");
    }
  }, [verify, token]);

  useEffect(() => {
    letVerify();
  }, [token, letVerify]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setFullyRendered(true);
    }, 500);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-container-border px-40">
      <div className="w-full pl-4 py-4 flex bg-bg items-center rounded-2xl shadow-lg relative animate-fade-in">
        <div className="flex-1 h-[700px]">
          <Image
            src={GIF}
            alt="로그인 페이지 gif"
            width={1130}
            height={900}
            className="w-full h-full object-cover object-left rounded-3xl"
          />
        </div>
        <div className="flex flex-col w-96 gap-9 mx-24">
          {isVerified === "SUCCESS" ? (
            <>
              <div className=" flex flex-col gap-6 items-center">
                {fullyRendered && (
                  <Image src={SuccessGIF} alt="FAIL" width={160} height={160} />
                )}

                <div className="flex flex-col gap-2 items-center">
                  <p className=" font-bold text-3xl text-main-container">
                    인증이 완료되었습니다!
                  </p>
                  <p className=" font-normal text-xl text-main-container">
                    입력한 정보로 로그인하세요.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className=" bg-primary-700 h-12 rounded-lg text-white "
                onClick={() => {
                  router.push("/login");
                }}
              >
                로그인하러 가기
              </button>
            </>
          ) : isVerified === "FAIL" ? (
            <>
              <div className=" flex flex-col gap-6 items-center">
                {fullyRendered && (
                  <Image src={FailGIf} alt="FAIL" width={160} height={160} />
                )}
                <div className="flex flex-col gap-2 items-center">
                  <p className=" font-bold text-3xl text-main-container">
                    인증에 실패했습니다.
                  </p>
                  <p className=" font-normal text-xl text-main-container">
                    회원가입을 다시 시도해 주세요.
                  </p>
                  <p className=" font-normal text-lg text-danger-500">
                    토큰이 잘못되었습니다.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className=" bg-primary-700 h-12 rounded-lg text-white "
                onClick={() => {
                  router.push("/login");
                }}
              >
                로그인하러 가기
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-6 items-center">
                {fullyRendered && (
                  <Image
                    src={PendingGIF}
                    alt="pending"
                    width={160}
                    height={160}
                  />
                )}

                <p className=" font-semibold text-3xl text-white">
                  인증 대기중입니다...
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;
