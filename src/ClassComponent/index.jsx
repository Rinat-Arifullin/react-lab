import React from 'react';

export class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            count: 0,
            hasError: false,
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps, nextState, nextContext);
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    onClickButton = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
        console.log('componentDidCatch', error, errorInfo);
    }

    render() {
        const {name} = this.props;
        const {count, hasError} = this.state;
        return (
            <div>
                <h1>Hello {name}</h1>
                <button onClick={this.onClickButton}>{count}</button>
                {hasError ? <h1>error</h1>: this.props.children}
            </div>
        )
    }
}