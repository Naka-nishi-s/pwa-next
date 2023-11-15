'use client'
import Link from "next/link";
import { useState } from "react";


const Page = () => {

  const [number, setNumber] = useState(0);

  const countUp = () => {
    setNumber(number + 1)
  }

  const countDown = () => {
    setNumber(number - 1)
  }

  return (
    <>
      <div>page1</div>
      <h1>カウンター</h1>
      <p>{number}</p>
      <button onClick={countUp}>カウントアップ</button>
      <button onClick={countDown}>カウントダウン</button>
      <div>
        <Link href="/">戻る</Link>
      </div>
    </>

  )
}

export default Page
