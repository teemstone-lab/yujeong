// index.ts
if (process.env.NODE_ENV === 'development') {
	// develop 환경에서만 사용
	const { worker } = require('./mocks/browser');
	worker.start();
}
// ReactDOM.render(<App />, document.getElementById('root'));
