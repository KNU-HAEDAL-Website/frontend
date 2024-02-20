// scroll-layout.tsx

interface ScrollLayoutProps {
  children: React.ReactNode;
  pageIndex: number;
  selectedPage: number;
}

const ScrollLayout: React.FC<ScrollLayoutProps> = ({ children, pageIndex, selectedPage }) => {
  const isCurrentPage = pageIndex === selectedPage;

  return (
    <div className="h-screen" style={{ display: isCurrentPage ? 'block' : 'none' }}>
      {children}
    </div>
  );
};

export default ScrollLayout;
