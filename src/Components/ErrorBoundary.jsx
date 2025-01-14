import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }
    
    componentDidCatch(error, errorInfo) {
        console.log('ErrorBoundary caght an error', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h2>Ups!!... Algo Salió Mal</h2>
        }
        return this.props.children;
    }
 }