import React,{Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import     {getPostById}       from '../actions/posts'
import {getUsers} from '../actions/users'
import {getComments} from '../actions/comments'
import { Card, CardText, CardBody,Navbar,NavbarBrand,CardHeader,
Container, Row, Col } from 'reactstrap';
import Comments from './Comments';
    const Post=({post})=>{
return (
    <Col  xs="3">
    <Card>
    
      <CardBody>
        <CardHeader>{post.title}</CardHeader>
     
        <CardText>{post.body}</CardText>
     
      </CardBody>
    </Card>
    </Col>
)
    };
class Posts extends Component {
    componentDidMount() {
        this.props.getPostById(this.props.match.params.id);
        this.props.getComments();
        this.props.getUsers();
    }
  getUser=(id)=>{
if(this.props.users){
    return this.props.users.find(user=>user.id==id);
}
return null;
  }
displayPost=()=>{
    if(this.props.post&&this.props.users.length>0){
      let user=this.getUser(this.props.post.userId);
      return (<div>
           <Navbar color="light" light expand="md">
        <NavbarBrand >Post of {user.name}</NavbarBrand>
       
        </Navbar>
        <br></br>
        <Post post={this.props.post}/>
      </div>
      
      )
    }
    return null;
}
displayComments =()=>{
    if(this.props.post){
        let comments=this.props.comments.filter(comment=>comment.postId==this.props.post.id);
      
        return(<Comments comments={comments} />)
    }
}
    render(){

return (
    <Container>
       
        <Row>
{this.displayPost()}
    </Row>
    <br></br>
    <h1>Comments</h1>
 {this.displayComments()}
  </Container>
)
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
     post:state.post,
     comments:state.comments,
     users:state.users
    }
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({getPostById,getUsers,getComments}, dispatch)
  }    
  export default connect(mapStateToProps,mapDispatchToProps )(Posts);