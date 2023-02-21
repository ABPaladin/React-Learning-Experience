function Property({ propertyName, address, price }) {
    return (
        <div className="property">
            <h1>{propertyName}</h1>
            <p>{address}</p>
            <span>{price}/day</span>
        </div>
    )
}

export default Property;