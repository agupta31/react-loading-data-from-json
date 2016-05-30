var React=require("react");

var List=React.createClass({
     render:function(){
         var listItems=this.props.items.map(function(item){
               return (
                   <li key={item.name}>
                   <h1>{item.name}</h1>
                   <h2>{item.age}</h2>
                   </li>
                   )
         });
          return(
             <ul>
               {listItems}
              </ul>
           )
     }
});
module.exports=List;