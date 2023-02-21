import Product from './Product'

function Catalog({products, add2Cart}) {
    return(
        <div className='catalog'>
            <h1>Catalog</h1>
            <div className='products'>
            {
                products.map(product => <Product key={product.id} product={product} add2Cart={add2Cart} />)
            }
            </div>
        </div>
    )
};

export default Catalog;