import React,{Fragment} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Buttons from '../../Components/widgets/Buttons/button'

const EmptyCart = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="text-center mt-5 mb-5">
                    <h1 style={{fontFamily:'Robotto Condensed'}}>Your Cart is Empty</h1>
                    <Buttons linkTo="/shirts" cta="Go To Store"/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default EmptyCart;