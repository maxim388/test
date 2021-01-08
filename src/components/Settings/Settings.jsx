import { compose } from "redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import AddUsersForm from "./AddUsersForm/AddUsersForm";
import { connect } from "react-redux";
import {
    addUsersCreator,
    updateKeySubUsersThunk,
} from "../../store/reducers/usersReducer";
import { Route, withRouter } from "react-router-dom";
import UpdateUsersForm from "./UpdateUsersForm/UpdateUsersForm";

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
                addUsersCreator={props.addUsersCreator}
                updateKeySubUsersThunk={props.updateKeySubUsersThunk}
                user={user}
                push={props.history.push}
            />

            {/* <Route
                exact
                path="/settings/"
                render={() => (
                    <AddUsersForm
                        addUsersCreator={props.addUsersCreator}
                        updateKeySubUsersThunk={props.updateKeySubUsersThunk}
                        user={user}
                        push={props.history.push}
                    />
                )}
            />
            <Route
                exact
                path="/settings/:key"
                render={() => (
                    <UpdateUsersForm
                        addUsersCreator={props.addUsersCreator}
                        updateKeySubUsersThunk={props.updateKeySubUsersThunk}
                        user={user}
                        push={props.history.push}
                    />
                )}
            /> */}

            {/* <AddUsersForm
                addUsersCreator={props.addUsersCreator}
                updateKeySubUsersThunk={props.updateKeySubUsersThunk}
                            />
            <UpdateUsersForm
                
                user={props.users[key]}
                push={props.history.push}
            /> */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.subUsers.users,
    };
};
export default compose(
    connect(mapStateToProps, { addUsersCreator, updateKeySubUsersThunk }),
    withRouter,
    withAuthRedirect
)(Settings);
