"use client";
import Image from "next/image";
import Bundler from "@/(bundler)/bundleUp";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Progress from "@/components/progress";
import { RecoilRoot } from "recoil";
export default function Home() {
  return (
    <div className="max-w-screen-xl">
      <RecoilRoot>
      <Header/>
      <Progress state={false} />
      <Bundler/>
      <Footer/>
      </RecoilRoot>
    </div>
  );
}
