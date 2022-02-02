import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react"

export interface ChildrenProps {
        children: ReactNode
}

type PageContextType = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  myName: string
  setMyName: Dispatch<SetStateAction<string>>
}
const PageContext = createContext<PageContextType | undefined>(undefined)

export function PageWrapper({ children } : ChildrenProps ) {  
  const [loading, setLoading] = useState<boolean>(false)  
  const [myName, setMyName] = useState<string>("Mike")

  const pageValue = useMemo(() => ({
        loading, setLoading,
        myName, setMyName,
    }), [
        loading, setLoading,
        myName, setMyName,
    ])

  return (
    <PageContext.Provider value={pageValue}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
    const context = useContext(PageContext)
        if (context === undefined) {
            throw new Error('Context is undefined')
        }
        return context
}
