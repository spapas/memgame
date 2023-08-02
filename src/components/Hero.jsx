import Slider from './Slider'

export default function Hero({tries, blockNumber, setBlockNumber, win}) {
    return <div className="hero bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h3 className="text-3xl font-bold">Tries: {tries}</h3>
                <Slider blockNumber={blockNumber} setBlockNumber={setBlockNumber} />
                <button onClick={() => setBlockNumber(blockNumber)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Play again</button>
                {win && <h3 className="text-3xl font-bold">You win!</h3>}
            </div>
        </div>
    </div>
}