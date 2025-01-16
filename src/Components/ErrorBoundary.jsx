import { Button, CardMedia } from "@mui/material";
import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null};
    }
    static getDerivedStateFromError(error) {
        return {hasError: true, error}
    }
    
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caght an error', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
            <div>
                <CardMedia
                    component='img'
                    height='140'
                    href="/gift.gif"
                    alt='gif de error'
                    >
                    <h2>Ups!!... Algo Salió Mal</h2>
                </CardMedia>
                <p>{this.state.error?.message || 'Error en la aplicación'}</p>
                <Button
                onClick={ () => {
                    this.setState({hasError: false});
                    window.location.reload();
                }}
                variant="default"
                >
                    Reintentar
                </Button>
            </div>    
        )}
        return this.props.children;
    }
 }