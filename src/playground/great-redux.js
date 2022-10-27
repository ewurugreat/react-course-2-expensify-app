import { createStore, combineReducers } from "redux";
import uuid from "uuid"


const ExpensesDefault = [];
const addExpense = ({ description = '', amount = 0, note = '', createdAt = 0 }) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

const editExpenses = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})


const expensesStore = (state = ExpensesDefault, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((exp) => {
                if (exp.id === action.id) {
                    return {
                        ...exp,
                        ...action.updates
                    }
                } else {
                    return exp
                }
            })
        default:
            return state
    }
}


const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
});

const sortByDate = () => ({
    type: "SORT_BY_DATE",
})

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})
const setStartDate = (start) => ({
    type: "SET_START_DATE",
    start
})
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})

const filterExpense = (state = filterReducerDefault, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }

        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// Get visible expenses
const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

// Store creation
const store = createStore(combineReducers({
    expenses: expensesStore,
    filters: filterExpense
}))

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpenses)
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300, createdAt: -1000 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpenses(expenseTwo.expense.id, { amount: 1000 }));

// store.dispatch(setTextFilter('co'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999))




const demoState = {
    expenses: [{
        id: "idsiajifdisifis",
        description: "January Rent",
        note: "Tis was the final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", // date or amount
        startDate: undefined,
        endDate: undefined
    }
}