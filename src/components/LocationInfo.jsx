

const LocationInfo = ({ location }) => {
    return (
        <div className="portada">
        <article>
            <h2>{location?.name}</h2>
            <ul>
                <li><span>Type:</span><span>{location?.type}</span></li>
                <li><span>Dimension:</span><span>{location?.dimension || 'unknown' }</span></li>
                <li><span>Population</span><span>{location?.residents.length}</span></li>
            </ul>
        </article>
        </div>
    )
}

export default LocationInfo