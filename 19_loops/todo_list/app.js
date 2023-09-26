const todos = []
while (true)
{
    input = prompt("enter a prompt");
    if (input === "new")
    {
        const todo = prompt("enter a todo item");
        todos.push(todo);
        console.log(`${todo} added to list`)

        // TODO convert into function
        console.log('--- todo list ---')
        for (let entry of Object.entries(todos))
        {
            console.log(`${entry[0]} - ${entry[1]}`);
        }
        console.log('-----------------')
    }
    else if (input === "list") 
    {
        console.log('--- todo list ---')
        for (let entry of Object.entries(todos))
        {
            console.log(`${entry[0]} - ${entry[1]}`);
        }
        console.log('-----------------')
    }
    else if (input === "delete") 
    {
        if (todos.length === 0)
        {
            console.log("list has no items");
            continue;
        }

        console.log('--- todo list ---')
        for (let entry of Object.entries(todos))
        {
            console.log(`${entry[0]} - ${entry[1]}`);
        }
        console.log('-----------------')

        let index = -1;
        while (true)
        {
            index = parseInt(prompt("enter item index"));
            if (isNaN(index) || index < 0 || index >= todos.length) 
            {
                console.log("bad index input")
                continue;
            }
            break;
        }

        const deleted = todos.splice(index, 1)[0];
        console.log(`${deleted} removed from list`)

        console.log('--- todo list ---')
        for (let entry of Object.entries(todos))
        {
            console.log(`${entry[0]} - ${entry[1]}`);
        }
        console.log('-----------------')
    }
    else if (input === "quit") 
    {
        console.log("thanks for playing");
        break;
    }
    else
    {
        console.log("unknown input");
    }
}