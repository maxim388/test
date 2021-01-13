import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import AddUsersForm from "./AddUsersForm/AddUsersForm";

const Settings = (props) => {
    let key = props.match.params.key;
    let user = {};
    let i;
    for (i = 0; i < props.users.length; i++) {
        if (key === undefined) {
            user = {
                fullName: "",
                email: "",
                age: "",
                aboutMeSelf: "",
            };
            break;
        }

        if (key === props.users[i]["fullName"]) {
            user = props.users[i];
            break;
        }
    }

    return (
        <div>
            <AddUsersForm
                user={user}
                index={i}
                keySubUsers={props.keySubUsers}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.subUsers.users,
        keySubUsers: state.subUsers.keySubUsers
    };
};
export default compose(
    connect(mapStateToProps),
    withRouter,
    withAuthRedirect
)(Settings);
