import '../styles/global.css';
import ErrorBoundary from '../hoc/ErrorBoundary';

export default function App({ Component, pageProps }) {
    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
}