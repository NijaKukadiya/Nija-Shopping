import { Component } from "react";
import {Footer, Header} from "../component/common";
import { connect } from "react-redux"; 

class RootContainer extends Component{
constructor(props,context){
    super(props,context);
}
    render(){      
        return(
            <div>
                <header>
                    
                    <Header />
                    <Footer />
                </header>
            </div>
        );
    }
}
export default RootContainer;