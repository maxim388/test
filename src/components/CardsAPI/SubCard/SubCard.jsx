import { Card } from "antd";
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";

const SubCard = (props) => {
    

    const onClick = () => {
        props.getThunk(props.nameAPI);
    };

    return (
        <NavLink to={`/cards/auxiliary/${props.nameAPI}`} onClick={onClick}>
            <Card
                title={props.nameAPI}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={props.defaultImgUrl} />}
            >
                <p>Description: {props.description}</p>
            </Card>
        </NavLink>
    );
};

export default compose(withRouter)(SubCard);
