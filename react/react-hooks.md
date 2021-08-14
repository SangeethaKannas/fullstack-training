### lifecycle events

1. Mounting events - when React element attached to DOM - executed once
2. Updating Events - when React element state changes- executed multiple times
3. Unmounting Events - when React element dettached from DOM - executed once


Basic Hooks

  useState - 

  useEffect - Accepts a function that contains imperative possible effectful code

  useContext - Accepts a context object ( value returned from React.createContext)
                current context value for that context                

Additional Hooks

    useRef - const refContainer = useRef(initialValue)

    useReducer  - const [state, dispatch] = useReduer(reducer, initialArg, init)

    useLayoutEffect

    useMemo  - returns a memoized value

    useCallback - returns a memoized callback

    useImerativeHandle - 

    useDebugValue  -  display a label for custom hooks in ReactDevTools
