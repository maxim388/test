import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { compose } from "redux";

import {
    getCatsThunk,
    getDogsThunk,
    getFoxsThunk,
} from "../../store/reducers/workWithAPIReducer";
import {
    getDefaultImgUrl,
    getDescription,
    getIsFetching,
    getNameAPI,
    getResult,
} from "../../store/reducers/workWithAPISelector";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import Auxiliary from "../Auxiliary/Auxiliary";
import CardsAPI from "../CardsAPI/CardsAPI";
import User from "../User/User";

const Home = (props) => {
    return (
        <>
            <Route
                exact
                path="/cards"
                render={() => (
                    <CardsAPI
                        Dogs={props.Dogs}
                        getDogsThunk={props.getDogsThunk}
                        RandomFox={props.RandomFox}
                        getFoxsThunk={props.getFoxsThunk}
                        RandomCat={props.RandomCat}
                        getCatsThunk={props.getCatsThunk}
                    />
                )}
            />

            <Route path="/cards/user/:key" render={() => <User />} />

            <Route
                path="/cards/auxiliary/:api"
                render={() => (
                    <Auxiliary
                        Dogs={props.Dogs}
                        RandomFox={props.RandomFox}
                        RandomCat={props.RandomCat}
                    />
                )}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        Dogs: {
            nameAPI: getNameAPI(state, "Dogs"),
            defaultImgUrl: getDefaultImgUrl(state, "Dogs"),
            description: getDescription(state, "Dogs"),
            isFetching: getIsFetching(state, "Dogs"),
            result: getResult(state, "Dogs"),
        },
        RandomFox: {
            nameAPI: getNameAPI(state, "RandomFox"),
            defaultImgUrl: getDefaultImgUrl(state, "RandomFox"),
            description: getDescription(state, "RandomFox"),
            isFetching: getIsFetching(state, "RandomFox"),
            result: getResult(state, "RandomFox"),
        },
        RandomCat: {
            nameAPI: getNameAPI(state, "RandomCat"),
            defaultImgUrl: getDefaultImgUrl(state, "RandomCat"),
            description: getDescription(state, "RandomCat"),
            isFetching: getIsFetching(state, "RandomCat"),
            result: getResult(state, "RandomCat"),
        },
    };
};

export default compose(
    connect(mapStateToProps, { getCatsThunk, getDogsThunk, getFoxsThunk }),
    withAuthRedirect
)(Home);
