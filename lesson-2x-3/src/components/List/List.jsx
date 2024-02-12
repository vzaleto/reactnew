import React, { Component } from 'react';
import './style.css';

class List extends Component {

    componentDidMount() {

     const timeBreak =  setInterval(() => {

            let randomList = Math.floor(Math.random() * (this.state.list.length));

            this.setState(

                (actualState) => ({

                    list: [...actualState.list],
                    color: "green",
                    fontWeight: "700",
                    numTrack: randomList
                }),
                () => {

                    this.state.list.map((elem, index) => {

                        if (index === this.state.numTrack) {

                            elem.active = true;
                        }
                    });

                    let keyActive = this.state.list.filter((elem) => elem.active);

                    if (keyActive.length === Math.floor(this.state.list.length / 2)) {

                        this.setState(

                            () => ({
                                borderWidth: '10px'
                            })
                        )
                    }
                    if (keyActive.length === Math.floor(this.state.list.length)) {

                        this.setState(

                            () => ({
                                borderWidth: '20px'
                            })
                        )
                     clearInterval(timeBreak);   

                    }


                }
            )

        }, 2000);
    }

    state = {
        ...this.props,
        color: "#000",
        fontWeight: "400",
        numTrack: 0,
        borderWidth: 0
    }
    render() {

        let { list = [], color, fontWeight, borderWidth } = this.state;

        let understyle = {
            color: color,
            fontWeight: fontWeight
        }
        let borderTable = {
            border: '0px solid black',
            borderWidth: borderWidth
        }

        return list.length ? (

            <ul style={borderTable} >

                {list.map((elem, index) => (

                    <li style={ elem.active ? understyle : null} key={index}  >
                        {elem.type} : {elem.icon}
                    </li>

                ))}

            </ul>
        ) : null;
    }
}

export default List;