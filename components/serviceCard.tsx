import Image from "next/image";

export default function ServiceCard() {
  return (
    <div className="card card-compact w-75 h-auto m-4 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/512x256.jpg"
          alt="Shoes"
          width={512}
          height={512}
          priority={true}
        />
      </figure>
      <div className="card-body overflow-hidden min-h-0">
        <h2 className="card-title">Shoes!</h2>
        <p className="text-pretty">
          sdqwqw qqwjh hljdjfhgkdsh asdasdasdasdasdasdasdasfg od asdasdasdasd
          asdasdasdqwqw adsasdzxczxc asdqwqwq
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
