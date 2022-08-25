import { Link as LinkRouter } from 'react-router-dom';

function CallToAction() {
    const buttonText = "Get Started!";
    return (
        <div>
            <LinkRouter class="Welcome-Button text-light" to='cities'>{buttonText}
            </LinkRouter>
        </div>
    )
}

export default CallToAction
