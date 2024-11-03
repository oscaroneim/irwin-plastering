import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main>
      <section className="mb-8">
        <Carousel />
      </section>
      <section>
        <div className="h-[600px] w-full bg-darkblue mt-8"></div>
      </section>
      <section>
        <div className="h-[600px] w-full bg-lightblue mt-8"></div>
      </section>
    </main>
  );
}
