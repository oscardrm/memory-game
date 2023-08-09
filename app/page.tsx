import { Fragment } from "react";
import Board from "./components/Board";

export default function Home() {
  return (
    <Fragment>
  {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <h1>Memory game</h1>
      <Board />
    </Fragment>
  )
}
