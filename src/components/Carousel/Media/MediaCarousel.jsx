/* eslint-disable react/prop-types */
import { useState } from "react";
import ArrowLeft from "../../ui/icons/ArrowLeft";
import ArrowRight from "../../ui/icons/ArrowRight";
import ImageModal from "../../ImageModal";

export default function MediaCarousel({ mediaList = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState("");

    // if (mediaList.length === 0) {
    //   return (
    //     <div className="relative w-full mb-6">
    //       <div className="relative overflow-hidden rounded shadow">
    //         <img
    //           src="placeholder-600-400.png"
    //           className="w-full object-cover object-top rounded cursor-pointer"
    //           alt=""
    //           onError={(e) => (e.target.src = "placeholder-600-400.png")}
    //         />
    //       </div>
    //     </div>
    //   );
    // }

    const openModal = (src) => {
        setModalSrc(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalSrc("");
    };

    const showPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? mediaList.length - 1 : prev - 1
        );
    };

    const showNext = () => {
        setCurrentIndex((prev) =>
            prev === mediaList.length - 1 ? 0 : prev + 1
        );
    };

    const currentMedia = mediaList[currentIndex];
    const currentMediaUrl =
        import.meta.env.VITE_API_STORAGE_URL + currentMedia.url;

    return (
        mediaList.length > 0 && (
            <div className="relative w-full mb-6 overflow-hidden">
                <div className="relative overflow-hidden rounded shadow">
                    {mediaList[currentIndex].type === "image" ? (
                        <img
                            src={currentMediaUrl}
                            className="w-full object-cover object-center rounded cursor-pointer h-96"
                            alt=""
                            onClick={() => openModal(currentMediaUrl)}
                        />
                    ) : (
                        <video
                            controls
                            src={`http://192.168.1.79:8000/storage/${mediaList[currentIndex].url}`}
                            className="w-full h-[400px] object-cover rounded"
                        />
                    )}
                </div>

                {/* Prev/Next Controls */}
                {mediaList.length > 1 && (
                    <>
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-3 py-2 bg-[var(--red-dark)] rounded-sm opacity-70 hover:opacity-100 text-white cursor-pointer transition-all"
                            onClick={showPrev}
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-2 bg-[var(--red-dark)] rounded-sm opacity-70 hover:opacity-100 text-white cursor-pointer transition-all"
                            onClick={showNext}
                        >
                            <ArrowRight />
                        </button>
                    </>
                )}

                {/* modale immagine ingrandita */}
                {modalOpen && (
                    <ImageModal src={modalSrc} onClose={closeModal} />
                )}
            </div>
        )
    );
}
