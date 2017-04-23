import React, {Component,PropTypes} from 'react';
import Header from './Views/Header.jsx';
import {Teams, Players} from '../Collections/collections.js'
import {createContainer} from 'meteor/react-meteor-data';


export class AddPlayer extends Component{

  handleSubmit(event){
    event.preventDefault();
    let name = $('#player').val();
    let id = new Meteor.Collection.ObjectID().valueOf();
    let likes = 0;

    Players.insert({
      _id:id,
      teamId:getTeamId(),
      name:name,
      likes:likes,
      date:new Date()
    })
    $('.field').val('');

  }

  displayPlayers(){
    let players = this.props.players;
    if(players == undefined){
      return null;
    }
    return players.map((player)=>(
      <li key={player._id}>
        {player.name}
      </li>
    ))
  }
  render(){
    let teamName = '';
    let team = this.props.team;
    if(!team){
      return null;
    } else {
      teamName = team.team;
    }

    return(
      <div>
        <Header />
        <div className='container'>
          <h3>Add Players for Team {teamName}</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input className="field" id="player" required placeholder="Name of Player"/>

            <button role="submit" className="btn flat green"> Save</button>

        </form>
        <ol>
          {this.displayPlayers()}
        </ol>

      </div>

      </div>
    )
  }
}
export function getTeamId(){
  return FlowRouter.getParam('_id');
}

export default createContainer(()=>{
  return {
    team: Teams.findOne({'_id':getTeamId()}),
    players:Players.find({'teamId':getTeamId()}).fetch(),
  }
}, AddPlayer)
