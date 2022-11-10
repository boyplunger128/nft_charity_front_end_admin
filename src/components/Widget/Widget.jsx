import * as React from "react";
import { Card, Box, CssBaseline, Typography } from "@mui/material";
// import image icon
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import binancecoinSVG from "../../assets/binancecoin.svg";
import litecoinSVG from "../../assets/litecoin.svg";

// import exchange icon
import exchangeIcon from "../../assets/data_transfer.svg";

// import value up icon
import upGrowth from "../../assets/Up.svg";
import downGrowth from "../../assets/No.svg";
// import chart up icon
import upChart from "../../assets/Yes.svg";
import downChart from "../../assets/Down.svg";
//react-hook
import { useEffect,useState } from "react";

//getPriceAPI
import { getPrice } from "../../apis/getPrice";
//style css
import "./styles.css";


export default function MyWidget({ type }) {

  let data;
  const [count,setCount]=useState(0);
  const [priceCoin,setPriceCoin]=useState({});

  useEffect(()=>{   
    let symbol;
    switch (type) {
      case "Bitcoin":
        symbol='BTCUSDT';
        break;
      case "Ethereum":
        symbol='ETHUSDT';
        break;
      case "Litecoin":
        symbol='LTCUSDT';
        break;
      case "BinanceCoin":
        symbol='BNBUSDT';
        break;
      default:
        break;
    }  
    const getAPI = async () => {
      const res = await getPrice(symbol);
      setPriceCoin(res);
      
    };
    getAPI();
    setTimeout(()=>{
      setCount(prev=>prev+1);
    },3000);
  },[count]);
  
  switch (type) {
    case "Bitcoin":
      data = {
        title: "Bitcoin",
        coinTitle: "BTC",
        img: bitcoinSVG,
        weirdNumber: priceCoin!=null?parseFloat(priceCoin['lastPrice']).toFixed(2):"NaN",
        percentChange: priceCoin!=null?parseFloat(priceCoin['priceChangePercent']).toFixed(2):"NaN",
        isGrowth: priceCoin!=null?parseFloat(priceCoin['priceChangePercent']).toFixed(2)>0:"NaN",
      };
      break;
    case "Ethereum":
      data = {
        title: "Ethereum",
        coinTitle: "ETH",
        img: ethereumSVG,
        weirdNumber: priceCoin!=null?parseFloat(priceCoin['lastPrice']).toFixed(2):"NaN",
        percentChange: priceCoin!=null?parseFloat(priceCoin['priceChangePercent']).toFixed(2):"NaN",
        isGrowth: priceCoin!=null?parseFloat(priceCoin['priceChangePercent']).toFixed(2)>0:"NaN",
      };
      break;
    case "Litecoin":
      data = {
        title: "Litecoin",
        coinTitle: "LTC",
        img: litecoinSVG,
        weirdNumber: priceCoin!=null?parseFloat(priceCoin['lastPrice']).toFixed(2):"NaN",
        percentChange: priceCoin!=null?parseFloat(priceCoin['priceChangePercent']).toFixed(2):"NaN",
        isGrowth: priceCoin!=null?parseFloat(priceCoin['priceChangePercent']).toFixed(2)>0:"NaN",
      };
      break;
    case "BinanceCoin":
      data = {
        title: "BinanceCoin",
        coinTitle: "BNB",
        img: binancecoinSVG,
        weirdNumber: priceCoin!=null?parseFloat(priceCoin['lastPrice']).toFixed(2):"NaN",
        percentChange: priceCoin!=null?parseFloat(priceCoin['priceChangePercent']).toFixed(2):"NaN",
        isGrowth: priceCoin!=null?parseFloat(priceCoin['priceChangePercent']).toFixed(2)>0:"NaN",
      };
      break;
    default:
      break;
  }
  return (
    <Card sx={{ display: `flex`, padding: `19px` }}>
      <CssBaseline />
      {/* left side */}
      <Box sx={{ display: `flex`, flexDirection: `column` }}>
        <img className="widget_icon" src={data.img} alt="anhcoin" />

        {/* start this is a box to contain money transfer */}
        <Box sx={{ display: `flex` }}>
          <Typography variant="body1" sx={{ fontWeight: `500` }}>
            {data.coinTitle}
          </Typography>
          <img src={exchangeIcon} alt="" />
          <Typography variant="body1" sx={{ fontWeight: `500` }}>
            USD
          </Typography>
        </Box>
        {/* end money transfer */}

        {/* money value */}
        <Typography variant="h6" sx={{ fontWeight: `700` }}>
          {data.weirdNumber}
        </Typography>

        {/* this is a box to contain value up or down */}
        <Box sx={{ display: `flex`, flexDirection: `row` }}>
          {data.isGrowth ? (
            <>
              <img src={upGrowth} alt="data_up" style={{ margin: `0 4px` }} />
              <Typography sx={{ fontSize: `14px`, color: `#00DEA3` }}>
                {data.percentChange}%
              </Typography>
            </>
          ) : (
            <>
              <img src={downGrowth} alt="data_up" style={{ margin: `0 4px` }} />
              <Typography sx={{ fontSize: `14px`, color: `#F23985` }}>
                {data.percentChange}%
              </Typography>
            </>
          )}
        </Box>
      </Box>
      {/* right side */}
      <Box sx={{ display: `flex`, alignItems: `center` }}>
        {data.isGrowth ? (
          <>
            <img src={upChart} alt="chart" />
          </>
        ) : (
          <>
            <img src={downChart} alt="chart" />
          </>
        )}
      </Box>
    </Card>
  );
}
