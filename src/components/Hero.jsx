
export default function Hero({tries}) {
    return <div className="hero bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h3 className="text-3xl font-bold">memgame {tries}</h3>
            </div>
        </div>
    </div>
}