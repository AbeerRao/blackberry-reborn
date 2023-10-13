import AppleCopy from "@/components/AppleCopy";
import BigBoy from "@/components/BigBoy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import PhoneInfo from "@/components/PhoneInfo";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import SpecView from "@/components/SpecView";
import Tagline from "@/components/Tagline";

export default function Home() {

  const styles = {
    main: "bg-[#F9F9F9] h-full w-screen overflow-x-hidden text-black px-10 py-5 pb-0 flex flex-col items-center",
  }

  const systum = [
    {
      name: "RAVN",
      image: "bigWatch"
    },
    {
      name: "OBSIDIAN",
      image: "bigPhone"
    },
  ]

  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      <PhoneInfo />
      <Tagline />
      <Products />
      <Pricing />
      {systum.map((urmom, id) => (
        <BigBoy name={urmom.name} image={urmom.image} key={id} />
      ))}
      <AppleCopy />
      <SpecView />
      <Footer />
    </main>
  )
}
