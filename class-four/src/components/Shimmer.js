const Shimmer = () => {
    const constantArray = new Array(10).fill(0)
    return (
        <section className="shimmer-container">
        {constantArray.map((ele, i) => (
            <section key={i} className="restaurant-card">
                    <div className="restaurant-img-container">
                    </div>
                    <div className="restaurant-info">
                    <h3></h3>
                    <p ></p>
                    <p></p>
                    <span></span>
                    </div>
                </section>
        ))}
        </section>

    )
}

export default Shimmer;

/**
 * 
 *   constantArray.map(ele => (
            <section className="restaurant-card">
                    <div className="restaurant-img-container">
                    </div>
                    <div className="restaurant-info">
                    <h3></h3>
                    <p ></p>
                    <p></p>
                    <span></span>
                    </div>
                </section>
        ))
 */