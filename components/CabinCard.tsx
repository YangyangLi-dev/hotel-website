import Image from "next/image";
import Link from "next/link";

export default function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div>
      <div>
        <Image src={image} fill alt="" />
      </div>
      <div>
        <div>
          <h3>Cabin {name}</h3>
        </div>
        <div>
          <p>For up to {maxCapacity} guests</p>
          <p>
            {discount > 0 ? (
              <>
                <span>${regularPrice - discount}</span>
                <span>${regularPrice}</span>
              </>
            ) : (
              <span>${regularPrice}</span>
            )}
            <span>/ night</span>
          </p>
        </div>

        <div>
            <Link href={`/cabins/${id}`}>Details & Reservation</Link>
        </div>
      </div>
    </div>
  );
}
