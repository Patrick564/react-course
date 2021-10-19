// a pure function never change its return value
const MyComponent = ({ myProp }) => {
    return (
        <div>
            Name: {myProp}
        </div>
    )
}

const App = () => {
    return (
        <MyComponent myProp={'Happy'} />
    )
}
