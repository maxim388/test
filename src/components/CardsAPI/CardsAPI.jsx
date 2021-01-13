import { Col, Row } from "antd";
import { connect } from "react-redux";
import { compose } from "redux";
import SubCard from "./SubCard/SubCard";
import {
    getRandomCatThunk,
    getDogsThunk,
    getRandomFoxThunk,
} from "../../store/reducers/apiReducer";
import {
    getAnimalSelector
} from "../../store/reducers/selectors/apiSelector";
import { withAuthRedirect } from "../HOC/withAuthRedirect";

const CardsAPI = (props) => {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                {props.keysApi.map((item) => {
                    return (
                        <Col span={8}>
                            <SubCard
                                {...props[item]}
                                getThunk={props[`get${item}Thunk`]}
                            />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

const makeMapStateToProps = () => {
    const getDogsSelect = getAnimalSelector();
    const getRandomFoxSelect = getAnimalSelector();
    const getRandomCatSelect = getAnimalSelector();

    const mapStateToProps = (state) => {
        return {
            Dogs: getDogsSelect(state, "Dogs"),
            RandomFox: getRandomFoxSelect(state, "RandomFox"),
            RandomCat: getRandomCatSelect(state, "RandomCat"),
            keysApi: state.api.keysApi,
        }
    }
    return mapStateToProps;
}

export default compose(
    connect(makeMapStateToProps, {
        getDogsThunk,
        getRandomFoxThunk,
        getRandomCatThunk,
    }),
    withAuthRedirect
)(CardsAPI);

