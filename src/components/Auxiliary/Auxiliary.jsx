import Preloader from "../Preloader/Preloader";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { getAnimalSelector } from "../../store/reducers/selectors/apiSelector";

const Auxiliary = (props) => {
    let keyAPI = props.match.params.api;
    let card = props[keyAPI];

    if (card.isFetching) return <Preloader />;
    return (
        <div>
            <h2>{card.description}</h2>
            <div>
                <img
                    style={{ width: 240 }}
                    alt="example"
                    src={card.result || card.defaultImgUrl}
                />
            </div>
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
        };
    };
    return mapStateToProps;
};

export default compose(
    connect(makeMapStateToProps, null),
    withRouter,
    withAuthRedirect
)(Auxiliary);
