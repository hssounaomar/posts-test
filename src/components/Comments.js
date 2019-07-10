import React,{Component} from 'react';

import { Alert, Container} from 'reactstrap';


class Comments extends Component {

   displayComments=()=>{
       if(this.props.comments){
           
return this.props.comments.map(comment=>{
   
   return(    <Alert color="success" key={comment.id}>
   <h4 className="alert-heading">{comment.email}</h4>
   <p>
    {comment.body}
   </p>
   
 </Alert>)
})
       }
       return null;
   }

    render(){
  
return (
    <Container>
      {this.displayComments()}
  </Container>
)
    }
}
  
  export default Comments;
