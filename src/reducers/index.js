const initialState = {
    step: 1,
    accounts: [{
            id: 1,
            userName: "16GB RAM SERVER",
            paymentMethod: "serram16",
            currency: '$',
            address: '$1025.50',
            expDate: "12/2020",


        },
        {
            id: 2,
            userName: "32GB RAM SERVER",
            paymentMethod: "serram32",
            address: "$2459.99",
            paymentMethod: "credit card",

            currency: '$',
            expDate: "12/2020"


        },
        {
            id: 3,
            userName: "8GB RAM SERVER",
            paymentMethod: "serram8",
            address: "$100",
            paymentMethod: "credit card",

            currency: '$',
            expDate: "12/2020"
        }
    ],
    paymentFees: {
        serviceFee: null,
        vat: null
    },
    cartItems: [{
            id: 1,
            name: "serram32",
            brand: "32GB RAM SERVER",
            url: "",
            price: 2549.99
        },
        {
            id: 2,
            name: "serram16",
            brand: "16GB RAM SERVER",
            url: "RAM",
            price: 2549.99
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_STEP':
            return ({
                ...state,
                step: action.step
            })

        case 'CREATE_ACCOUNT':
            return ({
                ...state,
                accounts: [
                    ...state.accounts,
                    action.account
                ]
            })

        case 'UPDATE_ACCOUNT':
            let updatedAccounts = state.accounts.map(account =>
                account.id === action.account.id ?
                action.account :
                account
            )
            return ({
                ...state,
                accounts: [
                    ...updatedAccounts
                ]
            })

        case 'DELETE_ACCOUNT':
            return ({
                ...state,
                accounts: [
                    ...state.accounts.filter(account =>
                        account.id !== action.id
                    )
                ]
            })

        case 'UPDATE_FEE':
            return ({
                ...state,
                paymentFees: {
                    ...action.fee
                }
            })

        default:
            return state;
    }
}

export default rootReducer;