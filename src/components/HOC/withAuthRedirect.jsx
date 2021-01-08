import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={"/auth"} />;
        return <Component {...props} />;
    };

    return connect(mapStateToProps)(RedirectComponent);
};
