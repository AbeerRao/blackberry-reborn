import Header from "@/components/Header";
import Landing from "@/components/Landing";
import PhoneInfo from "@/components/PhoneInfo";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import Tagline from "@/components/Tagline";

export default function Home() {

  const styles = {
    main: "bg-[#F9F9F9] h-full w-screen overflow-x-hidden text-black px-10 py-5 flex flex-col items-center",
  }

  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      <PhoneInfo />
      <Tagline />
      <Products />
      <Pricing />
    </main>
  )
}
