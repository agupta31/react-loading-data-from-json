var React=require("react");

var List=React.createClass({
     render:function(){
         var listItems=this.props.items.map(function(item){
               return   (
                             <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                             </tr>
                         )
         });
          return(
             <tbody>
               {listItems}
              </tbody>
           )
     }
});
module.exports=List;