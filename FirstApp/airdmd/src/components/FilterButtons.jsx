export default function FilterButtons({ image, title }) {
    return (
        <div className="filter-btn">
            <img src={image} />
            <span>{title}</span>
        </div>
    )
}