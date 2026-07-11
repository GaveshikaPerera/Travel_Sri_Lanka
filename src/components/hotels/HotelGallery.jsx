const HotelGallery = ({ gallery }) => {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-4 gap-4 h-[450px]">
      {/* Main Image */}
      <div className="col-span-2">
        <img
          src={gallery[0]}
          alt="Hotel"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right Images */}
      <div className="col-span-2 grid grid-cols-2 gap-4">
        {gallery.slice(1, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hotel ${index + 2}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default HotelGallery;