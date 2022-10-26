import Counter from "./component/counter";
import PostList from "./component/postList";
import Loading from "./component/loading";

function App() {
    return (
        <div>
            <Loading/>

            ------------------------------
            <Counter/>
            -------------------------------
            <PostList/>

        </div>
    );
}

export default App;
