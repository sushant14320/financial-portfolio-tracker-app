import  React,{Component} from 'react';
import "../../../src/Styles/reset.css";
import "./AddStock.css";
import axios from 'axios';
import Modal from "../Modal/Modal";
import Mystock from '../MY_STOCKS/Mystock';
import firebase from 'firebase';





class AddStock extends Component {
    

    constructor(props){  
                super(props); 
                
                this.state = {
                    isOpen:false,
                    compname:'',
                    compsymb:'',
                    Stockname:[],
                    Stocksymb:'',
                    results:[],
                    counter:'',
                    key:''
                    // list:[]
                    
                    
                    
                };
            //     this.ClickHandler = this.ClickHandler.bind(this);
                this.toggleModal = this.toggleModal.bind(this);
            //   this.getfirebaseData = this.getfirebaseData.bind(this);
              
           }  

    componentDidMount(){
    axios.get(`https://financial-3ce18.firebaseio.com/.json`)
    .then(db =>{
        let index = Object.values(db);
       
    this.setState({                                           
        results:db.data,
        

                })
                console.log(this.state.results);
        
                
        })


    let bind=[];
    bind= this.state.results;

}
        
            toggleModal = (e,key) => {

                let currentN = this.state.results[key];
                let currentNS = this.state.results[key];
                currentN = currentN.name;
                currentNS =currentNS.symbol;
                console.log("keys:"+key)

                this.setState({
                  isOpen: !this.state.isOpen,
                 compname:currentN,
                 compsymb:currentNS,
                 key:key
                    
                             });
                   
                                    }
                    
                                   

                            
    // ClickHandler(e){
       
      
    //      axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${e.target.value}&apikey=531Y4M21KVKRODJ4`)
                   
    //                .then(res => {
    //                    let array  = [{
    //                        Meta_Data: res.data['Meta Data'],
    //                        Time:res.data['Time Series (Daily)']
    //                    }];
    //                    array.map(loaded =>{
    //                        let profit = loaded.Time['2020-05-08']['4. open'];
    //                        this.setState({
    //                         symbol:loaded.Meta_Data['2. Symbol']
    //                        })
                           
                    
    //                        console.log(profit);
    //                        console.log(this.state.symbol);
    //                    })

                       
    //                    //console.log(res.data['Meta Data']);
                       
    //                 })
                   
                   
                
                   
    //             }   
        

                   
           
                
                
    render(){
            let array = this.state.results.map((index,key) =>{
               
                return(
                <div>
                <li key={key}><button className="StockButton" onClick={(e)=>this.toggleModal(e,key,"key")}>{index.symbol}</button></li>
                <span className="Stockname">{index.name}</span>
                <hr/>
                </div>
                )
                
            })

            
    
    
       
        return (
        <div>
            {/* <Mystock
            compname = {this.state.symbol}
            /> */}
                 {/* <table className="MyStocksTable"> 

                        <tr>
                            
                            <th>Stock Symbol</th>
                            <th>Stock name</th>
                            <th>No.of shares</th>
                            <th>Buy price</th>
                            <th>Current price</th>
                            <th>Profit/Loss</th>
                        </tr>

                        <tr>
                            <td>{}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        </tr>


                        </table> */}
            <br></br>
            <hr></hr>
            <div className="AddStocksTitle">
        <ul className="AddFlex">{array}</ul>
            </div>   
       
                
                 <Modal show={this.state.isOpen} onClose={this.toggleModal}
                 name={this.state.compname}
                 symb={this.state.compsymb}
                 number ={this.state.key}
                 />
                    
                 
            
        </div>
        )
    }
}

export default AddStock;