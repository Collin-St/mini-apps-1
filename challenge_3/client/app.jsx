// import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      fieldValues: [
        {
          name: null,
          email: null,
          password: null },
        {
          address: null,
          city: null,
          state: null,
          zipcode: null,
          phone: null },
        {
          card: null,
          expiry: null,
          cvv: null,
          billingZipcode: null
        }]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  renderSwitch(state) {
    switch(state.step) {
      case 0:
        return <Homepage btn={this.handleClick}/>
      case 1:
        return <Creation btn={this.handleClick}/>
      case 2:
        return <Shipping btn={this.handleClick}/>
      case 3:
        return <Billing btn={this.handleClick}/>
      case 4:
        return <Confirmation btn={this.handleClick}/>
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(state => {
      let newState = state.step + 1;
      return {step: newState};
    })
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
      <button onClick={props.btn}>Begin Checkout</button>
    </div>
  )
}

const Creation = (props) => {
  return (
    <form onSubmit={props.btn}>
      <label> name:
        <input type="text" />
      </label>
      <br />
      <label> email:
        <input type="email" />
      </label>
      <br />
      <label> password:
        <input type="password" />
      </label>
      <br />
      <button>Continue to Shipping</button>
    </form>
  )
}

const Shipping = (props) => {
  return (
    <form onSubmit={props.btn}>
      <label> address:
        <input type="text" />
      </label>
      <br />
      <label> city:
        <input type="text" />
      </label>
      <br />
      <label> state:
        <input type="text" />
      </label>
      <br />
      <label> zipcode:
        <input type="text" />
      </label>
      <br />
      <label> phone:
        <input type="text" />
      </label>
      <br />
      <button >Continue to Billing</button>
    </form>
  )
}

const Billing = (props) => {
  return (
    <form onSubmit={props.btn}>
      <label> card #:
        <input />
      </label>
      <br />
      <label> expiry date:
        <input />
      </label>
      <br />
      <label> CVV:
        <input />
      </label>
      <br />
      <label> zipcode:
        <input />
      </label>
      <br />
      <button>Continue to Confirmation</button>
    </form>
  )
}

const Confirmation = (props) => {
  return (
  <div>
    <span></span>
    <button>Complete Purchase </button>
  </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('app')
);

