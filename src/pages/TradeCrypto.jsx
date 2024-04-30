import BalanceCard from "../components/BalanceCard"
import CryptoCard from "../components/CryptoCard"
import { useEffect, useState, useContext } from "react"
import { AppContext } from "../utils/Context"

export default function TradeCrypto() {
    const [btc, setBtc] = useState(67500)
    const [eth, setEth] = useState(3475)
    const [usdc, setUsdc] = useState(0.9985)
    const [operation, setOperation] = useState("buy")
    const [coin, setCoin] = useState("btc")
    const [value, setValue] = useState(0)
    const [rate, setRate] = useState(0)
    const [total, setTotal] = useState(0)

    const { handleCryptoBuy, handleCryptoSell, balanceBTC, balanceETH, balanceUSDC, balance } = useContext(AppContext)

    useEffect(() => {
        if (coin === "btc") {
            setRate(btc)
        } else if (coin === "eth") {
            setRate(eth)
        } else if (coin === "usdc") {
            setRate(usdc)
        }
    }, [coin, rate])

    useEffect(() => {
        setTotal(parseFloat(value*rate + value*rate*0.01))
    }, [value, rate])

    const handleConfirmationClick = () => {
        console.log("Confirming transaction")
        if (operation === "buy") {
            console.log("Buying")
            if (total > balance) {
                alert("Insufficient funds")
                return
            }
            handleCryptoBuy(coin, rate, parseFloat(value*rate*0.01), value, total)
        }
        if (operation === "sell") {
            console.log("Selling")
            if (value > balanceBTC && coin === "btc" || value > balanceETH && coin === "eth" || value > balanceUSDC && coin === "usdc") {
                alert("Insufficient funds")
                return
            }
            handleCryptoSell(coin, rate, parseFloat(value*rate*0.01), value, total)
        }
    }

    return (
        <div className="row align-items-center justify-content-between">
            <div className="col-sm-12 col-md-4 bg-light mx-3">
                <div className="bg-secondary border flex-wrap p-2">
                    <div className="d-flex flex-wrap gap-1 mx-3 justify-content-start">
                        <CryptoCard 
                        name="Bitcoin" 
                        value={btc} 
                        image={"https://cryptologos.cc/logos/bitcoin-btc-logo.png"}
                        address={"1yHvvVRw5VxMYJPgMKhrmHq8RAnV8nQZ7l"}
                        />
                        <CryptoCard
                        name="Ethereum"
                        value={eth}
                        image={"https://cryptologos.cc/logos/ethereum-eth-logo.png"}
                        address={"1wz2oGZm1SrxBuykZYcacBFbCQAq5ddL9R"}
                        />
                        <CryptoCard
                        name="USDC"
                        value={usdc}
                        image={"https://cryptologos.cc/logos/usd-coin-usdc-logo.png"}
                        address={"1htJGMR6QPe1hqzNIyw1PNtGknvVBJwpRk"}
                        />
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-3">
                <div className="d-flex flex-column justify-content-center py-1 px-3 my-4 gap-1 bg-secondary text-white border">
                    <h4>Buy / Sell Crypto</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            <p className="m-0">Operation:</p>
                            <select value={operation} onChange={(e) => {setOperation(e.target.value)}} className="mb-2">
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </select>
                        </div>
                        <div>
                            <p className="m-0">Coin: </p>
                            <select value={coin} className="mb-2" onChange={(e) => setCoin(e.target.value)}>
                                <option value="btc">Bitcoin</option>
                                <option value="eth">Ethereum</option>
                                <option value="usdc">USDC</option>
                            </select>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="m-0">Value:</p>
                                <input className="mb-2 " type="text" style={{ width: '70px' }} onChange={(e) => {setValue(e.target.value)}}/>
                            </div>
                            <div>
                                <p className="m-0">Rate:</p>
                                <input className="mb-2" type="text" value={rate} style={{ width: '60px' }} disabled/>
                            </div>
                            <div>
                                <p className="m-0">Fee:</p>
                                <input className="mb-2" type="text" value={parseFloat(value*rate*0.01)} style={{ width: '70px' }} disabled/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-end">
                            <div>
                                <p className="m-0">Total:</p>
                                <input className="mb-2" type="text" value={total}  style={{ width: '100px' }} disabled/>
                            </div>
                            <button className="btn btn-success p-1 my-2" style={{ height: 'auto' }} onClick={handleConfirmationClick}>Confirm</button>
                        </div>
                    </div>
                    </div>
                </div>
        
            <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                <BalanceCard />
            </div>
        </div>
    )
}