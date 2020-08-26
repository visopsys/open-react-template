import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const FeatureTile = ({
  title, content
}) => {
  return (
    <div className="tiles-item reveal-from-bottom">
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
            <Image
              src={require('./../../assets/images/feature-tile-icon-01.svg')}
              alt="Features tile icon 01"
              width={64}
              height={64} />
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h4 className="mt-0 mb-8">
            {title}
          </h4>
          <p className="m-0 text-sm">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}


const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'The Platform that Powers Creators',
    paragraph: 'You keep majority of income, not us. Other platforms or agencies pay creators minor amount of their revenue. We commit to pay our creators at least 95% of what we have.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <FeatureTile title="Dynamic Creator Economy" content="Paid subscriptions, fan tips or special collectible items - we have much more type of incomes for you than any other platforms." />
            <FeatureTile title="High Fan Engagement" content="Kreative creates a fun environment for your fans which drives more engagement to your community." />
            <FeatureTile title="Built on Blockchain" content="You take the control, not us. No President can take you down. Built on blockchain, Kreative makes this possible." />

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;