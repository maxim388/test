import ava from "../../img/ava.jpg";
import { Card } from "antd";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import CardsAPI from "../CardsAPI/CardsAPI";
import { withAuthRedirect } from "../HOC/withAuthRedirect";

const User = (props) => {
    let key = props.match.params.key;
    let user = [];
    for (let i = 0; i < props.users.length; i++) {
        if (key === props.users[i]["fullName"]) {
            user = [
                ["Fullname", props.users[i]["fullName"]],
                ["Email", props.users[i]["email"]],
                ["Age", props.users[i]["age"]],
                ["About myself", props.users[i]["aboutMeSelf"]],
            ];
        }
    }

    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="user" src={ava} />}
            >
                {user.map((k) => {
                    if (!k[1]) return;
                    return (
                        <p key={k[0].toString()}>
                            {k[0]}: {k[1]}
                        </p>
                    );
                })}
            </Card>
            <hr />
            <CardsAPI />
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        users: state.subUsers.users,
    };
};

export default compose(
    connect(mapStateToProps),
    withRouter,
    withAuthRedirect
)(User);
