import PortfolioItem from "./portfolio-item";

export default function Portfolio() {
  return <section className="my-8 mobile:container mx-auto">
    <h2 className="w-full text-center text-4xl font-semibold text-mw-gray">Portolio</h2>
    <div className="w-full grid grid-cols-2 mobile:flex font-playfair mobile:justify-center my-8 px-4 gap-2 mobile:gap-6 items-center">
      <div className="px-2 py-1 border flex justify-center items-center rounded-full hover:bg-mw-gray hover:text-white">
        <p>
          Graphics Design
        </p>
      </div>
      <div className="px-2 py-1 border flex justify-center items-center rounded-full hover:bg-mw-gray hover:text-white">
        Motion Design
      </div>
      <div className="px-2 py-1 border flex justify-center items-center rounded-full hover:bg-mw-gray hover:text-white">
        Web development
      </div>
      <div className="px-2 py-1 border flex justify-center items-center rounded-full hover:bg-mw-gray hover:text-white">
        Video Editing
      </div>
    </div>
    <div className="w-full p-2 px-4 gap-2 mobile:gap-8 grid grid-cols-8 mobile:grid-cols-4">
      {
        new Array(6).fill(0).map((_e, i) => {
          return <PortfolioItem key={i} />
        })
      }
    </div>
  </section>
}
