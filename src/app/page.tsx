import es from "@/i18n/es.json"
import Image from "next/image"
import styles from "./home.module.css"

export default function Home() {
  return (
    <main className="h-full w-full grid grid-cols-3 items-center gap-3">
      <div className="h-full w-full px-12 flex flex-col justify-center gap-3 relative z-10">
        <h1 className="title max-w-[10ch] text-black">
          {es.home.title}
        </h1>
        <p className="text-black">
          {es.home.description}
        </p>
        <button className="w-fit btn-primary">
          {es.home.primaryButton}
        </button>
      </div>
      <section className={`${styles.heroImage} h-full w-full relative col-span-2`}>
        <Image
          src="/images/home.PNG"
          fill
          alt="Picture of us"
          className="object-cover heroImage"
          priority
          sizes="70vw"
        />
      </section>
    </main>
  )
}