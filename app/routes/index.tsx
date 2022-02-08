// Remix
import { Link } from 'remix';
// Styles
import styles from '~styles/index.css';
// Components
import { ButtonPrimary, ButtonPrimaryProps, links as buttonPrimaryLinks } from '~components';

export const links = () => [
    ...buttonPrimaryLinks(),
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
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/tutorials/blog"
                        rel="noreferrer noopener"
                    >
                        15m Quickstart Blog Tutorial
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/tutorials/jokes"
                        rel="noreferrer noopener"
                    >
                        Deep Dive Jokes App Tutorial
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://remix.run/docs" rel="noreferrer noopener">
                        Remix Docs
                    </a>
                </li>
            </ul>
        </article>
    );
}
