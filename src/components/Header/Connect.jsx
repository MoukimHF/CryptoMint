import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import React, { useEffect, useState } from "react";

// const truncate = (input, len) =>
//   input.length > len ? `${input.substring(0, len)}...` : input;

const Connect = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    OWNER_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    
    COST1: 0,
    COST2: 0,
    COST3: 0,
    COST4: 0,

    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let WalletAddress = blockchain.account;
    WalletAddress = WalletAddress.toUpperCase();

    let TheOwnerAddress = CONFIG.OWNER_ADDRESS;
    TheOwnerAddress = TheOwnerAddress.toUpperCase();

    if (WalletAddress===TheOwnerAddress) {
      CONFIG.WEI_COST=0;

    } 
    else if 
    (data.totalSupply > 50 && data.totalSupply < 200 ) 
        CONFIG.WEI_COST=CONFIG.COST1;
        else if 
    (data.totalSupply > 200 && data.totalSupply < 10000 ) 
        CONFIG.WEI_COST=CONFIG.COST2;


    let cost = CONFIG.WEI_COST;
  
    // let cost1 = CONFIG.COST1;
    // let cost2 = CONFIG.COST2;
    // let cost3 = CONFIG.COST3;
    // let cost4 = CONFIG.COST4;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW,  you’re now a proud  ${CONFIG.NFT_NAME} owners! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account,getData]);

  return (
    <>
      {/* <h1 className="text-white text-xl md:text-4xl mt-10">
        {data.totalSupply} / {CONFIG.MAX_SUPPLY}
      </h1>
      <p className="text-blue-600 mt-4">
        <a target={"_blank"} href={CONFIG.SCAN_LINK}>
          {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
        </a>
      </p> */}
      {blockchain.account === "" || blockchain.smartContract === null ? (
        <button type="button" title={`Connect to the ${CONFIG.NETWORK.NAME} network`}
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
          getData();
        }}
        className="btn btn-md btn-round btn-thin btn-outline btn-primary btn-auto no-change">
        
        
        {blockchain.errorMsg !== "" ? (
            // blockchain.errorMsg
            "change Network"
          ) : "Connect Wallet" }
        </button>
      ) : (
        <>
          <p className="text-white mt-5 font-semibold text-lg">{feedback}</p>

          <div className="flex justify-center items-center mt-5">
            <button
              className="bg-[#e13c33] text-white text-lg rounded-md font-medium p-2 mr-5"
              disabled={claimingNft ? 1 : 0}
              onClick={(e) => {
                e.preventDefault();
                decrementMintAmount();
              }}
            >
              -
            </button>

            <p className="text-white mr-5">{mintAmount}</p>

            <button
              className="bg-[#e13c33] text-white text-lg rounded-md font-medium p-2"
              disabled={claimingNft ? 1 : 0}
              onClick={(e) => {
                e.preventDefault();
                incrementMintAmount();
              }}
            >
              +
            </button>
          </div>

          <button
            className="bg-[#e13c33] text-white font-semibold px-5 py-3 text-lg md:text-xl rounded-lg mt-10 transition duration-700 ease-in-out transform hover:-translate-y-1"
            disabled={claimingNft ? 1 : 0}
            onClick={(e) => {
              e.preventDefault();
              claimNFTs();
              getData();
            }}
          >
            {claimingNft ? "BUSY" : "BUY"}
          </button>
        </>
      )}
    </>
  );
};

export default Connect;
