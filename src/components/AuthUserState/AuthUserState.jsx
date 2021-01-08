import { Button } from "antd";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../store/reducers/authReduser";
import { updateKeySubUsersCreator } from "../../store/reducers/usersReducer";

const AuthUserState = (props) => {
    const logout = () => {
        props.logoutThunk();
        props.updateKeySubUsersCreator();
    };

    return (
        <div>
            {props.isAuth ? (
                <div style={{ color: "white" }}>
                    <Button type="primary" onClick={logout}>
                        Logout
                    </Button>
                </div>
            ) : (
                <Button type="dashed">
                    <NavLink to="/auth">Login</NavLink>
                </Button>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};
export default connect(mapStateToProps, {
    logoutThunk,
    updateKeySubUsersCreator,
})(AuthUserState);
