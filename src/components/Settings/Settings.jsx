import { compose } from "redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import AddUsersForm from "./AddUsersForm/AddUsersForm";
import { connect } from "react-redux";
import {
    updateUsersCreator,
    updateSubUsersThunk,
} from "../../store/reducers/usersReducer";
import { withRouter } from "react-router-dom";

const Settings = (props) => {
    
    let key = props.match.params.key;
    let user = props.users[key];
    if (user === undefined) {
        user = {
            fullName: "",
            email: "",
            age: "",
            aboutMeSelf: "",
        };
    }

    return (
        <div>
            <AddUsersForm
                updateUsersCreator={props.updateUsersCreator}
                updateSubUsersThunk={props.updateSubUsersThunk}
                user={user}
                push={props.history.push}
                id={key}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.subUsers.users,
    };
};
export default compose(
    connect(mapStateToProps, { updateUsersCreator, updateSubUsersThunk }),
    withRouter,
    withAuthRedirect
)(Settings);
