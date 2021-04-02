import react, { Component } from "react"

class ExamReact extends Component{

    constructor(){
        super()
        this.state={
            inputOne: '',
            inputTwo: '',
            answer: '',
            seperatedvalues:[],
            outputValue: [],
            output:[],
            finalanswer: []
        }
        this.handleDivision= this.handleDivision.bind(this)
    }

    handleInputOne = (event) => {
        this.setState({
            inputOne: event.target.value
        })
    }

    handleInputTwo = (event) => {
        this.setState({
            inputTwo: event.target.value
        })
    }

    handleDivision = (event) => {
        event.preventDefault();
        this.setState({
            seperatedvalues: this.state.inputOne.split(',')
        })
        for(let i=0; i<this.state.seperatedvalues.length; i++){
            let first= this.state.seperatedvalues[i];
            let second= this.state.inputTwo;
            let output = first%second
        
            // this.setState({
            //     output: (first%second)
            // })
            // console.log(this.state.output)
            // console.log(first)
            // console.log(second)
            if(output==0){
                // this.setState({
                //     answer: this.state.seperatedvalues[i]
                // })

                let answer= first
                // console.log(answer)

                console.log(this.state.finalanswer)
                this.setState(prevState => ({
                    finalanswer: [...prevState.finalanswer, answer]
                }));

                // for(let j=0;j<this.state.seperatedvalues.length; j++){
                //     this.setState({
                //         finalanswer: answer
                //     })
                // }
            }
            // this.setState({
            //     outputValue: ''
            // })
        }
    }

    render() {
        return(
            <div>
                Division using react
                <form>
                    <label htmlFor="first">First Row</label>
                    <input type="text" id="first" value={this.state.inputOne} onChange={this.handleInputOne} /> <br/>
                    <label htmlFor="second">Second Row</label>
                    <input type="text" id="second" value={this.state.inputTwo} onChange={this.handleInputTwo} /> <br/>
                    <button onClick={this.handleDivision} value={this.state.answer}>Divide</button>
                </form>
                {/* {JSON.stringify(this.state.answer)} <br /> */}
                {JSON.stringify(this.state.finalanswer)}
                {/* {JSON.stringify(this.state.seperatedvalues)} */}
            </div>
        )
    }
}

export default ExamReact