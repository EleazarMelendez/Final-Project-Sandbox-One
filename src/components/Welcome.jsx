import Image from "next/image";

export const Welcome = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <p>
        <Image
          src="/images/rigo-baby.jpeg"
          alt="4geeks"
          width={300}
          height={254}
        />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
    </div>
  );
};
