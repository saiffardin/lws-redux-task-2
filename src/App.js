import './App.css';
import Cart from './Components/Cart/Cart';
import ProductList from './Components/ProductList/ProductList';

function App() {

    return (
        <div className="bg-gray-50 h-full md:h-screen">
            {/* title */}
            <div className="grid place-items-center">
                <h1
                    className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
                >
                    Shopping Cart
                </h1>
            </div>

            {/* main section */}
            <div className="grid grid-cols-12 gap-6">

                {/* left section */}
                <ProductList />

                {/* right section */}
                <Cart />
            </div>
        </div>
    );
}

export default App;
