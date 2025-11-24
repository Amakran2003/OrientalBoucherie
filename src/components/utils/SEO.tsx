import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
}

export const SEO = ({
    title,
    description,
    image = '/images/logo.png',
    url = 'https://boucherieoriental18.fr/'
}: SEOProps) => {
    const fullTitle = `${title} | L'Oriental Boucherie par Aziz`;
    const baseUrl = 'https://boucherieoriental18.fr';
    const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImageUrl} />
        </Helmet>
    );
};
