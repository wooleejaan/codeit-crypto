import React, { useEffect, useState } from "react";

import styled from "styled-components";

import useMediaQuery from "@/hooks/useMediaQuery";
import MainLogo from "@components/SVGComponents/MainLogo";
import RestoreIcon from "@components/SVGComponents/RestoreIcon";
import { SDiv, SText, colors } from "@styles";

import GnbButton from "./GnbButton";
import SearchHistory from "./SearchHistory/SearchHistory";
import Select from "./Select/Select";

const GnbPresenter = ({ isHistoryOpen, onResetClick, onHistoryClick }) => {
  const { mediaQuery: mobileMediaQuery } = useMediaQuery(768);
  const [isMobile, setIsMobile] = useState(mobileMediaQuery.matches);

  useEffect(() => {
    setIsMobile(mobileMediaQuery.matches);
  }, [mobileMediaQuery.matches]);

  return (
    <S.Header>
      <S.GnbWrapper row sb act h={100} pdl={57} pdr={60} bg={colors.background}>
        <MainLogo isMobile={isMobile} />
        <S.ButtonWrapper row g={16}>
          <GnbButton onClick={onResetClick} isHistoryOpen={false}>
            <RestoreIcon />
            <S.Text b3>다시 계산하기</S.Text>
          </GnbButton>
          <Select />
          <GnbButton onClick={onHistoryClick} isHistoryOpen={isHistoryOpen}>
            <SText b3>검색기록</SText>
          </GnbButton>
        </S.ButtonWrapper>
        {isHistoryOpen && <SearchHistory />}
      </S.GnbWrapper>
    </S.Header>
  );
};

const S = {};

S.Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
`;

S.GnbWrapper = styled(SDiv)`
  @media only screen and (max-width: 1200px) {
    padding-left: 28px;
    padding-right: 24px;

    background-color: ${colors.white};
  }

  @media only screen and (max-width: 768px) {
    height: 68px;
    padding-left: 25px;
    padding-right: 20px;
  }
`;

S.ButtonWrapper = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    gap: 12px;
  }
`;

S.Text = styled(SText)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default GnbPresenter;
