import gif from "../images/giphy.gif";
import graph from "../images/graph.jpeg";
import Connect from "../components/Connect";

const Home = () => {
  return (
    <section className="px-5 lg:px-16 xl:px-24 2xl:px-40 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="self-center">
          <img src={gif} className="object-fill mx-auto lg:mx-0" />
        </div>
        <div className="text-center order-first lg:order-last">
          <h1 className="text-3xl md:text-5xl text-[#e13c33] font-semibold">
            CRYPTO CLONES
          </h1>
          <p className="text-sm font-light text-white mt-10">
            A generative NFT art collectible project of 10.000 unique avatars
            immortalized on the Ethereum blockchain.
          </p>
          <Connect />
          <p className="text-sm font-light text-white mt-10 underline">
            FREE MINT for the first 50 NFTs (FCFS)
          </p>
          <p className="text-sm font-light text-white mt-3">
            <span className="font-semibold">- 0.02 ETH</span> {"—>"} from 51 to
            200
          </p>
          <p className="text-sm font-light text-white mt-2">
            <span className="font-semibold">- 0.035 ETH</span> {"—>"} from 201
            to 10.000
          </p>
          <p className="text-sm font-light text-white mt-5">
            <span className="font-semibold">GAS FEE REFUND*</span> if you buy 10
            NFTs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 md:mt-28">
        <div>
          <h1 className="text-3xl md:text-5xl text-[#e13c33] font-semibold">
            What are CRYPTO CLONES?
          </h1>
          <p className="text-white text-sm md:text-base font-light mt-12">
            Crypto Clones is the first and only DAO that uses 100% of secondary
            sales and a large portion of primary sales to purchase and
            fractionalize CloneX and the rarest bluechip NFTs to be distributed
            to its members.
          </p>
          <p className="text-white text-sm md:text-base font-light mt-5">
            After sell-out, the $CLONE token represents fractional shares of
            CloneX NFTs held in the vault. Each Crypto Clone earns 10 $CLONE per
            day from staking.
          </p>
          <p className="text-white text-sm md:text-base font-light mt-5">
            Each holder will have privileged access to airdrops, and DAO members
            with more than 10 Crypto Clones will automatically be named to the
            DAO board of directors responsible for treasury management and more
            future utility.
          </p>
        </div>
        <div>
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/jHwPTsZQRek`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 md:mt-28">
        <div>
          <h1 className="text-3xl md:text-5xl text-[#e13c33] font-semibold">
            CLONE MINT PRICE
          </h1>
          <p className="text-white font-semibold mt-8 md:mt-12">
            THE EARLY BIRD GETS THE WORM!
          </p>
          <p className="font-light text-white mt-1">
            <span className="font-semibold">FREE MINT</span> for the first 50
            NFTs (FCFS)
          </p>
          <p className="font-light text-white mt-1">
            <span className="font-semibold">- 0.02 ETH</span> {"—>"} from 51 to
            200
          </p>
          <p className="font-light text-white mt-1">
            <span className="font-semibold">- 0.035 ETH</span> {"—>"} from 201
            to 10.000
          </p>
          <p className="font-light text-white mt-5">
            Get your clone early before price increase!
          </p>
          <p className="font-light text-white text-sm md:text-base mt-5">
            <span className="font-semibold">*GAS FEE REFUND</span> (up to $350)
            if you purchase 10 NFTs. Offer is not valid for NFT minted for free.
            Please complete the form to request gas fee refund.
          </p>
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScOoFZLV4vCQxKEGhzcwUZj-s0RnFtiVTEE9Nid11hQvoopNQ/viewform"
              target="_blank"
            >
              <button className="text-white text-sm md:text-base mt-10 bg-[#e13c33] py-3 px-5 rounded-3xl transition duration-700 ease-in-out transform hover:scale-105">
                GAS FEE REFUND FORM {">"}
              </button>
            </a>
          </div>
        </div>
        <div className="self-center">
          <img src={graph} alt="graph" className="object-fill" />
        </div>
      </div>
    </section>
  );
};

export default Home;
