# Life cycle
1. Mounting
    Inserting elements into DOM
2. Updating
    methods for updating dom
3. Unmounting
    removing a component from dom

# React Hooks

## Manage state
useState

useReducer
const [state, dispatch] = useReducer(reducer, initialState, initialDispatch);

## Handle Side effects
useEffect
    callback (mandatory) and dependency array ( optional)

    empty dependency array = componentDidMount

    no dependency array = componentDidUpdate
        only when the component is updated ( re-renders)

    return function = componentWillUnmount  // Cleanup effect

useLayoutEffect

    applyBlockingEffect
    return cleanupEffect

    [dependencies]

Use context API
    const ThemeContext = React.createContext();
    const contextValue = useContext(ThemeContext)

## Memoization
useMemo
    const memoizedValue = useMemo (()=> expensiveFn(dependencies), [dependencies])

useCallback

    const memoizedCallback = useCallback(() => expensiveFn(dependencies), [dependencies])

## Use Refs
    const ref = useRef();

    useImperativeHandle =(ref, createHandle, [dependencies])

## Custom hooks for Reusability
    

    

    


