import React,{Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {getUsers} from '../actions/users'
import     {getPosts}       from '../actions/posts'
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle,Container, Row, Col,NavLink } from 'reactstrap';

    const User=({user,posts})=>{
return (
    <Col  xs="3">
    <Card>
    
      <CardBody>
        <CardTitle>{user.name}</CardTitle>
        <CardSubtitle>Posts</CardSubtitle>
      
        
    {posts.map(post=>{
        return(<NavLink key={post.id} href={`/posts/${post.id}`}>{post.title}</NavLink>)
    })}
      </CardBody>
    </Card>
    </Col>
)
    };
class Users extends Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.getPosts();
    }
displayUsers=()=>{
    if(this.props.users){
        return this.props.users.map(user=>{
   
            return(<User user={user} posts={this.props.posts.filter(post=>post.userId===user.id)} key={user.id}/>)
        })
    }
    return null;
}
    render(){
  
return (
    <Container>
        <Row>
{this.displayUsers()}
    </Row>
  </Container>
)
    }
}
const mapStateToProps = state => {
    return {
     users:state.users,
     posts:state.posts
    }
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUsers,getPosts}, dispatch)
  }    
  export default connect(mapStateToProps,mapDispatchToProps )(Users);
