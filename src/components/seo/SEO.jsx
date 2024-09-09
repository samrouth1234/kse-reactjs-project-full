import { Helmet ,HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({title , description} ) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        </Helmet>
    </HelmetProvider>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default SEO;
