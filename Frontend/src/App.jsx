import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '/bootstrap/dist/css/bootstrap.css'
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import { BrowerRoutes, Routes, Route, Link} from 'react-router-dom'
import ProductList from './component/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowerRoutes>
        <Navbar bg="primary">
            <Container>
                <Link to={"/"} className='navbar-brannd text-white'>
                    React & Laravel CRUD APP
                </Link>
            </Container>

            <Container className='mt-5'>
                <Row>
                    <Col md={12}>
                        <Routes>
                            <Route exact path='/' element={<ProductList/>} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </BrowerRoutes>
  )
}

export default App
