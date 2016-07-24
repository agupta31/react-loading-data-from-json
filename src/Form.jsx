var React=require("react");
var List=require("./List");

var Form=React.createClass({
      getInitialState:function(){
          return{
               eventNo:0,
               
          }  
      },
      componentWillMount:function(){
          this.arr=[];
      },
      loadDataFromServer:function(){
          
               $.ajax({
                     url:"src/employee.json",
                     dataType:"json",
                     cache:false,
                     success:function(data){
                         this.arr=data;
                         this.setState({eventNo:this.state.eventNo++});
                     }.bind(this),
                     error:function(xhr,status,err){
                         console.warn(xhr.responseText);
                        console.error("src/employee.json",status,err.toString()); 
                     }.bind(this)
                     
               });
          },
    componentDidMount:function(){
          this.loadDataFromServer();
       },
    
       render:function(){
            return(
                <div>
                     <table className="table table-bordered">
                         <thead>
                          <th>Name</th>
                          <th>Age</th>
                        </thead>
                         <List items={this.arr}/>
                    </table>
                </div>
                
             )
       }
});
module.exports=Form;