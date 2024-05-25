import Image from "next/image";
import { redirect } from "next/navigation";

export default function HomePage() {

  // ahora el route de la app va a ser /dashboard/counter
  redirect("/dashboard/counter");
}
