

export default function Slider({blockNumber, setBlockNumber}) {
    return <div className="slidecontainer">
        <input type="range" min="4" max="64" value={blockNumber} step='2' className="slider" id="myRange" onChange={(e) => setBlockNumber(e.target.value)}/>
        <b>{blockNumber}</b>
    </div>
    
}