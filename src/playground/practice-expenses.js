import { createStore, combineReducers } from "redux";
import uuid from "uuid";
const demoExpenses = [];

const addExpense = ({ description = '', amount = 0, createdAt = 0, note = '' }) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        amount,
        createdAt,
        note
    }

})

const removeExpenses = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpenses = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})
const expensesStore = (state = demoExpenses, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter((exp) => {
                return exp.id !== action.id
            })
        case "EDIT_EXPENSE":
            return state.map((up) => {
                if (up.id === action.id) {
                    return {
                        ...up,
                        ...action.updates
                    }
                }
            })
        default:
            return state
    }

}
const filterDemo = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

}

const sortByText = (text = '') => ({
    type: 'SORT_BY_TEXT',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
const filterExpense = (state = filterDemo, action) => {
    switch (action.type) {
        case 'SORT_BY_TEXT':
            return { ...state, text: action.text }
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
        default:
            return state
    }
}
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(combineReducers({
    expenses: expensesStore,
    filters: filterExpense
}))


store.subscribe(() => {
    const state = store.getState();
    const visbilityExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visbilityExpense)
})
const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 400, createdAt: -1000 }))

// store.dispatch(removeExpenses({ id: expenseOne.expense.id }));
// store.dispatch(editExpenses(expenseTwo.expense.id, { amount: 900 }));
store.dispatch(sortByText('of'))
// store.dispatch(sortByText());

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))

const demoState = {
    expenses: [{
        id: 'kjdfsfkkdsfd',
        description: 'rent',
        note: 'this was the final payment of the exam',
        createdAt: 0

    }],

    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined

    }
}