import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const IMAGES = {
  mint_token: require('./../../assets/images/mint_token.svg'),
  rewards_fans: require('./../../assets/images/rewards_fans.svg'),
  collectibles: require('./../../assets/images/collectibles.svg')
}

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeatureSplit = ({
  imageFill,
  title,
  imagePath,
  content
}) => {
  return (
    <div className="split-item">
      <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          Lightning fast workflow
        </div>
        <h3 className="mt-0 mb-12">
          {title}
        </h3>
        <p className="m-0">
          {content}
        </p>
      </div>
      <div className={
        classNames(
          'split-item-image center-content-mobile reveal-from-bottom',
          imageFill && 'split-item-image-fill'
        )}
        data-reveal-container=".split-item">
        <Image
          src={imagePath}
          alt="Features split 01"
          width={400}
          height={360} />
      </div>
    </div>
  )
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'How It Works',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <FeatureSplit
              imageFill={imageFill}
              title="Mint the Bitcoin of You"
              imagePath={IMAGES['mint_token']}
              content="We help you create your unique personal token based on Ethereum blockchain. Fans can buy these tokens to pay for subscription, tip or special services."
            />
            <FeatureSplit
              imageFill={imageFill} title="Creates Special Collectibles"
              imagePath={IMAGES['collectibles']}
              content="Creates limited rare items for your most passionate fans. The value of these items increase as your community grows. Early supporters have early adopters advantage to be the first ones who own these items."
            />
            <FeatureSplit
              imageFill={imageFill}
              imagePath={IMAGES['rewards_fans']}
              title="Rewards Your Passionate Fans"
              content="You are granted some free tokens each month to reward your most loyal fans with your own tokens who actively promote your channel and grow your community."
            />
            {/* 
            <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Lightning fast workflow
                  </div>
              <h3 className="mt-0 mb-12">
                Data-driven insights
                  </h3>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/features-split-image-02.png')}
                alt="Features split 02"
                width={528}
                height={396} />
            </div>
          </div>

          <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Lightning fast workflow
                  </div>
              <h3 className="mt-0 mb-12">
                Data-driven insights
                  </h3>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/features-split-image-03.png')}
                alt="Features split 03"
                width={528}
                height={396} />
            </div>
          </div> */}

          </div>
        </div>
      </div>
    </section >
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;