import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

import OperaHero from "../assets/opera/opera-hero.png";
import OperaBallroom from "../assets/opera/opera-Ballroom.png";
import WeddingSet from "../assets/opera/wedding-set.png";
import Food from "../assets/opera/wedding-set.png";
import Amenities from "../assets/opera/Amenities.png";

const galleryImages = [
  {
    id: 1,
    image: OperaHero,
    title: "The Opera",
    category: "The Opera",
    size: "large",
  },
  {
    id: 2,
    image: OperaBallroom,
    title: "The Ballroom",
    category: "Venue",
    size: "normal",
  },
  {
    id: 3,
    image: WeddingSet,
    title: "Celebrations",
    category: "Weddings",
    size: "normal",
  },
  {
    id: 4,
    image: Food,
    title: "Culinary Experience",
    category: "Food & Beverage",
    size: "tall",
  },
  {
    id: 5,
    image: Amenities,
    title: "Luxury & Comfort",
    category: "Amenities",
    size: "normal",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section
        id="gallery"
        className="overflow-hidden bg-[#faf7f1] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

          {/* ================= HEADER ================= */}
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-14 lg:flex-row lg:items-end">

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b58a4a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#a17b45]">
                  Our Gallery
                </span>
              </div>

              <h2 className="max-w-[700px] font-serif text-[40px] leading-[1.05] tracking-[-1px] text-[#29251f] sm:text-[50px] md:text-[56px]">
                Moments worth
                <span className="block italic text-[#b58a4a]">
                  remembering.
                </span>
              </h2>
            </div>

            <p className="max-w-[420px] text-[13px] leading-6 text-[#716b62] sm:text-[14px]">
              A glimpse into the spaces, celebrations and experiences
              created at Opulence Resorts.
            </p>
          </div>

          {/* ================= GALLERY ================= */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {galleryImages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                className={`
                  group relative overflow-hidden text-left
                  ${item.size === "large"
                    ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
                    : ""
                  }
                  ${item.size === "tall"
                    ? "lg:row-span-2"
                    : ""
                  }
                `}
              >
                {/* Image */}
                <div
                  className={`
                    relative w-full overflow-hidden
                    ${item.size === "large"
                      ? "h-[430px] sm:h-[520px] lg:h-[600px]"
                      : item.size === "tall"
                        ? "h-[430px] lg:h-[400px]"
                        : "h-[300px] sm:h-[330px] lg:h-[290px]"
                    }
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                    <div className="flex items-end justify-between gap-4">

                      <div>
                        <p className="mb-1 text-[9px] font-medium uppercase tracking-[2.5px] text-[#e2c38f]">
                          {item.category}
                        </p>

                        <h3 className="font-serif text-[22px] text-white sm:text-[25px]">
                          {item.title}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-[#b58a4a] group-hover:bg-[#b58a4a]">
                        <ArrowUpRight
                          size={17}
                          className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>

                    </div>
                  </div>

                  {/* Top Border Detail */}
                  <div className="absolute left-5 right-5 top-5 h-px origin-left scale-x-0 bg-white/60 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </button>
            ))}
          </div>

          {/* ================= BOTTOM TEXT ================= */}
          <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[#ddd5c9] pt-8 sm:flex-row">

            <p className="text-center text-[11px] uppercase tracking-[2px] text-[#8b8175] sm:text-left">
              Weddings • Celebrations • Experiences
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#9b733e] transition-colors hover:text-[#6f512c]"
            >
              Plan Your Celebration

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
          >
            <X size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[85vh] max-w-full object-contain"
            />

            <div className="mt-4 flex items-center justify-between gap-5 text-white">
              <div>
                <p className="text-[9px] uppercase tracking-[2px] text-[#d5b47b]">
                  {selectedImage.category}
                </p>

                <h3 className="mt-1 font-serif text-xl">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;