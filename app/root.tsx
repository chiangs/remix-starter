// Remix
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
// Styles
import normalizeStylesUrl from '~styles/__normalize__.css';
import globablStylesUrl from '~styles/global.css';
import rootStylesUrl from '~styles/index.css';

export const meta: MetaFunction = () => {
    return { title: 'New Remix App' };
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: normalizeStylesUrl,
        },
        {
            rel: 'stylesheet',
            href: globablStylesUrl,
        },
        {
            rel: 'stylesheet',
            href: rootStylesUrl,
        },
    ];
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}
