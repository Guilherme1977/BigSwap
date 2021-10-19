import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArrowBackIcon, Box, Button, Flex, Text, Heading, ArrowForwardIcon } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { Link, useParams, RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import PageLoader from 'components/Loader/PageLoader'
import PageHeader from 'components/PageHeader'
import SectionsWithFoldableText from 'components/FoldableSection/SectionsWithFoldableText'
import PageSection from 'components/PageSection'
import { PageMeta } from 'components/Layout/Page'
import useTheme from 'hooks/useTheme'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Page from 'views/Page'
import CopyLink from './CopyLInk'


const Gradient = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.cardHeader};
`

const StyledPageHeader = styled(PageHeader)`
  margin-bottom: -40px;
  padding-bottom: 40px;
`

const StyledHeaderInner = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & div:nth-child(1) {
    order: 1;
  }
  & div:nth-child(2) {
    order: 0;
    margin-bottom: 32px;
    align-self: end;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    & div:nth-child(1) {
      order: 0;
    }
    & div:nth-child(2) {
      order: 1;
      margin-bottom: 0;
      align-self: auto;
    }
  }
`

const StyledSubheading = styled(Heading)`
  background: -webkit-linear-gradient(#ffd800, #eb8c00);
  font-size: 20px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 24px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    -webkit-text-stroke: unset;
  }
  margin-bottom: 8px;
`

const StyledHeading = styled(Heading)`
  color: #ffffff;
  background: -webkit-linear-gradient(#7645d9 0%, #452a7a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 6px transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
`

const Wrapper = styled.div`
  border-radius: 32px;
  width: 100%;
  background-image: linear-gradient(#7645d9, #452a7a);
  max-height: max-content;
  overflow: hidden;
`

const Inner = styled(Flex)`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  max-height: 220px;
`

const LeftWrapper = styled(Flex)`
  z-index: 1;
  padding: 24px;
  width: 100%;
  
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const RightWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -24px;
  opacity: 0.8;

  & img {
    height: 200px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 1;

    & img {
      height: 100%;
    }
  }
`

const Referral = () => {

  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  const referralLink = `https://bigboyswap.com/ref=${account}`

  // const referralLink = `http://localhost:3000/ref=${account}`

  return (
    <Page>

      <StyledPageHeader>
        <StyledHeaderInner>
          <div>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('BigBoySwap Referral')}
            </Heading>
            <Heading scale="lg" color="text">
              {t(`Share the referral link below to invite your friends `)}
            </Heading>
            <Heading scale="lg" color="text">
              {t(`and earn 2% of your friends' earnings FOREVER!`)}
            </Heading>
          </div>
        </StyledHeaderInner>
      </StyledPageHeader>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' ,height:'100%'} }}
        background={theme.colors.background}
        index={1}
        concaveDivider
        dividerPosition="top"
      >
        {!account && (
          <Flex mb="24px">
            <ConnectWalletButton />{' '}
            <Heading scale="lg" color="text">
              {t(`Unlock wallet to get your unique referral link`)}
            </Heading>
          </Flex>
        )}
        <Flex mb="24px">
          <Wrapper>
            <Inner>
              <LeftWrapper>
                <StyledSubheading>Bigboy Referral Link</StyledSubheading>
                {account && <CopyLink link={referralLink} mb="24px" />}

                {/* {account && (
                  <Link target='_blank' to={referralLink}>
                    <Button>
                      <Text color="invertedContrast" bold fontSize="16px" mr="4px">
                        {t('go link')}
                      </Text>
                      <ArrowForwardIcon color="invertedContrast" />
                    </Button>
                  </Link>
                )} */}
              </LeftWrapper>
              <RightWrapper>
                <img src="/images/home/lunar-bunny/bboy.png" alt={t('BigBoy')} />
              </RightWrapper>
            </Inner>
          </Wrapper>
        </Flex>
      </PageSection>
      <Flex flexGrow={1} />
    </Page>
  )
}

export default Referral
