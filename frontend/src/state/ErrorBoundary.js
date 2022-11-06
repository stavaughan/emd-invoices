import { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null
		};
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		//logErrorToMyService(error, errorInfo);

		this.setState({
			hasError: true,
			error: error,
			errorInfo: errorInfo,
		})
	}

	render() {

		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div className="container">
					<div className="alert alert-danger" role="alert">
						<h4 className="alert-heading">Error Details</h4>
						<p>{this.state.error && this.state.error.toString()}</p>
						<hr />
						<pre
							className="overflow-auto p-3"
							style={{
								"height": "100%",
								//"backgroundColor": "#233445",
								//"color": "#ddd"
							}}
						>
							<code style={{ whiteSpace: 'pre-wrap' }}>
								<h5>Stack Trace:</h5>
								{this.state.errorInfo.componentStack}
							</code>
						</pre>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary
