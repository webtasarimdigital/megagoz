import Image from "next/image";
import { Search } from "lucide-react";

export default function GalleryPage() {
  const images = [
    { src: "/images/megagoz.webp", alt: "Klinik Dış Görünüm", className: "md:col-span-2 md:row-span-2" },
    { src: "/images/slide1.png", alt: "Modern Ameliyathane", className: "md:col-span-1 md:row-span-1" },
    { src: "/images/megagoz-katarakt-tedavisi.webp", alt: "Muayene Odası", className: "md:col-span-1 md:row-span-1" },
    { src: "/images/slide2.png", alt: "Lazer Teknolojisi", className: "md:col-span-1 md:row-span-2" },
    { src: "/images/megagoz-goz-norolojisi.webp", alt: "Hasta Bekleme Salonu", className: "md:col-span-1 md:row-span-1" },
    { src: "/images/megagoz-kontak-lens.webp", alt: "Optik Ölçüm Odası", className: "md:col-span-1 md:row-span-1" },
    { src: "/images/slide3.png", alt: "Çocuk Göz Sağlığı", className: "md:col-span-2 md:row-span-1" },
    { src: "/images/slide4.png", alt: "Dinlenme Alanı", className: "md:col-span-1 md:row-span-1" }
  ];

  return (
    <div className="min-h-screen bg-white pb-24 pt-32 md:pt-40">
      
      {/* Header */}
      <div className="container mx-auto px-6 max-w-[1300px] mb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">MEGAGÖZ BAKIŞI</span>
          <div className="h-[2px] w-12 bg-[#ecbb3f]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#162f5d] tracking-tight mb-6">
          MegaGöz Galeri
        </h1>
        <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
          Modern kliniğimiz, gelişmiş medikal donanımlarımız ve sizi özel hissettirecek konforlu alanlarımıza yakından bakın.
        </p>
      </div>

      {/* Masonry / Grid Gallery */}
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${img.className || ""}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#162f5d]/0 group-hover:bg-[#162f5d]/40 transition-colors duration-500" />
              
              {/* Hover Overlay Title */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-12 h-12 bg-[#ecbb3f] rounded-full flex items-center justify-center text-[#162f5d] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Search size={20} className="font-bold" />
                 </div>
                 <h3 className="text-white font-bold text-xl drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                   {img.alt}
                 </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
