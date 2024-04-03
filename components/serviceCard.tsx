import Image from 'next/image'


export default function ServiceCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/Lenna_(test_image).png"
          alt="Shoes"
          width={512}
          height={512}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
