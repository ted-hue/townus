import Container from './Container';

const Section = ({ 
  children, 
  className = '', 
  containerSize = 'default',
  padding = 'section-padding',
  background = 'bg-white'
}) => {
  const paddingClasses = {
    'section-padding': 'py-16 sm:py-20 lg:py-24',
    'lg': 'py-20 sm:py-24 lg:py-32',
    'md': 'py-12 sm:py-16 lg:py-20',
    'sm': 'py-8 sm:py-12 lg:py-16',
    'none': ''
  };

  const classes = `${background} ${paddingClasses[padding]} ${className}`;

  return (
    <section className={classes}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;