import type { ISkip } from "../../types";

type IAddToCartProps = {
  selectedSkip: ISkip;
};

const AddToCart: React.FC<IAddToCartProps> = ({ selectedSkip }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700 shadow-inner p-4 transition-transform duration-300 animate-slide-up">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-gray-200">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold text-white">
            £{selectedSkip.price_before_vat}{" "}
            <span className="text-sm font-normal text-gray-300">
              + VAT {selectedSkip.vat}%
            </span>
          </p>

          <p className="text-sm text-gray-300 flex gap-2">
            <span>{selectedSkip.size} yards skip</span>
            <span className="text-gray-500">|</span>
            <span>{selectedSkip.hire_period_days} days hire period</span>
          </p>
        </div>

        <div className="text-xs text-gray-400 flex-1 md:mx-4 md:text-center">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition whitespace-nowrap cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  );
};
export default AddToCart;
