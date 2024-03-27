import React from "react";

export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto border bg-slate-50 mt-2">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="name"
            className="border p-3 mb-5 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 mb-5 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 mb-5 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-5 flex-wrap">
            <div className=" flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking spot</span>
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className=" flex flex-wrap gap-4 mt-4 border-gray-400">
            <div className=" flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="12"
                required
                className="border border-slate-500 p-3 rounded-lg"
              />
              <span>Beds</span>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="12"
                required
                className="border border-slate-500 p-3 rounded-lg"
              />
              <span>Bath</span>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min="1"
                max="12"
                required
                className="border border-slate-500 p-3 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs font-semibold">(&#8358; / month)</span>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="number"
                id="discountPrice"
                min="1"
                max="12"
                required
                className="border border-slate-500 p-3 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Discounted Price</p>
                <span className="text-xs font-semibold">(&#8358; / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be cover (max 6)
            </span>
          </p>
          <div className="flex gap-4 ">
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              required
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <button 
            className="p-3 border border-green-300 text-green-700 
            rounded uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 uppercase disabled:opacity-85 mt-2">Create Listing</button>
        </div>
      </form>
    </main>
  );
}
