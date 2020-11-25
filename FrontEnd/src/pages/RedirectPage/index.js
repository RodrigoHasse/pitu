import React from 'react';
import Header from '../../Componentes/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShortenerService from '../../services/shortenerService';
import { ptBR } from 'date-fns/locale';
import {RedirectContainer} from './styles'


class RedirectPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            url: '',
            errorMessage: ''
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;
        try {
            const service = new ShortenerService();
            const { url } = await service.getLink(code);
            window.location = url;
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops. a url solicidata não existe' });
        }
    }

    render() {
        const {errorMessage} = this.state; 
        return (
            
            <Container>
                {
                    errorMessage ? (
                        <>
                            <Header>
                                Seu novo encurtador de urls. :
                        </Header>
                            <RedirectContainer className="text-center">
                                <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                                <p className="m-3">{errorMessage}</p>
                                <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                            </RedirectContainer>
                        </>
                    ) : (
                        <p className="text-center">Redirecionando ... </p>
                    )
                }                
            </Container>
        )
    }
}

export default RedirectPage;
