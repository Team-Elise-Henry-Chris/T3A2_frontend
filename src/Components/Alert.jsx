// Status types: undefined, info, success, warning, error
const Alert = ({ status, message }) => {

    const createAlert = () => {
        let className = 'alert shadow-lg'

        switch (status) {
            case 'info':
                className += ' alert-info'
                break

            case 'success':
                className += ' alert-success'
                break

            case 'warning':
                className += ' alert-warning'
                break

            case 'error':
                className += ' alert-error'
                break

            default:
                break
        }

        return (
            <div className={className}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{message}</span>
                </div>
            </div>
        )
    }

    return createAlert()
}

export default Alert