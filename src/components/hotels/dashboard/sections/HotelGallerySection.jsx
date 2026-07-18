import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import GalleryImageCard from "../gallery/GalleryImageCard";
import UploadGalleryModal from "../gallery/UploadGalleryModal";

export default function HotelGallerySection() {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://picsum.photos/400/300?random=1",
      title: "Hotel Front View",
    },
    {
      id: 2,
      url: "https://picsum.photos/400/300?random=2",
      title: "Luxury Room",
    },
    {
      id: 3,
      url: "https://picsum.photos/400/300?random=3",
      title: "Swimming Pool",
    },
    {
      id: 4,
      url: "https://picsum.photos/400/300?random=4",
      title: "Restaurant",
    },
  ]);

  const handleDelete = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleUpload = (newImage) => {
    const image = {
      id: Date.now(),
      url: URL.createObjectURL(newImage.file),
      title: newImage.title,
    };

    setImages((prev) => [...prev, image]);
  };

  return (
    <section
      id="gallery"
      className="bg-[#253745] rounded-2xl border border-[#2F4156] p-8 mb-10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Hotel Gallery
          </h2>

          <p className="text-gray-400 mt-1">
            Upload and manage your hotel photos.
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 bg-[#00C896] hover:bg-[#00b383] px-5 py-3 rounded-xl text-white transition"
        >
          <FaPlus />
          Upload Images
        </button>
      </div>

      {/* Gallery Grid */}
      {images.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-[#4A5C6A] rounded-xl">
          <p className="text-gray-400 text-lg">
            No images uploaded yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryImageCard
              key={image.id}
              image={image}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Upload Modal */}
      <UploadGalleryModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onUpload={handleUpload}
      />
    </section>
  );
}