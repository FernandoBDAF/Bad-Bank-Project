import FinancialOperations from "../components/OperationsCard"

export default function TradeCrypto({ btc, etc, usdc }) {
    return (
        <div className="row flex-wrap align-items-center justify-content-between">
            <div className="col-sm-12 col-md-6 bg-primary pb-4">
                <div className="d-flex flex-wrap gap-5 mx-5 mt-4 align-items-center justify-content-between">
                    <div className="d-flex flex-column align-items-start gap-1">
                        <div className="d-flex gap-2 align-content-center justify-items-center">
                            <img style={{"width" : "30px"}} src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" />
                            <h6>Bitcoin</h6>
                        </div>

                        <div className="mt-2">
                            <p className="m-0">Your Address:</p>
                            <input className="mb-2" type="text" value={"1yHvvVRw5VxMYJPgMKhrmHq8RAnV8nQZ7l"} disabled/>
                            <p className="m-0">1BTC: </p>
                            <input type="text" disabled value={68550}/>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-start gap-1">
                        <div className="d-flex gap-2 align-content-center justify-items-center">
                            <img style={{"width" : "30px"}} src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Bitcoin" />
                            <h6>Ethereum</h6>
                        </div>

                        <div className="mt-2">
                            <p className="m-0">Your Address:</p>
                            <input className="mb-2" type="text" value={"1wz2oGZm1SrxBuykZYcacBFbCQAq5ddL9R"} disabled/>
                            <p className="m-0">1 ETH: </p>
                            <input type="text" disabled value={3475}/>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-start gap-1">
                        <div className="d-flex gap-2 align-content-center justify-items-center">
                            <img style={{"width" : "30px"}} src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="Bitcoin" />
                            <h6>USDC</h6>
                        </div>

                        <div className="mt-2">
                            <p className="m-0">Your Address:</p>
                            <input className="mb-2" type="text" value={"1htJGMR6QPe1hqzNIyw1PNtGknvVBJwpRk"} disabled/>
                            <p className="m-0">1 USDC: </p>
                            <input type="text" disabled value={1}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <FinancialOperations />
            </div>
        </div>
    )
}