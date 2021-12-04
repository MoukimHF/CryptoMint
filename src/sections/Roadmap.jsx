import gif from "../images/baby.gif";
import { Link } from "react-scroll";

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="px-5 lg:px-16 xl:px-24 2xl:px-40 py-10 mt-10"
    >
      <h1 className="text-5xl md:text-[80px] text-[#e13c33] text-center font-semibold">
        ROADMAP
      </h1>
      <div className="mx-5 md:mx-24 lg:mx-32">
        <div className="grid grid-cols-2 gap-5 md:gap-10 mt-10">
          <div>
            <h1 className="text-2xl md:text-5xl text-[#e13c33]">10 %</h1>
          </div>
          <div>
            <h1 className="text-white font-semibold md:text-lg">
              AIRDROP CRYPTO CLONES
            </h1>
            <p className="text-white text-xs md:text-base mt-1">
              We <span className="font-semibold">airdrop 15 Crypto Clone</span>{" "}
              randomly for owners of the first 1000 tokens.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-10 mt-10">
          <div>
            <h1 className="text-2xl md:text-5xl text-[#e13c33]">50 %</h1>
          </div>
          <div>
            <h1 className="text-white font-semibold md:text-lg">
              TREASURY SET UP
            </h1>
            <p className="text-white text-xs md:text-base mt-1">
              <span className="font-semibold">50 ETH</span> from primary sales
              will be placed in the treasury and 100% of secondary sales will
              flow into treasury. We purchase our first{" "}
              <span className="font-semibold">
                Bored Ape Yacht Club and CloneX
              </span>{" "}
              NFTs and place them in the DAO vault.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-10 mt-10">
          <div>
            <h1 className="text-2xl md:text-5xl text-[#e13c33]">100 %</h1>
          </div>
          <div>
            <h1 className="text-white font-semibold md:text-lg">
              CRYPTOCLONE DAO AND $CLONE
            </h1>
            <p className="text-white text-xs md:text-base mt-1">
              We’ll set up the Crypto Clones{" "}
              <span className="font-semibold">DAO</span> to fully leverage the
              power of our community. Start of staking,{" "}
              <span className="font-semibold">$CLONE token</span> release and
              board of director setup.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-10 mt-10">
          <div>
            <h1 className="text-2xl md:text-5xl text-[#e13c33]">
              CRYPTO CLONES 2.0
            </h1>
          </div>
          <div>
            <h1 className="text-white font-semibold md:text-lg">
              BREEDING AND FUTURE UTILITY
            </h1>
            <p className="text-white text-xs md:text-base mt-1">
              Crypto Clone holders gain access to breeding using $CLONE tokens.
              More utility and ability to using the $CLONE token to unfold in
              the future.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="navbar" smooth={true} duration={1000}>
            <button className="bg-[#e13c33] text-white font-semibold px-5 py-3 md:text-xl rounded-lg transition duration-700 ease-in-out transform hover:scale-105">
              Mint
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 md:mt-32">
          <div className="self-center">
            <h1 className="text-3xl md:text-5xl text-[#e13c33] font-semibold">
              BREADING
            </h1>
            <p className="text-white text-sm md:text-base mt-3 md:mt-12">
              Second generation of clones is closer than you think… To breed you
              need at least 2 clones.
            </p>
          </div>
          <div>
            <img src={gif} alt="baby alien" className="object-fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
