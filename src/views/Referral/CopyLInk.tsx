import React, { useState } from 'react'
import { Box, CopyIcon, Flex, FlexProps, IconButton } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

interface CopyAddressProps extends FlexProps {
  link: string
}

const Wrapper = styled(Flex)`
  align-items: center;
  border-radius: 16px;
  position: relative;
`

const Address = styled.div`
  flex: 1;
  position: relative;
  padding-left: 0px;
  text-wrap:wrap;

  & > span {
    display: inline-block;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.text};
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }

  &:after {
    content: '';
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }
`

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? 'inline-block' : 'none')};
  position: absolute;
  padding: 8px;
  top: -38px;
  right: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
  width: 100px;
`

const CopyLink: React.FC<CopyAddressProps> = ({ link, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false)
  const { t } = useTranslation()

  const copyAddress = () => {
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(link).then(() => displayTooltip())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = link
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip()
    }
  }

  function displayTooltip() {
    setIsTooltipDisplayed(true)
    setTimeout(() => {
      setIsTooltipDisplayed(false)
    }, 1000)
  }

  return (
    <Box position="relative" {...props}>
      <Wrapper>
        <Address title={link}>
            <span>{link}</span>
          {/* <input type="text" readOnly value={link} /> */}
        </Address>
        <IconButton variant="text" onClick={copyAddress}>
          <CopyIcon color="primary" width="24px" />
        </IconButton>
      </Wrapper>
      <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{t('Copied')}</Tooltip>
    </Box>
  )
}

export default CopyLink
