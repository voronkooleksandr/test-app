

const Registration = function () {
    return (  
    <form>
        <label>
            Name:
            <input type="text" name="name"/>
        </label>
        <label>
            Surname:
            <input type="text" name="surname"/>
        </label>
        <label>
            Password:
            <input type="password" name="password"/>
        </label>
    </form>
    )
}

    export default Registration;