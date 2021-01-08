import { compose } from "redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";


const Home = () => {
    return (
<>Home Page</>
    )
}
export default compose(withAuthRedirect)(Home);