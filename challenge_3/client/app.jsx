// import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    }
    // let fieldValues = [
    //   {
    //     name: null,
    //     email: null,
    //     password: null },
    //   {
    //     address: null,
    //     city: null,
    //     state: null,
    //     zipcode: null,
    //     phone: null },
    //   {
    //     card: null,
    //     expiry: null,
    //     cvv: null,
    //     zipcode: null
    //   }];
  }

  renderSwitch(state) {
    switch(state.step) {
      case 0:
        return <Homepage />
      case 1:
        return <Creation />
      case 2:
        return <Shipping />
      case 3:
        return <Billing />
      case 4:
        return <Confirmation />
    }
  }
  render() {
    return (
      <div>
        {this.renderSwitch(this.state)}
      </div>
    )
  }
};

const Homepage = (props) => {
  return (
    <div>
      <h1>hello!!</h1>
      <button>Checkout</button>
    </div>
  )
}

const Creation = (props) => {
  return (
    <form>
      <label> name
        <input></input>
      </label>
      <br />
      <label> email
        <input></input>
      </label>
      <br />
      <label> password
        <input></input>
      </label>
    </form>
  )
}

const Shipping = (props) => {
  return (
    <form>
      <label> address
        <input></input>
      </label>
      <br />
      <label> city
        <input></input>
      </label>
      <br />
      <label> state
        <input></input>
      </label>
      <br />
      <label> zipcode
        <input></input>
      </label>
      <br />
      <label> phone
        <input></input>
      </label>
    </form>
  )
}

const Billing = (props) => {
  return (
    <form>
      <label> card #
        <input></input>
      </label>
      <br />
      <label> expiry date
        <input></input>
      </label>
      <br />
      <label> CVV
        <input></input>
      </label>
      <br />
      <label> zipcode
        <input></input>
      </label>
    </form>
  )
}

const Confirmation = (props) => {
  return (
  <div>
    <span></span>
    <button>Complete Purchase</button>
  </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('app')
);

