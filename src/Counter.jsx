import CountDispay from './CountDisplay';

function Counter({count, stateCount}) {

    
    return (
        <>
            <div className="container text-center mt-5">
                <div className="card shadow-lg border-0">
                    <div className="card-body">
                        <CountDispay count={count} />
                        <div className="my-5">
                            <button className="btn btn-lg btn-dark ms-2 fw-bold shadow-lg" onClick={ ()  =>  stateCount(count + 1 )  }>
                                Increment
                            </button>
                            <button className="btn btn-lg btn-dark ms-2 fw-bold" 
                            onClick={ () => stateCount(count - 1)} disabled={count <= 0}>
                                Decrement
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Counter