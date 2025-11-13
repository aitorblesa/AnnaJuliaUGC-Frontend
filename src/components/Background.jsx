export const Background = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 object-cover object-top">
      <img
        src="/background_mesh.svg"
        className="h-[calc(100dvh-150px)] w-full object-cover object-top md:h-[calc(100dvh-350px)] lg:h-screen"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 50% 100%, 0 90%)',
        }}
      />
    </div>
  );
};
