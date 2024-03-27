
import { Suspense } from "react";
import LoadingComponent from "./loading";;
import UserCard from "@/components/cards/UserCardComponent";

/*async function fetchUsers() {
  const users = await fetch("https://jsonplaceholder.org/users", {
    cache: "no-store"
  });
  const res = await users.json();
  return res;
}*/

export default function Home() {

  return (
    <>
      <div className="mt-10 flex text-center flex-col justify-center flex-wrap gap-5">
        <h1 className="font-ubuntu text-large">This is ubuntu font</h1>
        <h1 className="font-bold font-ubuntu  text-large">នេះជាប្រភេទអក្សរ ubuntu</h1>
        <h1 className="font-kantumruy">នេះជាប្រភេទអក្សរកន្ទុមរុយប្រូ</h1>
        <Suspense fallback={<LoadingComponent/>} >

        </Suspense>
      </div>
    </>
  );
}
