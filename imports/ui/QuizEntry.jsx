import React, { Component, Proptypes } from "react";
import Header from "./Views/Header";
import { Teams } from '../imports/api/teams';

export default class QuizEntry extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let team = $("#team").val();
    let scores = 10; //initial score for every team
    let teamCode = $("#code").val();
    let field = $("#field").val();
    let teamId = new Meteor.Collection.ObjectID().valueOf();

    // Teams.insert({
    //   _id: teamId,
    //   team: team,
    //   score: scores,
    //   code: teamCode,
    //   group: group,
    //   date: new Date()
    // });
    console.log('hello')

    $(".field").val("");
    // FlowRouter.go("/admin");
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container center">
          <ul className="tabs">
            <li className="tab">
              <a href="#teams" className="active">
                Add Team
              </a>
            </li>
          </ul>
          <div id="teams" className="col s12">
            <form onSubmit={this.handleSubmit}>
              <input
                className="field"
                id="team"
                required
                placeholder="Name of Team"
              />
              <input
                className="field"
                id="code"
                required
                placeholder="Team Code"
              />
              <input
                className="field"
                id="group"
                required
                placeholder=" Which Ministry "
              />
              <button role="submit" className="btn flat green">
                {" "}
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}