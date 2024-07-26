export default function Card() {
  return (
    <div className="card card-compact bg-base-100 w-contain shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm lg:text-base">Shoes!</h2>
        <p className="text-xs lg:text-sm">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-[10px] lg:text-xs">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
