const Images = ({
  images,
  alt,
  path,
}: {
  images: string[]
  alt: string
  path: string
}) => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-8">
          {images.map((image: string, i: number) => (
            <div
              key={i}
              className="relative flex h-72 items-end justify-end overflow-hidden rounded-md shadow-lg hover:shadow-xl md:h-96 hover:cursor-pointer"
            >
              <div className="absolute inset-0 flex h-full w-full object-cover object-center  transition duration-300 hover:scale-105">
                <img
                  src={`/cake-toppers/${path}/${image}`}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Images
