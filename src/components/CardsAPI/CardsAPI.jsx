import { Col, Row } from "antd";
import SubCard from "./SubCard/SubCard";

const CardsAPI = (props) => {
    return (
        <>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <SubCard
                            {...props.Dogs}
                            getThunk={props.getDogsThunk}
                        />
                    </Col>

                    <Col span={8}>
                        <SubCard
                            {...props.RandomFox}
                            getThunk={props.getFoxsThunk}
                        />
                    </Col>

                    <Col span={8}>
                        <SubCard
                            {...props.RandomCat}
                            getThunk={props.getCatsThunk}
                        />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CardsAPI;
