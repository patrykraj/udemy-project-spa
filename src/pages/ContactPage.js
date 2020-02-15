import React from "react";
import "../styles/ContactPage.css";

import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
    message: ""
  };

  handleValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleForm = e => {
    e.preventDefault();
    if (this.state.value.length > 5) {
      this.setState({
        value: "",
        message: "Wiadomość została wysłana!"
      });
    } else alert("Wpisz wiadomość (min. 5 znaków)");
  };

  componentDidUpdate() {
    if (this.state.message.length) {
      setTimeout(() => {
        this.setState({
          message: ""
        });
      }, 3000);
    }
  }

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={this.handleForm}>
          <h3>Napisz do nas!</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleValue}
            placeholder="Wpisz wiadomość"
          ></textarea>
          <button>Wyślij</button>
        </form>
        {this.state.message ? <h3>{this.state.message}</h3> : null}
        <Prompt
          when={this.state.value ? true : false}
          message={
            "Masz niewysłany formularz. Czy na pewno chcesz opuścić strone?"
          }
        />
      </div>
    );
  }
}

export default ContactPage;
