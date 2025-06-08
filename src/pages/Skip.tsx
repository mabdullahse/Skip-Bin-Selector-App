import { useMemo, useState } from "react";

import SkipCard from "../components/skips/SkipCard";
import Loader from "../components/skips/Loader";
import ErrorAlert from "../components/skips/ErrorAlert";
import useSkips from "../hooks/useSkips";
import AddToCart from "../components/skips/AddToCart";

function Skip() {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLDivElement>(
      "[data-skip-id]"
    );
    if (card) {
      const id = parseInt(card.getAttribute("data-skip-id")!, 10);
      setSelectedCardId((prev) => (prev === id ? null : id));
    }
  };

  const { skips, loading, error } = useSkips();

  const selectedSkip = useMemo(
    () => skips.find((skip) => skip.id === selectedCardId),
    [selectedCardId, skips]
  );

  return (
    <>
      {/* Heading centered */}
      <div className="text-center  max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-2">
          Choose Your Skip Size
        </h1>
        <p className="text-gray-400 text-lg">
          Select the skip size that best suits your needs
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorAlert message={error} onRetry={() => window.location.reload()} />
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 mb-20 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          onClick={handleCardClick}
        >
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedCardId === skip.id}
            />
          ))}
        </div>
      )}
      {/* Checkout panel */}
      {selectedSkip && <AddToCart selectedSkip={selectedSkip} />}
    </>
  );
}

export default Skip;
