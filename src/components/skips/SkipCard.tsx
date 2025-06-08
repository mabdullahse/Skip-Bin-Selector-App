import React from "react";
import type { ISkip } from "../../types";

interface ICartProps {
  skip: ISkip;
  isSelected?: boolean;
}

const Cart: React.FC<ICartProps> = React.memo(
  ({ skip, isSelected = false }) => {
    console.log("Rendering Cart for skip:", skip.id);
    const {
      size,
      hire_period_days,
      transport_cost,
      per_tonne_cost,
      price_before_vat,
      vat,
      postcode,
      area,
      allowed_on_road,
      allows_heavy_waste,
    } = skip;

    return (
      <div
        data-skip-id={skip.id}
        // onClick={() => onSelect()}
        className={`bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 flex flex-col text-gray-200 relative cursor-pointer
      hover:scale-105 hover:shadow-2xl ${
        isSelected ? "ring-2 ring-blue-500 ring-opacity-50" : ""
      }`}
      >
        {/* Image with badges */}
        <div className="relative">
          <img
            loading="lazy"
            src="skips/2.jpg"
            alt="Skip bin"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            {size} Yards
          </div>
          <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
            {hire_period_days} Days
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              {area ? area : `Postcode: ${postcode}`}
            </h2>

            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div className="bg-gray-700/50 rounded-md p-2 text-center">
                <span className="block uppercase text-gray-400">Transport</span>
                <span className="block font-semibold">£{transport_cost}</span>
              </div>
              <div className="bg-gray-700/50 rounded-md p-2 text-center">
                <span className="block uppercase text-gray-400">Per Tonne</span>
                <span className="block font-semibold">£{per_tonne_cost}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-1">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    allowed_on_road ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                Allowed on Road
              </div>
              <div className="flex items-center gap-1">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    allows_heavy_waste ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                Heavy Waste
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col">
              <span className="block font-semibold text-lg">
                £{price_before_vat}
              </span>
              <span className="text-xs text-gray-400">+ VAT {vat}%</span>
            </div>
            <button
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer transition duration-300 flex items-center justify-center"
              aria-label="Add to Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8m0 0A1 1 0 007 21h10a1 1 0 001-1l-1.6-8m-9.8 0h10"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default Cart;
