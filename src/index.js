import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor() {
        super();
        // state
        this.state = {
            nilai1: null,
            nilai2: null,
            nilai3: null,
            operator: null,
            hasil: null,
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const nilai1 = parseInt(this.refs.nilai1.value);
        const nilai2 = parseInt(this.refs.nilai2.value);
        const nilai3 = parseInt(this.refs.nilai3.value);
        const operator = this.refs.operator.value;

        var hasil;
        // eslint-disable-next-line
        switch (operator) 
        {
            case '+':
                hasil = nilai1 + nilai2 + nilai3;
                break;
            case '-':
                hasil = nilai1 - nilai2 - nilai3;
                break;
            case '*':
                hasil = nilai1 * nilai2 * nilai3;
                break;
            case '/':
                hasil = nilai1 / nilai2 / nilai3;
                break;
        }

        this.setState({ nilai1, nilai2, nilai3, operator, hasil});

        this.refs.nilai1.value = null;
        this.refs.nilai2.value = null;
        this.refs.nilai3.value = null;
    }

    renderHasil() {
        const {nilai1, nilai2, nilai3, operator, hasil} = this.state;
        if(this.state.hasil) {
            return (
                <div>
                    <br />
                    <p className="alert alert-success">
                        {nilai1+operator+nilai2+operator+nilai3+'='+hasil}
                    </p>
                </div>
            );
        }
    }

    render() {
        return(
        <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="number" ref="nilai1" className="form-control" />
                <input type="checkbox"></input>
                <br />
                <br />
                <input type="number" ref="nilai2" className="form-control" />
                <input type="checkbox"></input>
                <br />
                <br />
                <input type="number" ref="nilai3" className="form-control" />
                <input type="checkbox"></input>
                <br />
                <br />
                <button ref="operator" value="+">+</button>
                <button ref="operator" value="-">-</button>
                <button ref="operator" value="*">*</button>
                <button ref="operator" value="/">/</button>
                <br />
                <br />
                <tr />
                <button>Hasil</button>
                </form>
                {/* hasil */}
                { this.renderHasil()}
                {}
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
