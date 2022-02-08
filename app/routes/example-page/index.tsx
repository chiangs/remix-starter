// Remix
import { LoaderFunction, useLoaderData, Link, useCatch } from 'remix';

const goBack = <Link to="/">GoBack</Link>;

// Loader
type LoaderData = null;

export const loader: LoaderFunction = async ({ request }) => {
    console.log(
        '🚀 ~ file: example-page.tsx ~ line 8 ~ constloader:LoaderFunction= ~ request',
        request,
    );
    // loader logic
    const data: LoaderData = null;
    // #region error testing
    /**
     * ! Throw errors to test the bourndaries
     * Remove code in error testing region
     * when developing actual project
     */
    const uncaught = new Response('No random joke found', { status: 500 });
    const caught = new Response('No random joke found', { status: 404 });
    const testingErrors = true;
    const expected = true;
    if (testingErrors) {
        throw expected ? caught : uncaught;
    }
    // #endregion error testing
    return data;
};

export const CatchBoundary = () => {
    const caught = useCatch();
    if (caught.status === 404) {
        return (
            <div className="error-container">
                <p>Nothing to see here</p>
                <p>Container nav still works</p>
                {goBack}
            </div>
        );
    }
    throw new Error(`Unexpected caught response with status: ${caught.status}`);
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
    console.error(error);
    return (
        <div className="error-container">
            I did a whoopsies.
            <p>Container nav still works</p>
            {goBack}
        </div>
    );
};

const ExampleIndex = () => {
    const data = useLoaderData<LoaderData>();
    return (
        <section className="container--page--route">
            <h2>Example Page</h2>
            <p>This is an example.</p>
            <p>{data}</p>
        </section>
    );
};

export default ExampleIndex;
