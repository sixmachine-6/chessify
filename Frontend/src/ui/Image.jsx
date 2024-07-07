function Image({ src, alt, type }) {
  return (
    <img
      className={
        type
          ? `md:block h-[4rem] rounded-xl mx-4`
          : `hidden md:block h-[40rem] rounded-xl mx-4 lg:h-[48rem]`
      }
      src={src}
      alt={alt}
    ></img>
  );
}

export default Image;
