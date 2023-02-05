import React from 'react';

const Cart = () => {
    const cartItems = [
        {
            name: "Asus Vivobook X515MA",
            quantity: 0
        },

        {
            name: "Dell E1916HV 18.5 Inch",
            quantity: 0
        },

        {
            name: "Canon Eos 4000D 18MP",
            quantity: 0
        },
    ]

    return (
        <div
            className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
            <div
                className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >

                {
                    cartItems.map((item, indx) => (
                        <div className="flex justify-between border-b-2 mb-2" key={indx}>
                            <div className="text-lg py-2">
                                <p>{item.name}</p>
                            </div>
                            <div className="text-lg py-2">
                                <div
                                    className="flex flex-row space-x-2 w-full items-center rounded-lg"
                                >
                                    <button
                                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M18 12H6"
                                            />
                                        </svg>
                                    </button>
                                    <p>{item.quantity}</p>
                                    <button
                                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* total item */}
                <div
                    className="flex justify-center items-center text-center"
                >
                    <div className="text-xl font-semibold">
                        <p>Total Item</p>
                        <p className="text-5xl">0</p>
                    </div>
                </div>
            </div>

            {/* total price */}
            <div
                className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                <div
                    className="flex justify-center items-center text-center"
                >
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;