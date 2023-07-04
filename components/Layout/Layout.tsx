import React from 'react';
import Header from './Header';
import Footer from './Footer';

type ILayoutProps = {
  hideHeader?: boolean;
  hideFooter?: boolean;
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout = ({
  hideHeader = false,
  hideFooter = false,
  children,
  title = 'Mayvent',
}: ILayoutProps) => {
  return (
    <>
      <title>{title}</title>
      <nav className='m-auto container'>
        {!hideHeader && <Header />}
      </nav>
      <main>{children}</main>
      {!hideFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
