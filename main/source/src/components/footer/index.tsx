import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import GUButton from '@components/control/gu-button';
import HeaderTitleLine from '@components/other/header-title-line';
import Socials from '@components/other/socials';
import PostTiny from '@components/post/post-tiny';
import { AppState } from '@store';
import { handleFooterPosts } from '@store/thunk/post';
import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

interface FooterColProps {
  title: string;
  children: ReactNode;
  colClassName?: string;
  className?: string;
}

const StyledButton = styled(GUButton)`
  margin-bottom: ${15 / 16}em;
  margin-right: ${15 / 16}em;
`;

const FooterCol = ({ title, children, className, colClassName }: FooterColProps) => (
  <div className={colClassName || 'col-12 col-md-6 col-lg-4'}>
    <div className={classNames('footer-col', className)}>
      <HeaderTitleLine title={title} />
      {children}
    </div>
  </div>
);

interface FooterProps {
  theme?: ThemeVariation;
}

const Footer = ({ theme }: FooterProps) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: AppState) => state.posts.footerList);

  useEffect(() => {
    dispatch(handleFooterPosts({ _limit: 3, type_like: 'image' }));
  }, []);

  return (
    <footer className={classNames(renderThemeClass(theme))}>
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <FooterCol title="About us" className="-about">
              <p>
                This is my CIS453L project.
              </p>
              <div className="contact-method">
                <p>
                  <i className="fas fa-map-marker-alt"></i>ECPI University 5555 Greenwhich Rd, Virginia Beach, VA 23462
                </p>
                <p>
                  <i className="far fa-mobile-android"></i>844-334-4466 | 125-668-886
                </p>
                <p>
                  <i className="fas fa-headphones-alt"></i>iandel3624@students.ecpi.edu
                </p>
              </div>
            </FooterCol>
            <FooterCol title="Featured Information">
              {data?.map((item, index) => (
                <PostTiny theme={theme} key={index} data={item} />
              ))}
            </FooterCol>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="row">
                <FooterCol className="-util" colClassName="col-12 col-md-6 col-lg-12" title="Resources">
                  <div className="tags-group">
                    {[' ECPI news', 'Gaming', 'Sports', 'Food', 'Travel'].map((item, index) => (
                      <StyledButton href="#" key={index} weight="light" size="small" variant="contained" color="light">
                        {item}
                      </StyledButton>
                    ))}
                  </div>
                </FooterCol>
                <FooterCol colClassName="col-12 col-md-6 col-lg-12" title="Social Media">
                  <Socials
                    spacing={10}
                    height={50}
                    width={50}
                    variant="contained"
                    size="small"
                    shape="circle"
                    color="light"
                  />
                </FooterCol>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2022, iandel3624 - CIS453L project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
