import React from "react"
import {connect} from "react-redux";
import style from "./Post.module.css"
import Post from "./Post/Post";
import SearchBar from "./SearchBar/SearchBar";
import {setPosts} from "../../redux/app-reducer";

class Posts extends React.Component {
    state = {
        postList: this.props.posts
    };

    filterUsers = (inputValue) => {
        let filteredUsers = [];
        this.props.users.forEach(user =>{
           if (!user.name.toLowerCase().search(inputValue.toLowerCase())) {
               this.props.posts.forEach(post => {
                   if(post.userId === user.id){
                       filteredUsers.push(post);
                   }
               })
           }
        });
        this.setState({postList: [...filteredUsers]});
    }


    render() {
        let postList = [];
        this.state.postList.forEach(post => {
            this.props.users.forEach(user => {
                if (user.id === post.userId) {
                    postList.push(<Post key={post.id} title={post.title} text={post.body} userName={user.name}/>);
                }
            });
        });
        return (
            <>
                <SearchBar filterUsers={this.filterUsers}/>
                <section className={style.posts}>
                    <div className="container">
                        <ul className={style.postsList}>
                            {postList}
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.app.users,
        posts: state.app.posts,
    }
}

export default connect(mapStateToProps, {setPosts})(Posts);