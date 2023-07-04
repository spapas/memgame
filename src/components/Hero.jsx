import Slider from './Slider'

export default function Hero({tries, blockNumber, setBlockNumber}) {
    return <div className="hero bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h3 className="text-3xl font-bold">Tries: {tries}</h3>
                <Slider blockNumber={blockNumber} setBlockNumber={setBlockNumber} />
            </div>
        </div>
    </div>
}