import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "../Preloader/Preloader";

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

            {/* <video controls>
                <source src={card.result} type="video/mp4" autoplay="autoplay"/>
            </video> */}

            {/* <ul className="uk-list uk-list-striped">
                {items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul> */}
            <button>New</button>
        </div>
    );
};

export default compose(withRouter)(Auxiliary);
