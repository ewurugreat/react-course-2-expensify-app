import React from 'react';
import { connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const toDoList = [];
const addItem = (inputValue) => ({
    type: 'ADD_ITEM',
    inputValue
});

const removeAll = () => ({
    type: 'REMOVE_ALL'
})

const removeItem = (it) => ({
    type: 'REMOVE_ITEM',
    it
});

const sortItem = () => ({
    type: 'SORT_ITEM'
})
const toDoListStore = (state = toDoList, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.inputValue];
        case 'REMOVE_ALL':
            return [];
        case 'REMOVE_ITEM':
            return state.filter((it) => it !== action.it);
        case 'SORT_ITEM':
            return state.sort((a, b) => a > b ? 1 : -1)
        default:
            return state
    }
}


export const store = createStore(combineReducers({
    items: toDoListStore
}));


store.subscribe(() => {
    const state = store.getState();

})



class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

    }

    handelAddOption = (inputValue) => {
        if (!inputValue) {
            return 'Please input a valid value';
        } else if (this.props.item.indexOf(inputValue.toLowerCase()) > - 1) {
            return 'This list alredy exist please check'
        } else {
            this.props.dispatch(addItem(inputValue))
        }
    }
    render() {
        const header = 'Indecision App';
        const title = 'put your life in the hands of a computer';

        return (
            <div>
                <Header header={header} title={title} />
                <HandelPick disabled={this.props.item.length === 0} item={this.props.item} />
                <HandelRemoveAll item={this.props} />
                <Action handelAddOption={this.handelAddOption} />
                <HandelSortItem item={this.props} />
                <Options item={this.props.item} dispatch={this.props} />

            </div>

        );
    };
};

const Header = (props) => (
    <div>
        <h1>{props.header}</h1>
        <p>{props.title}</p>
    </div>
);

class Action extends React.Component {
    constructor(props) {
        super(props)
    };
    state = {
        error: undefined
    }

    render() {

        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const inputValue = e.target.children[0].value.trim();
                    const hadels = this.props.handelAddOption(inputValue.toLowerCase());
                    this.setState(() => ({ error: hadels }));
                    if (!hadels) {
                        e.target.children[0].value = '';
                    }

                }}>
                    <input type='text' />
                    <button>Submit</button>


                </form>

                <div>  {this.state && this.state.error}</div>
            </div>

        )
    }
}

const HandelRemoveAll = (props) => (
    <div>
        <button onClick={() => {
            props.item.dispatch(removeAll())
        }}>Remove all</button>
    </div>
);

const HandelPick = (props) => (
    <div>
        <button
            disabled={props.disabled}
            onClick={() => {
                const random = Math.floor(Math.random() * props.item.length);
                alert(props.item[random])
            }}
        >
            What should i do
        </button>
    </div>
);

const Options = (props) => (
    <div>
        {
            props.item.map((it, index) => (<Option key={it} optionText={it} dispatch={props.dispatch} number={index + 1} />))
        }
    </div>
)

const Option = (props) => (
    <div>{props.number}. {props.optionText} <button onClick={() => {
        props.dispatch.dispatch(removeItem(props.optionText))
    }}>remove</button>
    </div>
);

class HandelSortItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.item)
        return (
            <div>
                {this.props.item.item.length > 1 && <button onClick={() => {
                    this.props.item.dispatch(sortItem());

                }}>Sort</button>}
            </div>
        )
    }
}

export const demo1 = document.getElementById("demo1");
const mapStateToProps = (state) => ({
    item: state.items
})
export default connect(mapStateToProps)(IndecisionApp);
