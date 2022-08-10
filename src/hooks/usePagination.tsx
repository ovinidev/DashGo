import {
  createContext,
  Dispatch, ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';

type ExampleContextProps = {
  children: ReactNode;
}

type ExampleContextData = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  siblingsCount: number;
  totalCountOfRegisters: number;
  lastPage: number;
  previousPages: number[];
  nextPages: number[];
  setTotalCountOfRegisters: Dispatch<SetStateAction<number>>
}

const PaginationContext = createContext({} as ExampleContextData);

export const PaginationProvider = ({ children }: ExampleContextProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const siblingsCount = 1;
  const registerPerPage = 10;

  const [totalCountOfRegisters, setTotalCountOfRegisters] = useState<number>(0);

  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const generatePagesArray = (from: number, to: number) => {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1
      })
      .filter(page => page > 0)
  }

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <PaginationContext.Provider value={{
      currentPage,
      setCurrentPage,
      siblingsCount,
      totalCountOfRegisters,
      lastPage,
      previousPages,
      nextPages,
      setTotalCountOfRegisters
    }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
