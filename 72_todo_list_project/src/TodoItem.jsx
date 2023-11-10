import { IconButton, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({ todo, remove, toggle }) {
    const labelId = `checkbox-list-label-${todo.id}`;
    const removeTodo = () => {
        remove(todo.id)
    }
    const toggleTodo = () => {
        toggle(todo.id)
    }
    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={removeTodo}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton
                role={undefined}
                dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggleTodo}
                    />
                </ListItemIcon>
                <ListItemText
                    id={labelId}
                    primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
}