import React from 'react';

class PlayersTable extends React.Component{

    state = {
        players:{},
        placeholder : 'Click a player for more info',
    };
    
    handleClick = (tr) => {
        let playerID = tr.target.id;
        fetch('http://localhost:3003/players/' + playerID)
        .then((response) => {
            return response.json();
        }).then((jsonData) => { 
            let keys = Object.keys(jsonData[0])
            let vals = Object.values(jsonData[0])            
            this.setState({ selectedPlayerKeys: keys, selectedPlayerVals: vals});
        })
    }

    componentDidMount(){
        fetch('http://localhost:3003/players/')
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            var sortByGoals = jsonData.slice(0);
            sortByGoals.sort(function(a,b) {
                return b.goal - a.goal;
            });

            this.setState({ players: sortByGoals });
        })
    } 

    render(){
    let players = this.state.players;   
    let selectedPlayerKeys = this.state.selectedPlayerKeys
    let selectedPlayerVals = this.state.selectedPlayerVals
    let placeholder = this.state.placeholder
    return (
        <div className="PlayersTable">
                
             <table>
               <tbody>
                <tr>   
                    <td>
                        <table>
                            <tbody>   
                            {
                                players && players.length > 0 ? 
                                    (                    
                                                Object.values(players).map(player => {
                                                    return (
                                                        <tr key={player.playerId} onClick={this.handleClick}>
                                                            <td id={player.playerId}>{player.name}</td>
                                                            <td id={player.playerId}>{player.goal}</td>                                       
                                                        </tr>
                                                    )
                                                })                           
                                    ) : null
                            }
                            </tbody>
                        </table> 
                    </td>
                    </tr>
                    <tr>
                    <td className="tdStyle">
                        <table>
                            <tbody>
                                <tr> 
                                    <td>
                                        {selectedPlayerKeys ? (
                                            selectedPlayerKeys.map(key => {
                                                return (<p key={key}>{key}</p>)
                                            })
                                        ) : placeholder}                
                                    </td>    
                                    <td>
                                        {selectedPlayerKeys ? (
                                            selectedPlayerVals.map((val, i )=> {
                                                return (<p key={i}>{val}</p>)
                                            })
                                        ) : null}                
                                    </td>
                                </tr> 
                            </tbody>
                        </table> 
                    </td>            
                    </tr>
               </tbody>
            </table>
        </div>
    );
    }
}

export default PlayersTable;
