import { Livelist } from "@/containers/Livelist/Livelist";
import { Counter } from "@/libs/features/counter/Counter";
import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>크리에이터 분석기</div>
      <Counter></Counter>
    </>
  );
}
