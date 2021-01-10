import { Card } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import ava from "../../img/ava.jpg";

const User = (props) => {
    let key = props.match.params.key;
    let user = props.users[key];
    let nameField = {
        fullName: "Fullname",
        email: "Email",
        age: "Age",
        aboutMeSelf: "About myself",
    };
    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={ava} />}
            >
                {Object.keys(user).map((k) => {
                    if (!user[k]) return;
                    return (
                        <p key={k.toString()}>
                            {nameField[k]}: {user[k]}
                        </p>
                    );
                })}
            </Card>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        users: state.subUsers.users,
    };
};

export default compose(connect(mapStateToProps), withRouter)(User);
