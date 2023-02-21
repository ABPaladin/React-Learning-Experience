import FilterButtons from "./FilterButtons";
import "../styles/style.scss";

const Main = () => {
    return (
        <main>
            <div className="filters">
                <FilterButtons image="https://cdn-icons-png.flaticon.com/512/620/620689.png" title="OMG!" />
                <FilterButtons image="https://cdn-icons-png.flaticon.com/512/7058/7058253.png" title="National Parks" />
                <FilterButtons image="https://cdn-icons-png.flaticon.com/512/2953/2953562.png" title="Cabins" />
            </div>
        </main>
    );
}

export default Main;