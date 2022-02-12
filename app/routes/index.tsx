// Remix
import { Link } from 'remix';
// Styles
import styles from '~styles/index.css';
// Components
import { ButtonPrimary, ButtonPrimaryProps } from '~components';

export const links = () => [
    // ...buttonPrimaryLinks(),
    {
        rel: 'stylesheet',
        href: styles,
    },
];

export default function Index() {
    const handleClick = () => console.log('clicked');
    const buttonPrimarLabel = 'Button';
    const buttonPrimaryProps: ButtonPrimaryProps = {
        clickHandler: handleClick,
    };
    return (
        <article className="container--page">
            <h1>Welcome to Remix</h1>
            <ButtonPrimary {...buttonPrimaryProps}>{buttonPrimarLabel}</ButtonPrimary>
            <ul>
                <li>
                    <Link prefetch="intent" to="/example-page">
                        Go to example route
                    </Link>
                </li>
            </ul>
        </article>
    );
}
